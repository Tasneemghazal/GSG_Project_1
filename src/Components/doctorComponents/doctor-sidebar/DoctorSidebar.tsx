import React, { useState } from "react";
import {
  Box,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { Link } from "react-router-dom";
import {
  boxIcon,
  drawerStyle,
  menuItemStyle,
  sidebarHead,
} from "./doctor-sidebar.style";
import DashboardIcon from "@mui/icons-material/Dashboard";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { FaUserDoctor } from "react-icons/fa6";

const DoctorSidebar: React.FC = () => {
  const [active, setActive] = useState("Dashboard");

  const menuItems = [
    { text: "Dashboard", link: "dashboard", icon: <DashboardIcon /> },
    { text: "Appointments", link: "appointments", icon: <CalendarMonthIcon /> },
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
            component={Link}
            onClick={() => setActive(item.text)}
            to={item.link}
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
