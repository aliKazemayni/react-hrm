import {MdDashboard, MdMore, MdPerson, MdTask} from "react-icons/md";

export const sidebarConfig = [
    {
        type : "item",
        title: "Tasks",
        url : "/tasks",
        icon : <MdTask/>
    },
    {
        type: "collapse",
        title: "More",
        icon: <MdMore/>,
        isOpen: false,
        children : [
            {
                type : "item",
                title : "Main",
                url : "/main",
                icon : <MdDashboard/>
            },
            {
                type : "item",
                title : "About",
                url : "/about",
                icon : <MdPerson/>
            }
        ]
    }
]