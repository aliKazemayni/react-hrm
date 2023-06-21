import {Box, Collapse, Divider, List, ListItemText} from "@mui/material";
import {sidebarConfig} from "../../config/sidebar.config";
import {collapseStyle, StyledItem, StyledItemIcon} from "../../styles/sidebar/sidebarItem.style";
import {MdExpandLess, MdExpandMore} from "react-icons/md";
import SidebarListItem from "./SidebarListItem";
import {useState} from "react";

const SidebarList = () => {
    const [open, setOpen] = useState({});

    const handleClick = (index) => {
        setOpen({
            ...open,
            [index] : !open[index]
        });
    };

    return <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' ,mt:5}}>
        <List component="nav" aria-label="main mailbox folders">
            {
                sidebarConfig.map(
                    (item, index) => {
                        let {title , type ,icon} = item
                        if (type === "item")
                            return (<SidebarListItem title={title} url={'/admin'+item.url} icon={icon}/>)
                        else if (item.type === "collapse")
                            return (
                                <>
                                    <StyledItem
                                        onClick={() => handleClick(index) }>
                                        <StyledItemIcon>
                                            {item.icon}
                                        </StyledItemIcon>
                                        <ListItemText primary={item.title} />
                                        <StyledItemIcon>{open[index] ? <MdExpandLess /> : <MdExpandMore />}</StyledItemIcon>
                                    </StyledItem>
                                    <Collapse in={open[index]} timeout="auto" unmountOnExit sx={collapseStyle}>
                                        <List component="div" disablePadding>
                                            {
                                                item.children.map(
                                                    (child) => {
                                                        return <SidebarListItem title={child.title} url={'/admin'+child.url} icon={child.icon}/>
                                                    }
                                                )
                                            }
                                        </List>
                                    </Collapse>
                                </>
                            )
                    }
                )
            }
        </List>
    </Box>
}

export default SidebarList;