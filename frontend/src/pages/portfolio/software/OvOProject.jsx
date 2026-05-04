import { Container, Typography, Box, Chip, Divider } from '@mui/material';
import AndroidIcon from '@mui/icons-material/Android';
import LockIcon from '@mui/icons-material/Lock';
import TuneIcon from '@mui/icons-material/Tune';
import projects from '../../../data/projects';
import PortfolioLayout from '../../../components/portfolio/PortfolioLayout';

export default function OvO() {
    const project = projects.find(p => p.id === 'ovo');

    return (
        <PortfolioLayout>
            <Container maxWidth="md" sx={{ py: 6 }}>
                <Typography variant="h3" gutterBottom>
                    {project.title}
                </Typography>
                <Box sx={{ display: 'flex', gap: 1, mb: 3 }}>
                    {project.tech.map(t => <Chip key={t} label={t} />)}
                    <Chip label={project.status} variant="outlined" />
                </Box>

                <Typography variant="h5" gutterBottom>
                    Overview
                </Typography>
                <Typography variant="body1" sx={{ mb: 4 }}>
                    {project.description}
                </Typography>

                <Divider sx={{ my: 4 }} />

                <Typography variant="h5" gutterBottom>
                    Core Principles
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mb: 4 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                        <LockIcon />
                        <Typography variant="body1">
                            <strong>Privacy first</strong> — data stays on your device, no accounts required
                        </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                        <TuneIcon />
                        <Typography variant="body1">
                            <strong>Power user focused</strong> — granular tracking and customization options
                        </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                        <AndroidIcon />
                        <Typography variant="body1">
                            <strong>Native Android</strong> — built in Kotlin for performance and reliability
                        </Typography>
                    </Box>
                </Box>

                <Divider sx={{ my: 4 }} />

                <Typography variant="h5" gutterBottom>
                    Status
                </Typography>
                <Typography variant="body1">
                    Currently in active development. Fill in with current progress, planned features, screenshots etc.
                </Typography>
            </Container>
        </PortfolioLayout>
    );
}