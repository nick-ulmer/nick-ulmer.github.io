import { useEffect } from 'react';
import { Container, Typography, Grid, Card, CardContent, CardActionArea } from '@mui/material';
import { Link } from 'react-router-dom';
import projects from '../../data/projects';

const categories = [
    { id: 'gamedev', label: 'Game Development', path: '/portfolio/gamedev' },
    { id: 'software', label: 'Software Development', path: '/portfolio/software' },
    { id: 'frontend', label: 'Frontend', path: '/portfolio/frontend' },
];

export default function Portfolio() {
    useEffect(() => {
        document.title = 'Portfolio | Nicholas A. Ball Ulmer';
    }, []);

    return (
        <Container maxWidth="lg" sx={{ py: 6 }}>
            <Typography variant="h3" gutterBottom>
                Portfolio
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
                A collection of my work across game development, software, and frontend.
            </Typography>
            <Grid container spacing={4}>
                {categories.map(cat => {
                    const count = projects.filter(p => p.category === cat.id).length;
                    return (
                        <Grid item xs={12} sm={4} key={cat.id}>
                            <Card>
                                <CardActionArea component={Link} to={cat.path}>
                                    <CardContent>
                                        <Typography variant="h5" gutterBottom>
                                            {cat.label}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {count} {count === 1 ? 'project' : 'projects'}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                    );
                })}
            </Grid>
        </Container>
    );
}