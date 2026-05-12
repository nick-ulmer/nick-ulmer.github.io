import { useEffect } from 'react';
import { Container, Typography, Box, Button, Paper } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

export default function Resume() {
    useEffect(() => {
        document.title = 'Résumé | Nicholas A. Ball Ulmer';
    }, []);

    return (
        <Container maxWidth="lg" sx={{ py: 6, px: { xs: 2, sm: 3 } }}>
            <Box sx={{
                display: 'flex',
                flexDirection: { xs: 'column', sm: 'row' },
                alignItems: { xs: 'flex-start', sm: 'center' },
                justifyContent: 'space-between',
                gap: 2,
                mb: 4,
            }}>
                <Typography variant="h3">Résumé</Typography>
                <Box sx={{ display: 'flex', gap: 2, flexShrink: 0 }}>
                    <Button
                        variant="outlined"
                        startIcon={<OpenInNewIcon />}
                        href="/resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        size="small"
                        sx={{ px: { sm: 2 }, py: { sm: 1 }, fontSize: { sm: '0.875rem' } }}
                    >
                        Open
                    </Button>
                    <Button
                        variant="contained"
                        startIcon={<DownloadIcon />}
                        href="/resume.pdf"
                        download="Nicholas_Ball_Ulmer_Resume.pdf"
                        size="small"
                        sx={{ px: { sm: 2 }, py: { sm: 1 }, fontSize: { sm: '0.875rem' } }}
                    >
                        Download
                    </Button>
                </Box>
            </Box>
            <Paper elevation={3} sx={{ overflow: 'hidden', borderRadius: 2 }}>
                <Box
                    component="iframe"
                    src="/resume.pdf"
                    sx={{
                        width: '100%',
                        height: { xs: '60vh', sm: '75vh', md: '85vh' },
                        border: 'none',
                        display: 'block',
                    }}
                    title="Nicholas A. Ball Ulmer — Résumé"
                />
            </Paper>
        </Container>
    );
}