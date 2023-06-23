import {createTheme} from "@mui/material/styles";
import createCache from "@emotion/cache";
import {prefixer} from "stylis";
import rtlPlugin from "stylis-plugin-rtl";
import {ThemeProvider} from '@mui/material/styles';
import {CacheProvider} from "@emotion/react";
import {useMemo, useState} from "react";
import {ModeContext} from '../context/theme';


const ThemeComponent = ({children}) => {

    const [mode, setMode] = useState('light');
    const [drawer, setDrawer] = useState(false);

    const GREY = {
        0: '#FFFFFF',
        100: '#F9FAFB',
        200: '#F4F6F8',
    };

    function handleMode(){
        mode === "dark" ?
            setMode("light") : setMode("dark")
    }

    function handleDrawer(){
        drawer? setDrawer(false) : setDrawer(true)
    }

    const theme = useMemo(
        () =>
            createTheme({
                direction: 'rtl',
                palette:{
                    mode,
                },
                typography:{
                    fontFamily:"vazir,roboto"
                },
                background: {
                    paper: '#fff',
                    default: GREY[100],
                    neutral: GREY[200],
                },
            }),
        [mode],
    );

    const  cacheRtl = createCache({
        key: 'muirtl',
        stylisPlugins: [prefixer, rtlPlugin],
    });


    return(
        <ModeContext.Provider value={{
            mode: mode,
            handleMode : handleMode,
            drawer: drawer,
            handleDrawer : handleDrawer
        }} >
            <CacheProvider value={cacheRtl}>
                <ThemeProvider theme={theme}>
                    {children}
                </ThemeProvider>
            </CacheProvider>
        </ModeContext.Provider>
    )
}

export default ThemeComponent;