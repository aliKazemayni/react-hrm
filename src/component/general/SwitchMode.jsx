import {IconButton} from "@mui/material";
import {useContext} from "react";
import {ModeContext} from "../../context/theme";
import {FiMoon, FiSun} from "react-icons/fi";

const SwitchMode = () => {
    const context = useContext(ModeContext);
    return (
        <IconButton
            onClick={()=> context.handleMode()}
            size="medium"
            edge="start"
            color="action.active"
            aria-label="open drawer"
        >
            {context.mode === "dark" ? <FiSun /> : <FiMoon />}
        </IconButton>
    );
}

export default SwitchMode;