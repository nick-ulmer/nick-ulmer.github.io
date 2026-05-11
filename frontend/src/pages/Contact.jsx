import { useEffect } from 'react';
import { Container, Typography, Box, Divider, Link, Stack } from '@mui/material';
import contacts from '@/data/contacts'

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