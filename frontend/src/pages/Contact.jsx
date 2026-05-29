import { useEffect, useState } from 'react';
import {
    Container, Typography, Box, Divider, Link, Stack,
    TextField, Button, Alert, CircularProgress, Grid
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import contacts from '@/data/contacts';
import { submitContact } from '@/api/client';

const emptyForm = { name: '', email: '', message: '', website: '' };

export default function Contact() {
    const [form, setForm] = useState(emptyForm);
    const [errors, setErrors] = useState({});
    const [status, setStatus] = useState('idle');

    useEffect(() => {
        document.title = 'Contact | Nicholas A. Ball Ulmer';
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm(f => ({ ...f, [name]: value }));
        if (errors[name]) setErrors(e => ({ ...e, [name]: null }));
    };

    const handleSubmit = async () => {
        setStatus('loading');
        setErrors({});
        try {
            const res = await submitContact(form);

            if (res.status === 201) {
                setStatus('success');
                setForm(emptyForm);
            } else if (res.status === 422) {
                const data = await res.json();
                const mapped = {};
                for (const [key, msgs] of Object.entries(data.errors ?? {})) {
                    mapped[key] = msgs[0];
                }
                setErrors(mapped);
                setStatus('idle');
            } else if (res.status === 429) {
                setStatus('ratelimit');
            } else {
                setStatus('error');
            }
        } catch {
            setStatus('error');
        }
    };

    return (
        <Container maxWidth="lg" sx={{ py: 8 }}>
            <Grid container spacing={20}>

                {/* Left: Connect */}
                <Grid size={{ xs: 12, md: 5 }}>
                    <Typography variant="h3" gutterBottom>
                        Connect
                    </Typography>
                    <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
                        Feel free to reach out through any of the following.
                    </Typography>
                    <Divider sx={{ mb: 4 }} />
                    <Stack spacing={4}>
                        {contacts.map(contact => (
                            <Box key={contact.label} sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
                                <Box sx={{ color: 'text.secondary' }}>
                                    {contact.icon}
                                </Box>
                                <Link href={contact.href} target="_blank" underline="hover" color="inherit">
                                    {contact.display}
                                </Link>
                            </Box>
                        ))}
                    </Stack>
                </Grid>

                {/* Right: Send a Message */}
                <Grid size={{ xs: 12, md: 7 }}>
                    <Typography variant="h3" gutterBottom>
                        Send a Message
                    </Typography>
                    <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
                        I'll get back to you as soon as I can.
                    </Typography>
                    <Divider sx={{ mb: 4 }} />

                    {status === 'ratelimit' && (
                        <Alert severity="warning" sx={{ mb: 2 }}>Too many requests. Please wait a minute and try again.</Alert>
                    )}
                    {status === 'error' && (
                        <Alert severity="error" sx={{ mb: 2 }}>Something went wrong. Try again or reach out directly.</Alert>
                    )}

                    {status === 'success' ? (
                        <Alert severity="success">
                            Message sent — I'll get back to you soon.
                        </Alert>
                    ) : (
                        <Stack spacing={2}>
                            <Box sx={{ display: 'none' }}>
                                <TextField name="website" value={form.website} onChange={handleChange} tabIndex={-1} />
                            </Box>
                            <TextField
                                label="Name"
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                error={!!errors.name}
                                helperText={errors.name}
                                fullWidth
                            />
                            <TextField
                                label="Email"
                                name="email"
                                type="email"
                                value={form.email}
                                onChange={handleChange}
                                error={!!errors.email}
                                helperText={errors.email}
                                fullWidth
                            />
                            <TextField
                                label="Message"
                                name="message"
                                value={form.message}
                                onChange={handleChange}
                                error={!!errors.message}
                                helperText={errors.message}
                                multiline
                                minRows={4}
                                fullWidth
                            />
                            <Box>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={handleSubmit}
                                    disabled={status === 'loading'}
                                    endIcon={status === 'loading' ? <CircularProgress size={16} color="inherit" /> : <SendIcon />}
                                >
                                    {status === 'loading' ? 'Sending…' : 'Send Message'}
                                </Button>
                            </Box>
                        </Stack>
                    )}
                </Grid>

            </Grid>
        </Container>
    );
}