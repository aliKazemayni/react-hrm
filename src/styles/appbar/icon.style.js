import {alpha, styled} from "@mui/material/styles";

export const IconBar = styled('div')(({ theme }) => ({
    position: 'relative',
    display:"flex",
    justifyContent:"end",
    alignItems:"center",
    borderRadius: 100,
    backgroundColor: theme.palette.action.selectedOpacity,
    marginLeft: 0,
    '&:hover': {
        backgroundColor: alpha(theme.palette.action.active, 0.05),
        boxShadow: theme.palette.mode !== "dark" ?
            "4px 4px 4px #c8c8c8,-4px -4px 4px #ffffff" :
            "4px 4px 4px #0b0b0b,-4px -4px 4px #0f0f0f",
    },
    boxShadow: theme.palette.mode !== "dark" ?
        "1px 1px 4px #c8c8c8,-1px -1px 4px #ffffff" :
        "-2px 2px 4px #292929,-2px -2px 4px #373737",
}));