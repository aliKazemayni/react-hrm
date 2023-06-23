import {alpha, styled} from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";

export const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: 100,
    backgroundColor: theme.palette.action.selectedOpacity,
    '&:hover': {
        backgroundColor: alpha(theme.palette.action.active, 0.05),
        boxShadow: theme.palette.mode !== "dark" ?
            "4px 4px 4px #c8c8c8,-4px -4px 4px #ffffff" :
            "4px 4px 4px #0b0b0b,-4px -4px 4px #0f0f0f",
    },
    marginLeft: 0,
    width: '100%',
    boxShadow: theme.palette.mode !== "dark" ?
        "1px 1px 4px #c8c8c8,-1px -1px 4px #ffffff" :
        "-1px 2px 4px #292929,-2px -2px 4px #373737",
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));

export const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    color:theme.palette.action.active,
    alignItems: 'center',
    justifyContent: 'center',
}));


export const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: theme.palette.action.active,
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
    '& .MuiInputBase-input::placeholder': {
        color:theme.palette.action.active
    },
}));