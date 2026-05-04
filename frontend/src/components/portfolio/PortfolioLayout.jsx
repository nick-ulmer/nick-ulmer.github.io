import { Divider, Box, List, ListItemButton, ListItemText, Typography } from '@mui/material';
import { Link, useLocation, Outlet } from 'react-router-dom';

const categories = [
    { label: 'All Projects', path: '/portfolio', highlight: true },
    { label: 'Software', path: '/portfolio/software' },
    { label: 'Frontend', path: '/portfolio/frontend' },
    { label: 'DataScience', path: '/portfolio/datascience' },
    { label: 'Game Development', path: '/portfolio/gamedev' },
];

export default function PortfolioLayout({ children }) {
    const location = useLocation();

    return (
        <Box sx={{ display: 'flex', flexGrow: 1, minHeight: '100%' }}>
            <Box sx={{
                width: 220,
                backgroundColor: '#2a2a2a',
                color: 'white',
                flexShrink: 0,
                ml: 2,
            }}>
                <Typography
                    variant="overline"
                    sx={{ px: 2, pt: 3, pb: 1, display: 'block', opacity: 0.6 }}
                >
                    Portfolio
                </Typography>
                <List>
                    {categories.map(cat => (
                        <>
                            <ListItemButton
                                key={cat.path}
                                component={Link}
                                to={cat.path}
                                selected={location.pathname === cat.path}
                                sx={{
                                    color: 'white',
                                    fontWeight: cat.highlight ? 'bold' : 'normal',
                                    '&.Mui-selected': {
                                        backgroundColor: 'rgba(255,255,255,0.15)',
                                    },
                                    '&:hover': {
                                        backgroundColor: 'rgba(255,255,255,0.08)',
                                    },
                                }}
                            >
                                <ListItemText
                                    primary={cat.label}
                                    primaryTypographyProps={cat.highlight ? { fontWeight: 'bold', opacity: 1 } : { opacity: 0.85 }}
                                />
                            </ListItemButton>
                            {cat.highlight && <Divider sx={{ borderColor: 'rgba(255,255,255,0.15)', my: 0.5 }} />}
                        </>
                    ))}
                </List>
            </Box>
            <Box sx={{ flexGrow: 1, p: 4 }}>
                {children}
                <Outlet />
            </Box>
        </Box>
    );
}