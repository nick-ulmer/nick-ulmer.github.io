import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material'
import { Link } from 'react-router-dom'
import f1Logo from '../assets/f1-logo.svg'

export default function Navbar() {
    return (
        <AppBar position="static">
            <Toolbar>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, flexGrow: 1 }}>
                    {/*<img src={f1Logo} alt="F1 for help logo" style={{ height: '36px', width: '36px' }} />*/}
                    <Typography variant="h6">
                        Nicholas A. Ball Ulmer
                    </Typography>
                </Box>
                <Box>
                    <Button color="inherit" component={Link} to="/">Home</Button>
                    <Button color="inherit" component={Link} to="/portfolio">Portfolio</Button>
                    <Button color="inherit" component={Link} to="/about">About</Button>
                </Box>
            </Toolbar>
        </AppBar>
    )
}