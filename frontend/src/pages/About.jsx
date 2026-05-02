import { useEffect } from 'react';
import { Box, Container, Typography, Paper, Stack } from '@mui/material';

export default function About() {
    useEffect(() => {
        document.title = 'About Page | Nicholas A. Ball Ulmer';
    }, []);

    return (
        <Container maxWidth="md" sx={{ py: 6 }}>
            <Paper elevation={0} sx={{ p: 4, borderRadius: 2, backgroundColor: '#ffffff' }}>
                <Box sx={{ display: 'flex', gap: 6, alignItems: 'flex-start' }}>

                    {/* Image */}
                    <Box
                        component="img"
                        src="/images/photo_1.jpg"
                        alt="Nicholas A. Ball Ulmer"
                        sx={{
                            width: 280,
                            minWidth: 280,
                            height: 360,
                            borderRadius: 2,
                            objectFit: 'cover',
                            objectPosition: 'center center',
                        }}
                    />

                    {/* Content */}
                    <Stack spacing={3}>
                        <Box>
                            <Typography variant="h4" fontWeight={600}>
                                Nicholas A. Ball Ulmer
                            </Typography>
                            <Typography variant="subtitle1" color="text.secondary">
                                Full-Stack Developer • Game Developer • Systems Builder
                            </Typography>
                        </Box>

                        <Typography variant="body1" paragraph>
                            I am an idealist that would love to see a world inhabited by
                            life-long learners. After I have the resources to sustain myself,
                            I look forward to building the new world where everyone can
                            individually contribute to the future of humanity and our
                            collective consciousness out in the cosmos.
                        </Typography>

                        <Typography variant="body1" paragraph>
                            My current focus in life is on starting my career in software
                            and automation. I love to imagine new applications built to better
                            people's brains. I also love teaching, language learning, and academia
                            in cognitive neuroscience.
                        </Typography>

                        <Typography variant="body1" paragraph>
                            This site serves as a portfolio of my technical work, personal
                            explorations, ongoing projects, and philosophy.
                        </Typography>

                        <Box>
                            <Typography variant="h6" gutterBottom>
                                Core Interests
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                • Full-stack web applications like this one (React + backend systems)
                                <br />
                                • Software architecture and tooling
                                <br />
                                • AI / computational systems (exploratory)
                                <br />
                                • Game development (systems, mechanics, design)
                            </Typography>
                        </Box>
                    </Stack>

                </Box>
            </Paper>
        </Container>
    );
}