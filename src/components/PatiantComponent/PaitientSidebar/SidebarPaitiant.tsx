import { Link } from 'react-router-dom';
import { Box, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar } from '@mui/material';
import { MdDashboard } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import { box, drawer, list, listItemText } from './PatiantSidbar.style';

const menuItems = [
  { text: "Dashboard", link: "dashboard", icon: <MdDashboard /> },
  { text: "My Appointments", link: "appointments", icon: <SlCalender /> },
  { text: "Search Doctors", link: "searchdoctors", icon: <FaSearch /> },
];


export function PatientSidebar() {
  return (
    <Box sx={ box() }>
      <Drawer sx={drawer()}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <List>
          {menuItems.map((item) => (
            <ListItem key={item.text} disablePadding>
              <ListItemButton 
                component={Link} 
                to={`./${item.link}`} 
                sx={list()}
              >
                <ListItemIcon sx={{ color: '#050C9C' }}>{item.icon}</ListItemIcon>
                <ListItemText 
                  primary={item.text} 
                  sx={listItemText()} 
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
}