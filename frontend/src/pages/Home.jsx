import { useEffect } from 'react';
import { Container, Typography, Box, Button, Chip, Divider, Grid, Avatar } from '@mui/material';
import { Link } from 'react-router-dom';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import projects from '../data/projects';
import ProjectCard from '../components/portfolio/ProjectCard';

const featuredIds = ['beatkana', 'ovo', 'personal-site'];

const skills = [
    'Java', 'Spring Boot', 'Kotlin', 'React', 'Vite',
    'Material UI', 'Unity', 'C#', 'GameMaker Studio',
    'Git', 'REST APIs', 'Swagger',
];

export default function Home() {
    useEffect(() => {
        document.title = 'Nicholas A. Ball Ulmer';
    }, []);

    const featured = projects.filter(p => featuredIds.includes(p.id));

    return (
        <Box>
            {/* Hero */}
            <Box sx={{ backgroundColor: '#212121', color: 'white', py: 10, px: 4, textAlign: 'center' }}>
                <Typography variant="h2" fontWeight="bold" gutterBottom>
                    {"{ F1 For Help }"}
                </Typography>
                <Avatar
                    src="/images/photo_2.jpg"
                    sx={{ width: 150, height: 150, bgcolor: '#757575', fontSize: 32, mx: 'auto', mb: 3,
                        '& img': {
                            objectFit: 'cover',
                            objectPosition: '60% 20%',
                            transform: 'scale(1.65)',
                            transformOrigin: '60% 20%',
                        }
                    }}
                >
                    IMG
                </Avatar>
                <Typography variant="h2" fontWeight="bold" gutterBottom>
                    Nicholas A. Ball Ulmer
                </Typography>
                <Typography variant="h5" sx={{ opacity: 0.7, mb: 4 }}>
                    Full-Stack Developer · Game Developer · Systems Builder
                </Typography>
                <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center' }}>
                    <Button
                        variant="contained"
                        color="inherit"
                        component={Link}
                        to="/portfolio"
                        endIcon={<ArrowForwardIcon />}
                        sx={{ color: '#212121' }}
                    >
                        View My Work
                    </Button>
                    <Button
                        variant="outlined"
                        color="inherit"
                        component={Link}
                        to="/contact"
                    >
                        Contact Me
                    </Button>
                </Box>
            </Box>

            <Container maxWidth="lg" sx={{ py: 8 }}>

                {/* Bio */}
                <Box sx={{ maxWidth: 700, mb: 8 }}>
                    <Typography variant="h4" gutterBottom>
                        About Me
                    </Typography>
                    <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.8, mb: 2 }}>
                        I am a software developer focused on building systems across
                        full-stack web development and game development. I enjoy working
                        on structured systems, interactive applications, and exploring
                        the intersection between computation and creative expression.
                    </Typography>
                    <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.8 }}>
                        My current stack centers around React, Material UI, and Java Spring Boot
                        for backend systems. I am also actively developing game projects in Unity and GMS2.
                    </Typography>
                </Box>

                <Divider sx={{ mb: 8 }} />

                {/* Featured Projects */}
                <Box sx={{ mb: 8 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
                        <Typography variant="h4">
                            Featured Projects
                        </Typography>
                        <Button
                            component={Link}
                            to="/portfolio"
                            endIcon={<ArrowForwardIcon />}
                            color="inherit"
                        >
                            See All
                        </Button>
                    </Box>
                    <Grid container spacing={4} alignItems="stretch">
                        {featured.map(project => (
                            <Grid size={{ xs: 12, sm: 4 }} key={project.id}>
                                <ProjectCard project={project} />
                            </Grid>
                        ))}
                    </Grid>
                </Box>

                <Divider sx={{ mb: 8 }} />

                {/* Skills */}
                <Box>
                    <Typography variant="h4" gutterBottom>
                        Tech Stack
                    </Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: 2 }}>
                        {skills.map(skill => (
                            <Chip key={skill} label={skill} variant="outlined" />
                        ))}
                    </Box>
                </Box>

            </Container>
        </Box>
    );
}