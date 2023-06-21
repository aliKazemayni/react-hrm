import Grid from "@mui/material/Unstable_Grid2";
import Sidebar from "../component/sidebar/Sidebar";
import {Outlet} from "react-router-dom";
import {CssBaseline} from "@mui/material";

function DashboardLayout() {
    return <>
        <CssBaseline>
            <Grid container sx={{height:"100vh"}}>
                <Sidebar/>
                <Grid xs={12} sm={12} md={9} lg={10} xl={10} textAlign={"center"}>
                    <Outlet/>
                </Grid>
            </Grid>
        </CssBaseline>
    </>
}

export default DashboardLayout;