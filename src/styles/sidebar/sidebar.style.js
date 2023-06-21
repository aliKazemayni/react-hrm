const sidebarStyle = {
    display: {
        sm: 'none',
        xs: 'none',
        md: 'flex',
        lg: 'flex',
        xl: 'flex'
    },
    flexDirection:"column",
    justifyContent:"start",
    alignItems:"center",
    p:3,
    boxShadow:(theme) =>
        theme.palette.mode === 'dark' ?
            '10px 10px 20px #0b0b0b,-10px -10px 20px #0f0f0f' :
            '1px 1px 1px #d9d9d9',
    borderRight: (theme) =>
        theme.palette.mode === 'dark' && '1px solid #292929'
}

export default sidebarStyle;