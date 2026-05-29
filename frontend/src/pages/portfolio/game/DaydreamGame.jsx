import { useState, useRef } from 'react';
import { Box, IconButton, Tooltip, Typography } from '@mui/material';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';

export default function DaydreamGame() {
    const [isFullscreen, setIsFullscreen] = useState(false);
    const containerRef = useRef(null);

    const handleFullscreen = () => {
        if (!isFullscreen) {
            containerRef.current?.requestFullscreen();
        } else {
            document.exitFullscreen();
        }
    };

    const handleFullscreenChange = () => {
        setIsFullscreen(!!document.fullscreenElement);
    };

    return (
        <Box
            ref={containerRef}
            onFullscreenChange={handleFullscreenChange}
            sx={{
                position: 'relative',
                width: '100%',
                aspectRatio: '16/9',
                bgcolor: '#000',
                overflow: 'hidden',
                ...(isFullscreen && {
                    width: '100vw',
                    height: '100vh',
                    aspectRatio: 'unset',
                }),
            }}
        >
            <iframe
                src="/games/daydream/index.html"
                width="100%"
                height="100%"
                style={{ border: 'none', display: 'block' }}
                title="Daydream"
                allowFullScreen
            />

            <Tooltip title={isFullscreen ? 'Exit fullscreen' : 'Fullscreen'} placement="left">
                <IconButton
                    onClick={handleFullscreen}
                    sx={{
                        position: 'absolute',
                        bottom: 12,
                        right: 12,
                        bgcolor: 'rgba(0,0,0,0.6)',
                        color: '#fff',
                        backdropFilter: 'blur(4px)',
                        '&:hover': { bgcolor: 'rgba(0,0,0,0.85)' },
                    }}
                >
                    {isFullscreen ? <FullscreenExitIcon /> : <FullscreenIcon />}
                </IconButton>
            </Tooltip>
        </Box>
    );
}