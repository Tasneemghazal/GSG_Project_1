import React, { useState } from "react";
import { Drawer, List, ListItemButton, ListItemIcon, ListItemText} from "@mui/material";
import { Link } from "react-router-dom";
import { drawerStyle, menuItemStyle } from "./doctor-sidebar.style";
import DashboardIcon from '@mui/icons-material/Dashboard';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

const DoctorSidebar: React.FC = () => {
  const [active, setActive] = useState("Dashboard")

  const menuItems = [
    { text: "Dashboard", link: "dashboard", icon: <DashboardIcon/> },
    { text: "Appointments", link: "appointments", icon: <CalendarMonthIcon/>},
  ];

  return (
    <Drawer
      variant="permanent"
      sx={drawerStyle}
    >
      <List>
        {menuItems.map((item) => (
          <ListItemButton
            key={item.link}
            component={Link}
            onClick={() => setActive(item.text)}
            to={item.link}
            sx={menuItemStyle(active===item.text)}
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
