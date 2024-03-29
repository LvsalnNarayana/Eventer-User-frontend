import { Roboto } from 'next/font/google';
import { createTheme } from '@mui/material/styles';

const roboto = Roboto({
    weight: ['300', '400', '500', '700'],
    subsets: ['latin'],
    display: 'swap',
});

const theme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#001253',
        },
        secondary: {
            main: '#E14D2A',
        },
        background: {
            default: '#fff',
        },
    },
    typography: {
        fontFamily: roboto.style.fontFamily,
    },
    components: {},
});

export default theme;
