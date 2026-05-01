import { useEffect } from 'react';
import { Container, Typography, Grid } from '@mui/material';
import allProjects from '../data/projects';
import ProjectCard from './ProjectCard';

export default function PortfolioCategory({ title, pageTitle, category }) {
    useEffect(() => {
        document.title = pageTitle;
    }, []);

    const projects = allProjects.filter(p => p.category === category);

    return (
        <Container maxWidth="lg" sx={{ py: 6 }}>
            <Typography variant="h3" gutterBottom>
                Game Development
            </Typography>
            <Grid container spacing={4} alignItems="stretch">
                {projects.map(project => (
                    <Grid size={{ xs: 12, sm: 4 }} key={project.id}>
                        <ProjectCard project={project} />
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}