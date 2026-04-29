import { Box, Typography, IconButton, Divider } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

function Footer() {
    return (
        <Box
            component="footer"
            sx={{
                mt: 'auto',
                py: 4,
                px: 6,
                backgroundColor: 'primary.main',
                color: 'white',
            }}
        >
            <Divider sx={{ mb: 3, borderColor: 'rgba(255,255,255,0.2)' }} />
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 2 }}>
                <Box>
                    <Typography variant="h6">Nicholas A. Ball Ulmer</Typography>
                    <Typography variant="body2" sx={{ opacity: 0.7 }}>
                        Software Engineer · Game Developer · Language Enthusiast
                    </Typography>
                </Box>
                <Box>
                    <IconButton color="inherit" href="https://github.com/nick-ulmer" target="_blank">
                        <GitHubIcon />
                    </IconButton>
                    <IconButton color="inherit" href="https://linkedin.com/in/YOUR_LINKEDIN" target="_blank">
                        <LinkedInIcon />
                    </IconButton>
                    <IconButton color="inherit" href="mailto:YOUR_EMAIL">
                        <EmailIcon />
                    </IconButton>
                </Box>
            </Box>
            <Typography variant="body2" sx={{ mt: 2, opacity: 0.5, textAlign: 'center' }}>
                © {new Date().getFullYear()} Nicholas A. Ball Ulmer
            </Typography>
        </Box>
    );
}

export default Footer;