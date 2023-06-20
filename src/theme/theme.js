import {createTheme} from "@mui/material/styles";
import createCache from "@emotion/cache";
import {prefixer} from "stylis";
import rtlPlugin from "stylis-plugin-rtl";

const GREY = {
    0: '#FFFFFF',
    100: '#F9FAFB',
    200: '#F4F6F8',
    300: '#DFE3E8',
    400: '#C4CDD5',
    500: '#919EAB',
    600: '#637381',
    700: '#454F5B',
    800: '#212B36',
    900: '#161C24',
};

export const theme = createTheme({

    direction: 'rtl',
    palette:{
        mode:"dark"
    },
    typography:{
        fontFamily:"vazir,roboto"
    },
    background: {
        paper: '#fff',
        default: GREY[100],
        neutral: GREY[200],
    },
});

export const  cacheRtl = createCache({
    key: 'muirtl',
    stylisPlugins: [prefixer, rtlPlugin],
});