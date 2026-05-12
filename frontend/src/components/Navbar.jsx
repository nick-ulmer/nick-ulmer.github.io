import { useState } from 'react'
import { ButtonBase, AppBar, Toolbar, Typography, Button, Box, IconButton, Drawer, List, ListItemButton, ListItemText, Divider } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import { Link } from 'react-router-dom'
import f1Logo from '../assets/f1-logo.svg'

const navLinks = [
    { label: 'Home', to: '/' },
    { label: 'Portfolio', to: '/portfolio' },
    //{ label: 'Belief', to: '/belief' },
    { label: 'Resume', to: '/resume' },
    { label: 'About', to: '/about' },
    { label: 'Contact', to: '/contact' },
]

export default function Navbar() {
    const [drawerOpen, setDrawerOpen] = useState(false)

    return (
        <AppBar position="static">
            <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>

                {/* Left: Logo */}
                <Box sx={{ flex: 1, display: 'flex', alignItems: 'center' }}>
                    <ButtonBase component={Link} to="/">
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                            <img src={f1Logo} alt="F1 for help logo" style={{ height: '48px', width: '48px' }} />
                            <Typography variant="h5">For Help</Typography>
                        </Box>
                    </ButtonBase>
                </Box>

                {/* Center: Name — hidden on mobile */}
                <Box sx={{ flex: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'center', alignItems: 'center' }}>
                    <Typography variant="h6">Nicholas A. Ball Ulmer</Typography>
                </Box>

                {/* Right: Desktop nav or mobile hamburger */}
                <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                    <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1 }}>
                        {navLinks.map(link => (
                            <Button key={link.to} color="inherit" component={Link} to={link.to}>
                                <Typography variant="h6">{link.label}</Typography>
                            </Button>
                        ))}
                    </Box>
                    <IconButton
                        color="inherit"
                        sx={{ display: { xs: 'flex', md: 'none' } }}
                        onClick={() => setDrawerOpen(true)}
                        aria-label="open menu"
                    >
                        <MenuIcon />
                    </IconButton>
                </Box>
            </Toolbar>

            {/* Mobile drawer */}
            <Drawer anchor="right" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
                <Box sx={{ width: 220, pt: 2 }}>
                    <List>
                        {navLinks.map(link => (
                            <ListItemButton
                                key={link.to}
                                component={Link}
                                to={link.to}
                                onClick={() => setDrawerOpen(false)}
                            >
                                <ListItemText primary={link.label} />
                            </ListItemButton>
                        ))}
                    </List>
                </Box>
            </Drawer>
        </AppBar>
    )
}