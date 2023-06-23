import Grid from "@mui/material/Unstable_Grid2";
import Sidebar from "../component/sidebar/Sidebar";
import {CssBaseline} from "@mui/material";
import Dashboard from "../component/dashboard/Dashboard";
import BottomNavigationComponent from "../component/bottomNavigation/BottomNavigation";
import DrawerComponent from "../component/drawer/DrawerComponent";

function DashboardLayout() {
    return <>
        <CssBaseline>
            <Grid container sx={{height:"100vh"}}>
                <Sidebar/>
                <DrawerComponent/>
                <Dashboard/>
                <BottomNavigationComponent/>
            </Grid>
        </CssBaseline>
    </>
}

export default DashboardLayout;