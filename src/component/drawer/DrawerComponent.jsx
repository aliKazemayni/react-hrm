
import Drawer from '@mui/material/Drawer';
import {useContext, useState} from "react";
import {Typography} from "@mui/material";
import SidebarList from "../sidebar/SidebarList";
import {ModeContext} from "../../context/theme";


export default function DrawerComponent() {

    const context = useContext(ModeContext);

    return (
        <Drawer
            variant="temporary"
            open={context.drawer}
            onClose={context.handleDrawer}
            ModalProps={{
                keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
                display: { xs: 'block', sm: 'none' },
                '& .MuiDrawer-paper': { boxSizing: 'border-box', width: "70%" },
            }}
        >
            <Typography variant={"h3"} my={5}>AK THEME</Typography>
            <SidebarList/>
        </Drawer>
    );
}