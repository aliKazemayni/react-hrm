import Grid from "@mui/material/Unstable_Grid2";
import Sidebar from "../component/sidebar/Sidebar";
import {Outlet} from "react-router-dom";
import {CssBaseline} from "@mui/material";

function DashboardLayout() {
    return <>
        <CssBaseline>
            <Grid container sx={{height:"100vh"}}>
                <Sidebar/>
                <Outlet/>
            </Grid>
        </CssBaseline>
    </>
}

export default DashboardLayout;