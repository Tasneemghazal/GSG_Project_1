import { Link, useNavigate } from "react-router-dom";
import {
  Box,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from "@mui/material";
import { MdBookmarkAdd, MdDashboard, MdLogout } from "react-icons/md";
import { SlCalender } from "react-icons/sl";
import { box, drawer, menuItemStyle } from "./PatiantSidbar.style";
import { useContext, useState } from "react";
import { AuthContext } from "../../../providers/AuthProvider";

const menuItems = [
  { text: "Dashboard", link: "dashboard", icon: <MdDashboard /> },
  { text: "My Appointments", link: "appointments", icon: <SlCalender /> },
  { text: "Book Appointment", link: "booking", icon: <MdBookmarkAdd /> },
  { text: "Logout", link: "logout", icon: <MdLogout /> },
];

export function PatientSidebar() {
  const [active, setActive] = useState("Dashboard");
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogout = () => {
    logout();
    navigate("/");
  };
  return (
    <Box sx={box}>
      <Drawer sx={drawer} variant="permanent" anchor="left">
        <Toolbar />
        <List>
          {menuItems.map((item) => (
            <ListItemButton
              key={item.link}
              component={item.text === "Logout" ? "button" : Link}
              onClick={
                item.text === "Logout"
                  ? handleLogout
                  : () => setActive(item.text)
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
    </Box>
  );
}
