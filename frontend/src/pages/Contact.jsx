import { useEffect } from 'react';
import { Container, Typography, Box, Divider, Link, Stack } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import LanguageIcon from '@mui/icons-material/Language';

const contacts = [
    {
        icon: <EmailIcon />,
        label: 'Email',
        display: 'nball1000@gmail.com',
        href: 'mailto:nball1000@gmail.com',
    },
    {
        icon: <LinkedInIcon />,
        label: 'LinkedIn',
        display: 'linkedin.com/in/nicholas-ball-ulmer',
        href: 'https://linkedin.com/in/nicholas-ball-ulmer',
    },
    {
        icon: <GitHubIcon />,
        label: 'GitHub',
        display: 'github.com/nick-ulmer',
        href: 'https://github.com/nick-ulmer',
    },
    {
        icon: <LanguageIcon />,
        label: 'Website',
        display: 'f1forhelp.dev',
        href: 'https://f1forhelp.dev',
    },
];

export default function Contact() {
    useEffect(() => {
        document.title = 'Contact | Nicholas A. Ball Ulmer';
    }, []);

    return (
        <Container maxWidth="sm" sx={{ py: 8 }}>
            <Typography variant="h3" gutterBottom>
                Contact
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 6 }}>
                Feel free to reach out through any of the following.
            </Typography>

            <Divider sx={{ mb: 6 }} />

            <Stack spacing={4}>
                {contacts.map(contact => (
                    <Box key={contact.label} sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
                        <Box sx={{ color: 'text.secondary' }}>
                            {contact.icon}
                        </Box>
                        <Box>
                            <Link href={contact.href} target="_blank" underline="hover" color="inherit" sx={{ml:0.5}}>
                                {contact.display}
                            </Link>
                        </Box>
                    </Box>
                ))}
            </Stack>
        </Container>
    );
}