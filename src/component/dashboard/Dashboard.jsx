import {Outlet} from "react-router-dom";
import Grid from "@mui/material/Unstable_Grid2";
import SearchAppBar from "../appbar/Appbar";
import {dashboardStyle , mainDashboardStyle} from "../../styles/dashboard/dashboard.style";

const Dashboard = () => {
    return (
        <Grid xs={12} sm={12} md={9} lg={10} xl={10} textAlign={"center"}>
            <Grid md={12} lg={12} xl={12} sx={dashboardStyle}>
                <SearchAppBar/>
            </Grid>
            <Grid sx={mainDashboardStyle}>
                <Outlet/>
            </Grid>
        </Grid>
    );
}

export default Dashboard;