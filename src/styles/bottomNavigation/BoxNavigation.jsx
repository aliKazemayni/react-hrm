import {styled} from "@mui/material/styles";

export const BoxNavigation = styled('div')(({ theme }) => ({
    position: 'relative',
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    width: "100%",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: theme.palette.action.selectedOpacity,
    boxShadow: theme.palette.mode !== "dark" ?
        "-1px 1px 2px 2px #d9d9d9" :
        "-2px 2px 4px #292929,-2px -2px 4px #373737",
}));