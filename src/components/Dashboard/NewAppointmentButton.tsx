import React from 'react';
import { Container, Typography, Button, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom'; 
import Search from './Search'; 
import AddIcon from '@mui/icons-material/Add'; 

const AppointmentButton: React.FC = () => {
  const navigate = useNavigate(); 

  const handleNavigate = () => {
    navigate('/booking'); 
  };

  return (
    <Container>
      <Box 
        display="flex" 
        justifyContent="space-between" 
        alignItems="center" 
        marginTop="20px"
      >
        <Search />
        
        <Button sx={{width:'250px'}}
          variant="contained"
          onClick={handleNavigate}
          style={{
            backgroundColor: '#3572EF', 
            color: 'black', 
            padding: '10px 30px',
            fontSize: '16px', 
          }}
          startIcon={<AddIcon />} 
        >
          Book New Appointment
        </Button>
      </Box>
    </Container>
  );
};

export default AppointmentButton;