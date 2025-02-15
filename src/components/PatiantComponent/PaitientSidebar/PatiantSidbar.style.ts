const drawerWidth = 210;

export const box = () => ({
  display: "flex",
  height: "100vh",
});
export const menuItemStyle = (active: boolean) => ({
  borderRadius: "10px",
  marginBottom: "5px",
  backgroundColor: active ? "#4F75FF" : "transparent",
  color: active ? "#fff" : "inherit",
  "&:hover": {
    backgroundColor: "#4F75FF",
    color: "#fff",
  },
  "& .icon": {
    color: active ? "#fff" : "inherit",
  },
});
export const drawer = () => ({
  width: drawerWidth,
  height:'100vh',
  flexShrink: 0,
  "& .MuiDrawer-paper": {
    width: drawerWidth,
    bgcolor: "white",
    borderRight: "1px solid shadow",
    p:2
  },
});
