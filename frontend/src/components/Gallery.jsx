import { Typography, Box, IconButton } from '@mui/material';
import { useState } from 'react';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export default function Gallery({ imgs }) {
    const [idx, setIdx] = useState(0);
    const prev = () => setIdx(i => (i - 1 + imgs.length) % imgs.length);
    const next = () => setIdx(i => (i + 1) % imgs.length);
    return (
        <Box sx={{ position: 'sticky', top: 24, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <IconButton onClick={prev} size="small"><ArrowBackIosNewIcon fontSize="small" /></IconButton>
                <Typography variant="caption" color="text.secondary">{idx + 1} / {imgs.length}</Typography>
                <IconButton onClick={next} size="small"><ArrowForwardIosIcon fontSize="small" /></IconButton>
            </Box>
            <Box
                component="img"
                src={imgs[idx]}
                alt={`Image ${idx + 1}`}
                sx={{ maxWidth: '100%', borderRadius: 2, objectFit: 'contain', border: '2px solid #000' }}
            />
        </Box>
    );
}