export const drawerStyle = () => ({
  width: 240,
  "& .MuiDrawer-paper": {
    width: 240,
    boxSizing: "border-box",
    borderRadius: "20px",
    border: "none",
    boxShadow: "rgba(0, 0, 0, 0.1) 0px 1px 2px 0px",
  },
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

export const sidebarHead = () => ({
  backgroundImage:
    "url('https://img.freepik.com/free-photo/close-up-stethoscope-blank-blue-background_23-2147874869.jpg?t=st=1738671401~exp=1738675001~hmac=b7942acd742725094388f8100183108dc96cefdcd8d8d8360792ab36d2903323&w=996')",
  padding: "20px",
  height: "25%",
  position: "relative",
  mb: 3,
  backgroundSize: "cover",
  backgroundPosition: "center",
});

export const boxIcon = () => ({
  padding: 2,
  borderRadius: "50%",
  backgroundColor: "#fcfcfc",
  height: "120px",
  width: "120px",
  position: "absolute",
  right: "25%",
  bottom: "-30%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});
