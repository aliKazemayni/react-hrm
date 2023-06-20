import {
    Avatar,
    Box,
    Collapse,
    Divider,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Typography
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import sidebarStyle from "../../styles/sidebar/sidebar.style";
import {MdInbox, MdDrafts, MdStarBorder, MdExpandLess, MdExpandMore} from "react-icons/md";
import {useState} from "react";
import { styled } from '@mui/material/styles';
import {NavLink as RouterLink, NavLink} from "react-router-dom";

const Sidebar = () => {
    const [selectedIndex, setSelectedIndex] = useState(1);
    const [open, setOpen] = useState(true);

    const handleClick = () => {
        setOpen(!open);
    };
    const handleListItemClick = (index) => {
        setSelectedIndex(index);
    };
    return <>
        <Grid md={3} lg={2} xl={2} sx={sidebarStyle}>
            <Avatar
                variant={"rounded"}
                src={"https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=2000"}
                alt={"logo"}
                sx={{
                    width:"80%",
                    height:"auto",
                    boxShadow: (theme) => theme.palette.mode !== 'dark' && "5px 5px 10px #c8c8c8"
                }}
            />
            <Typography mt={2} variant={"h4"}>sidebar</Typography>
            <Typography variant={"subtitle1"}>test</Typography>
            <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                <Divider />
                <List component="nav" aria-label="main mailbox folders">

                    <StyledNavItem
                        component={RouterLink}
                        to={"/admin/about"}
                        sx={{
                            '&.active': {
                                color: 'text.primary',
                                bgcolor: 'action.selected',
                                fontWeight: 'fontWeightBold',
                            },
                        }}
                    >
                        <StyledNavItemIcon>
                            <MdDrafts />
                        </StyledNavItemIcon>

                        <ListItemText disableTypography primary={"About"} />

                    </StyledNavItem>

                    <StyledNavItem
                        component={RouterLink}
                        to={"/admin/tasks"}
                        sx={{
                            '&.active': {
                                color: 'text.primary',
                                bgcolor: 'action.selected',
                                boxShadow: (theme) => theme.palette.mode !== "dark" ?
                                    "4px 4px 8px #c8c8c8,-4px -4px 8px #ffffff" :
                                    "4px 4px 8px #0b0b0b,-4px -4px 8px #0f0f0f",

                            },
                        }}
                    >
                        <StyledNavItemIcon>
                            <MdDrafts />
                        </StyledNavItemIcon>

                        <ListItemText disableTypography primary={"Tasks"} />

                    </StyledNavItem>
                    <StyledNavItem
                        onClick={handleClick}>
                        <StyledNavItemIcon>
                            <MdInbox />
                        </StyledNavItemIcon>
                        <ListItemText primary="Inbox" />
                        <StyledNavItemIcon>{open ? <MdExpandLess /> : <MdExpandMore />}</StyledNavItemIcon>
                    </StyledNavItem>
                    <Collapse in={open} timeout="auto" unmountOnExit sx={{
                        px:2,
                        py:1,
                        borderRadius : (theme) => theme.shape.borderRadius,
                        boxShadow: (theme) => theme.palette.mode !== "dark" ?
                            "1px 1px 4px #c8c8c8,-1px -1px 4px #ffffff" :
                            "1px 1px 4px #0b0b0b,-1px -1px 4px #0f0f0f",

                    }}>
                        <List component="div" disablePadding>
                            <StyledNavItem
                                component={RouterLink}
                                to={"/admin/main"}
                                sx={{
                                    '&.active': {
                                        color: 'text.primary',
                                        bgcolor: 'action.selected',
                                        boxShadow: (theme) => theme.palette.mode !== "dark" ?
                                            "4px 4px 8px #c8c8c8,-4px -4px 8px #ffffff" :
                                            "4px 4px 8px #0b0b0b,-4px -4px 8px #0f0f0f",

                                    },
                                }}
                            >
                                <StyledNavItemIcon>
                                    <MdDrafts />
                                </StyledNavItemIcon>

                                <ListItemText disableTypography primary={"Main"} />

                            </StyledNavItem>
                            <StyledNavItem
                                component={RouterLink}
                                to={"/admin/"}
                                sx={{
                                    '&.active': {
                                        color: 'text.primary',
                                        bgcolor: 'action.selected',
                                        boxShadow: (theme) => theme.palette.mode !== "dark" ?
                                            "4px 4px 8px #c8c8c8,-4px -4px 8px #ffffff" :
                                            "4px 4px 8px #0b0b0b,-4px -4px 8px #0f0f0f",

                                    },
                                }}
                            >
                                <StyledNavItemIcon>
                                    <MdDrafts />
                                </StyledNavItemIcon>

                                <ListItemText disableTypography primary={"Main"} />

                            </StyledNavItem>
                            <StyledNavItem
                                component={RouterLink}
                                to={"/admin/test"}
                                sx={{
                                    '&.active': {
                                        color: 'text.primary',
                                        bgcolor: 'action.selected',
                                        boxShadow: (theme) => theme.palette.mode !== "dark" ?
                                            "4px 4px 8px #c8c8c8,-4px -4px 8px #ffffff" :
                                            "4px 4px 8px #0b0b0b,-4px -4px 8px #0f0f0f",

                                    },
                                }}
                            >
                                <StyledNavItemIcon>
                                    <MdDrafts />
                                </StyledNavItemIcon>

                                <ListItemText disableTypography primary={"Main"} />

                            </StyledNavItem>
                        </List>
                    </Collapse>

                    <StyledNavItem
                        component={RouterLink}
                        to={"/admin/tasks"}
                        sx={{
                            '&.active': {
                                color: 'text.primary',
                                bgcolor: 'action.selected',
                                boxShadow: (theme) => theme.palette.mode !== "dark" ?
                                    "4px 4px 8px #c8c8c8,-4px -4px 8px #ffffff" :
                                    "4px 4px 8px #0b0b0b,-4px -4px 8px #0f0f0f",

                            },
                        }}
                    >
                        <StyledNavItemIcon>
                            <MdDrafts />
                        </StyledNavItemIcon>

                        <ListItemText disableTypography primary={"Tasks"} />

                    </StyledNavItem>

                    <StyledNavItem
                        component={RouterLink}
                        to={"/admin/tasks"}
                        sx={{
                            '&.active': {
                                color: 'text.primary',
                                bgcolor: 'action.selected',
                                boxShadow: (theme) => theme.palette.mode !== "dark" ?
                                    "4px 4px 8px #c8c8c8,-4px -4px 8px #ffffff" :
                                    "4px 4px 8px #0b0b0b,-4px -4px 8px #0f0f0f",

                            },
                        }}
                    >
                        <StyledNavItemIcon>
                            <MdDrafts />
                        </StyledNavItemIcon>

                        <ListItemText disableTypography primary={"Tasks"} />

                    </StyledNavItem>

                </List>
            </Box>
        </Grid>
    </>
}

export default Sidebar;


export const StyledNavItem = styled((props) => <ListItemButton disableGutters {...props} />)(({ theme }) => ({
    ...theme.typography.body2,
    height: 48,
    position: 'relative',
    textTransform: 'capitalize',
    color: theme.palette.text.secondary,
    borderRadius: theme.shape.borderRadius,
}));

export const StyledNavItemIcon = styled(ListItemIcon)({
    width: 35,
    height: 35,
    color: 'inherit',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
});