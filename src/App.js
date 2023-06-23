
import {Helmet , HelmetProvider} from 'react-helmet-async';
import {BrowserRouter} from "react-router-dom";
import Routes from "./routes";
import ThemeComponent from "./theme/ThemeComponent";
import {ModeContext} from "./context/theme";
import {useTheme} from "@mui/material/styles";
import {useContext} from "react";


function App() {

    const theme = useTheme()
    const context = useContext(ModeContext);

    return (
        <ThemeComponent>
            <BrowserRouter>
                <HelmetProvider>
                    <Helmet>
                        <title>test</title>
                    </Helmet>
                    <Routes/>
                </HelmetProvider>
            </BrowserRouter>
        </ThemeComponent>
    );
}

export default App;
