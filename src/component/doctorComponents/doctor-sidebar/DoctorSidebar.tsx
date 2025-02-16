import React, { useContext, useState } from "react";
import {
  Box,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import {
  boxIcon,
  drawerStyle,
  menuItemStyle,
  sidebarHead,
} from "./doctor-sidebar.style";
import DashboardIcon from "@mui/icons-material/Dashboard";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { FaUserDoctor } from "react-icons/fa6";
import { MdLogout } from "react-icons/md";
import { AuthContext } from "../../../providers/AuthProvider";

const DoctorSidebar: React.FC = () => {
  const [active, setActive] = useState("Dashboard");
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const menuItems = [
    { text: "Dashboard", link: "dashboard", icon: <DashboardIcon /> },
    { text: "Appointments", link: "appointments", icon: <CalendarMonthIcon /> },
    { text: "Logout", link: "logout", icon: <MdLogout /> },
  ];

  return (
    <Drawer variant="permanent" sx={drawerStyle}>
      <Box sx={sidebarHead}>
        <Box sx={boxIcon}>
          <FaUserDoctor size={"50px"} color={"#A7E6FF"} />
        </Box>
      </Box>
      <List sx={{ m: 3 }}>
        {menuItems.map((item) => (
          <ListItemButton
            key={item.link}
            component={item.text === "Logout" ? "button" : Link}
            onClick={
              item.text === "Logout" ? handleLogout : () => setActive(item.text)
            }
            to={item.text === "Logout" ? undefined : item.link}
            sx={menuItemStyle(active === item.text)}
          >
            <ListItemIcon className="icon">{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItemButton>
        ))}
      </List>
    </Drawer>
  );
};

export default DoctorSidebar;
