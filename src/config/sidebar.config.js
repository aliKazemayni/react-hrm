import {
    FiBookmark,
    FiCamera,
    FiCast,
    FiCheck,
    FiFile,
    FiFileText,
    FiHome,
    FiMenu,
    FiPhone,
    FiSettings, FiUser
} from "react-icons/fi";


export const sidebarConfig = [
    {
        type : "item",
        title: "Home",
        url : "/main",
        icon : <FiHome/>
    },
    {
        type : "item",
        title: "Blog",
        url : "/blog",
        icon : <FiFileText/>
    },
    {
        type : "item",
        title: "Product",
        url : "/product",
        icon : <FiCast/>
    },
    {
        type : "item",
        title: "Users",
        url : "/user",
        icon : <FiUser/>
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