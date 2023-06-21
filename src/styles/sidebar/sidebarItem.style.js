import {styled} from "@mui/material/styles";
import {ListItemButton, ListItemIcon} from "@mui/material";

export const StyledItem = styled((props) => <ListItemButton disableGutters {...props} />)(({ theme }) => ({
    ...theme.typography.body2,
    height: 48,
    position: 'relative',
    textTransform: 'capitalize',
    color: theme.palette.text.secondary,
    borderRadius: theme.shape.borderRadius,
}));

export const StyledItemIcon = styled(ListItemIcon)({
    width: 22,
    height: 22,
    fontSize:20,
    color: 'inherit',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
});

export const activeItemStyle = {
    '&.active': {
        color: 'primary.contrastText',
        bgcolor: 'primary.main',
        fontSize:16,
        boxShadow: (theme) => theme.palette.mode !== "dark" ?
            "4px 4px 8px #c8c8c8,-4px -4px 8px #ffffff" :
            "4px 4px 8px #0b0b0b,-4px -4px 8px #0f0f0f",

    },
}

export const collapseStyle = {
    px:2,
    py:1,
    color: 'primary.main',
    boxShadow: (theme) => theme.palette.mode !== "dark" ?
        "1px 1px 2px #c8c8c8,-1px -1px 2px #ffffff" :
        "1px 1px 2px #303030,-1px -1px 2px #404040",

}