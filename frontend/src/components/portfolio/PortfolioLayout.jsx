import { useState } from 'react';
import { Divider, Box, List, ListItemButton, ListItemText, Typography, IconButton, Drawer } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, useLocation, Outlet } from 'react-router-dom';
import { categories } from '../../data/categories';

const navItems = [
    { label: 'All Projects', path: '/portfolio', highlight: true },
    ...categories.map(cat => ({
        label: cat.label,
        path: `/portfolio/${cat.slug}`,
    })),
];

function SidebarContent({ onNavigate }) {
    const location = useLocation();
    return (
        <>
            <Typography
                variant="overline"
                sx={{ px: 2, pt: 3, pb: 1, display: 'block', opacity: 0.6 }}
            >
                Portfolio
            </Typography>
            <List>
                {navItems.map(cat => (
                    <Box key={cat.path}>
                        <ListItemButton
                            component={Link}
                            to={cat.path}
                            selected={location.pathname === cat.path}
                            onClick={onNavigate}
                            sx={{
                                color: { xs: 'black', md: 'white' },
                                '&.Mui-selected': { backgroundColor: { xs: 'rgba(0,0,0,0.08)', md: 'rgba(255,255,255,0.15)' } },
                                '&:hover': { backgroundColor: { xs: 'rgba(0,0,0,0.04)', md: 'rgba(255,255,255,0.08)' } },
                            }}
                        >
                            <ListItemText
                                primary={cat.label}
                                primaryTypographyProps={cat.highlight ? { fontWeight: 'bold', opacity: 1 } : { opacity: 0.85 }}
                            />
                        </ListItemButton>
                        {cat.highlight && <Divider sx={{ borderColor: { xs: 'rgba(0,0,0,.75)', md: 'rgba(255,255,255,0.15)' }, my: 0.5 }} />}
                    </Box>
                ))}
            </List>
        </>
    );
}

export default function PortfolioLayout({ children }) {
    const [drawerOpen, setDrawerOpen] = useState(false);

    return (
        <Box sx={{ display: 'flex', flexGrow: 1, minHeight: '100%' }}>

            {/* Desktop sidebar — hidden on mobile */}
            <Box sx={{
                width: 220,
                backgroundColor: '#2a2a2a',
                color: 'white',
                flexShrink: 0,
                ml: 2,
                display: { xs: 'none', md: 'block' },
            }}>
                <SidebarContent />
            </Box>

            {/* Mobile drawer */}
            <Drawer
                anchor="left"
                open={drawerOpen}
                onClose={() => setDrawerOpen(false)}
                PaperProps={{ sx: { width: 220, backgroundColor: '#2a2a2a', color: 'white' } }}
            >
                <SidebarContent onNavigate={() => setDrawerOpen(false)} />
            </Drawer>

            {/* Main content */}
            <Box sx={{ flexGrow: 1, p: { xs: 2, md: 4 } }}>

                {/* Mobile toggle button */}
                <Box sx={{ display: { xs: 'flex', md: 'none' }, mb: 2 }}>
                    <IconButton
                        onClick={() => setDrawerOpen(true)}
                        sx={{ color: 'text.primary' }}
                        aria-label="open portfolio navigation"
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="overline" sx={{ alignSelf: 'center', ml: 1, opacity: 0.6 }}>
                        Portfolio
                    </Typography>
                </Box>

                {children}
                <Outlet />
            </Box>
        </Box>
    );
}