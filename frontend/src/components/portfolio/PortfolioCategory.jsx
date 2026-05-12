import { useEffect } from 'react';
import { Typography, Grid } from '@mui/material';
import { useParams } from 'react-router-dom';
import allProjects from '../../data/projects';
import { categories } from '../../data/categories';
import ProjectCard from './ProjectCard';

export default function PortfolioCategory() {
    const { category } = useParams();
    const label = category
        ? categories.find(c => c.slug === category)?.label ?? category
        : 'All Projects';

    useEffect(() => {
        document.title = `${label} | Nicholas A. Ball Ulmer`;
    }, [label]);

    const filtered = category
        ? allProjects.filter(p => p.category === category)
        : allProjects;

    return (
        <>
            <Typography variant="h3" gutterBottom>
                {label}
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