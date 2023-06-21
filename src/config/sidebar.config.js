import {FiBookmark, FiCamera, FiCheck, FiFile, FiHome, FiMenu, FiPhone, FiSettings} from "react-icons/fi";


export const sidebarConfig = [
    {
        type : "item",
        title: "Home",
        url : "/main",
        icon : <FiHome/>
    },
    {
        type : "item",
        title: "Tasks",
        url : "/tasks",
        icon : <FiCheck/>
    },
    {
        type : "item",
        title: "Bookmark",
        url : "/bookmark",
        icon : <FiBookmark/>
    },
    {
        type : "item",
        title: "Media",
        url : "/media",
        icon : <FiCamera/>
    },
    {
        type : "item",
        title: "Files",
        url : "/Files",
        icon : <FiFile/>
    },
    {
        type: "collapse",
        title: "More",
        icon: <FiMenu/>,
        isOpen: false,
        children : [
            {
                type : "item",
                title : "Setting",
                url : "/main2",
                icon : <FiSettings/>
            },
            {
                type : "item",
                title : "About",
                url : "/about",
                icon : <FiPhone/>
            }
        ]
    }
]