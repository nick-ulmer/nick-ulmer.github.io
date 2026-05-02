import { useEffect } from 'react';
import { Container, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

export default function NotFound() {
    useEffect(() => {
        document.title = '404 | Nicholas A. Ball Ulmer';
    }, []);

    return (
        <Container maxWidth="sm" sx={{ py: 6, textAlign: 'center' }}>
            <Typography variant="h1" gutterBottom>
                404
            </Typography>
            <Typography variant="h5" color="text.secondary" gutterBottom>
                Page not found
            </Typography>
            <Button variant="contained" component={Link} to="/" sx={{ mt: 3 }}>
                Go Home
            </Button>
        </Container>
    );
}