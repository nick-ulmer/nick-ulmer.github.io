import { Container, Typography, Box, Chip, Divider } from '@mui/material';
import AndroidIcon from '@mui/icons-material/Android';
import LockIcon from '@mui/icons-material/Lock';
import TuneIcon from '@mui/icons-material/Tune';

export default function OvOProject() {
    return (
        <Container maxWidth="md" sx={{ py: 6 }}>
            <Typography variant="h3" gutterBottom>
                OvO
            </Typography>
            <Box sx={{ display: 'flex', gap: 1, mb: 3 }}>
                <Chip label="Kotlin" />
                <Chip label="Android" />
                <Chip label="In Progress" variant="outlined" />
            </Box>

            <Typography variant="h5" gutterBottom>
                Overview
            </Typography>
            <Typography variant="body1" sx={{ mb: 4 }}>
                OvO is a cycle tracking app built for power users and privacy-conscious individuals.
                Unlike mainstream alternatives, OvO prioritizes local data storage and user control,
                keeping sensitive health data off the cloud by default.
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
    );
}