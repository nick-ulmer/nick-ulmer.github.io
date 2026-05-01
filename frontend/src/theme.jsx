import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#212121',
        },
        secondary: {
            main: '#757575',
        },
    },
    typography: {
        fontFamily: 'Inter, sans-serif',
    },
});

export default theme;