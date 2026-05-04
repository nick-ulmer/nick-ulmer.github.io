import { ButtonBase, AppBar, Toolbar, Typography, Button, Box } from '@mui/material'
import { Link } from 'react-router-dom'
import f1Logo from '../assets/f1-logo.svg'

export default function Navbar() {
    return (
        <AppBar position="static">
            <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Box sx={{ flex: 1, display: 'flex', alignItems: 'center' }}>
                    <ButtonBase component={Link} to="/">
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                            <img src={f1Logo} alt="F1 for help logo" style={{ height: '48px', width: '48px' }} />
                            <Typography variant="h5">For Help</Typography>
                        </Box>
                    </ButtonBase>
                </Box>
                <Box sx={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Typography variant="h6">Nicholas A. Ball Ulmer</Typography>
                </Box>
                <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-end', gap: 1 }}>
                    <Button color="inherit" component={Link} to="/"><Typography variant="h6">Home</Typography></Button>
                    <Button color="inherit" component={Link} to="/portfolio"><Typography variant="h6">Portfolio</Typography></Button>
                    <Button color="inherit" component={Link} to="/belief"><Typography variant="h6">Belief</Typography></Button>
                    <Button color="inherit" component={Link} to="/about"><Typography variant="h6">About</Typography></Button>
                    <Button color="inherit" component={Link} to="/contact"><Typography variant="h6">Contact</Typography></Button>
                </Box>
            </Toolbar>
        </AppBar>
    )
}