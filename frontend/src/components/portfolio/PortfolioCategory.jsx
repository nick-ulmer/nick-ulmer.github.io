import { useEffect } from 'react';
import { Typography, Grid } from '@mui/material';
import allProjects from '../../data/projects';
import ProjectCard from './ProjectCard';
import PortfolioLayout from './PortfolioLayout';

export default function PortfolioCategory({ title, category }) {
    useEffect(() => {
        document.title = title;
    }, []);

    const filtered = category ? allProjects.filter(p => p.category === category) : allProjects;

    return (
        <>
            <Typography variant="h3" gutterBottom>
                {title}
            </Typography>
            <Grid container spacing={4} alignItems="stretch">
                {filtered.map(project => (
                    <Grid size={{ xs: 12, sm: 4 }} key={project.id}>
                        <ProjectCard project={project} />
                    </Grid>
                ))}
            </Grid>
        </>
    );
}