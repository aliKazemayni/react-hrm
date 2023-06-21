import {Outlet} from "react-router-dom";
import Grid from "@mui/material/Unstable_Grid2";
import SearchAppBar from "./Appbar";

const Dashboard = () => {
    return (
        <Grid xs={12} sm={12} md={9} lg={10} xl={10} textAlign={"center"}>
            <Grid
                md={12} lg={12} xl={12}
                direction={"row"}
                justifyContent={"space-between"}
                sx={{
                    display: {
                        sm: 'none',
                        xs: 'none',
                        md: 'flex',
                        lg: 'flex',
                        xl: 'flex'
                    },
                }}
            >
                <SearchAppBar/>
            </Grid>
            <Grid sx={{
                mt:5,
                overflow:"auto",
                height:"88vh"
            }}>
                <Outlet/>
            </Grid>
        </Grid>
    );
}

export default Dashboard;