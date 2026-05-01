import { Card, CardContent, CardActions, CardMedia, Typography, Button, Chip, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function ProjectCard({ project }) {
    return (
        <Card
            component={Link}
            to={`/portfolio/${project.category}/${project.id}`}
            sx={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', textDecoration: 'none', color: 'inherit', '&:hover': { opacity: 0.85 }, cursor: 'pointer' }}
        >
            <CardMedia
                component="img"
                height="180"
                image={project.thumbnail}
                alt={project.title}
            />
            <CardContent>
                <Typography variant="h6" gutterBottom>
                    {project.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                    {project.description}
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                    {project.tech.map(t => (
                        <Chip key={t} label={t} size="small" />
                    ))}
                </Box>
            </CardContent>
            {project.link && (
                <CardActions>
                    <Button
                        size="small"
                        href={project.link}
                        target="_blank"
                        startIcon={<GitHubIcon />}
                        onClick={e => e.stopPropagation()}
                    >
                        GitHub
                    </Button>
                </CardActions>
            )}
        </Card>
    );
}