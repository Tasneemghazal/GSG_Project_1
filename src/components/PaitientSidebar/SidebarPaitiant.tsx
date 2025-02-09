import { Link } from 'react-router-dom';
import { Box, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar } from '@mui/material';
import { MdDashboard } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import { BsBookmarkPlus } from "react-icons/bs";

const menuItems = [
  { text: "Dashboard", link: "dashboard", icon: <MdDashboard /> },
  { text: "My Appointments", link: "appointments", icon: <SlCalender /> },
  { text: "Search Doctors", link: "searchdoctors", icon: <FaSearch /> },
  { text: "Booking", link: "booking", icon: <BsBookmarkPlus /> },
];

const drawerWidth = 210;

export function PatientSidebar() {
  return (
    <Box sx={{ display: 'flex' }}>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            bgcolor: 'white', 
            borderRight: '1px solid shadow',
          },
        }}
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
                sx={{
                  bgcolor: 'transparent',
                  '&:hover': {
                    borderRadius:'10px',
                    bgcolor: '#3572EF', 
                    
                  },
                  '&.active': {
                    borderRadius:'10px',
                    border: '10px solid #050C9C',
                    bgcolor: '#3572EF', 
                    color: 'white', 
                  },
                }}
              >
                <ListItemIcon sx={{ color: '#050C9C' }}>{item.icon}</ListItemIcon>
                <ListItemText 
                  primary={item.text} 
                  sx={{ 
                    color: '#050C9C', // Text color
                    '&.active': {
                      color: 'white', // Change text color on active
                    },
                  }} 
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
}