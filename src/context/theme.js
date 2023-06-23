import {createContext} from "react";
export const ModeContext = createContext({
    mode : "",
    handleMode: () => {},
    drawer:false,
    handleDrawer:()=>{}
})