import {NavLink as RouterLink} from "react-router-dom";
import {activeItemStyle, StyledItem, StyledItemIcon} from "../../styles/sidebar/sidebarItem.style";
import {ListItemText} from "@mui/material";

const SidebarListItem = ({title,icon,url}) => {
    console.log(title);
    return <StyledItem component={RouterLink} to={url} sx={activeItemStyle}>
        <StyledItemIcon>
            {icon}
        </StyledItemIcon>
        <ListItemText disableTypography primary={title} />
    </StyledItem>
}

export default SidebarListItem;