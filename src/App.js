

import {ThemeProvider} from '@mui/material/styles';
import {CacheProvider} from "@emotion/react";
import {Helmet , HelmetProvider} from 'react-helmet-async';
import {cacheRtl, theme} from "./theme/theme";
import DashboardLayout from "./layouts/Dashboard.layout";
import {BrowserRouter} from "react-router-dom";
import Router from "./router";


function App() {

  return (
      <CacheProvider value={cacheRtl}>
        <ThemeProvider theme={theme}>
          <BrowserRouter>
              <HelmetProvider>
                  <Helmet>
                      <title>test</title>
                  </Helmet>
                  <Router/>
              </HelmetProvider>
          </BrowserRouter>
        </ThemeProvider>
      </CacheProvider>
  );
}

export default App;
