import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#2a2a2a',
        },
        secondary: {
            main: '#00aaff',
        },
    },
    typography: {
        fontFamily: 'Inter, sans-serif',
    },
});

export default theme;