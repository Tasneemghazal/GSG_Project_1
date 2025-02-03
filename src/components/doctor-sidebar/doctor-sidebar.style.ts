export const drawerStyle = ()=>( {
  width: 240,
  "& .MuiDrawer-paper": {
    width: 240,
    boxSizing: "border-box",
    borderRadius: "20px",
    padding: "20px",
    border: "none",
    boxShadow: "rgba(0, 0, 0, 0.1) 0px 1px 2px 0px"
  },
});

export const menuItemStyle =(active:boolean)=>( {
     borderRadius: "10px",
     marginBottom:"5px",
     backgroundColor: active? "#4F75FF" : "transparent",
     color: active? "#fff" : "inherit",
     "&:hover": {
       backgroundColor: "#4F75FF",
       color:"#fff"
     },
     "& .icon":{
      color: active? "#fff" : "inherit",
     }
})

