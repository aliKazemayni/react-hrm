import {
    Box,
    Collapse,
    Divider,
    List,
    ListItemText,
    Typography
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import sidebarStyle from "../../styles/sidebar/sidebar.style";
import {MdExpandLess, MdExpandMore} from "react-icons/md";
import {useState} from "react";
import {NavLink as RouterLink,} from "react-router-dom";
import {collapseStyle , activeItemStyle , StyledItem , StyledItemIcon} from "../../styles/sidebar/sidebarItem.style";
import {sidebarConfig} from "../../config/sidebar.config";
import SidebarList from "./SidebarList";

const Sidebar = () => {

    return <>
        <Grid md={3} lg={2} xl={2} sx={sidebarStyle}>
            <Typography variant={"h3"} my={5}>AK THEME</Typography>
            <SidebarList/>
        </Grid>
    </>
}

export default Sidebar;


