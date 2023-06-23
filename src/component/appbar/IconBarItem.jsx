import {FiSettings} from "react-icons/fi";
import IconButton from "@mui/material/IconButton";
import * as React from "react";

const IconBarItem = ({icon , onClick}) => {
    return <IconButton
        onClick={()=>onClick()}
        size="medium"
        edge="start"
        color="action.active"
        aria-label="open drawer"
    >
        {icon}
    </IconButton>
}

export default IconBarItem;