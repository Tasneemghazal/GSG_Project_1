import React from 'react';
import { Container, Button, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom'; 
import Search from '../Search/Search'; 
import AddIcon from '@mui/icons-material/Add'; 
import { appointmentButton, container } from './NewAppointment.style';

const AppointmentButton: React.FC = () => {
  const navigate = useNavigate(); 

  const handleNavigate = () => {
    navigate('/booking'); 
  };

  return (
    <Container>
      <Box sx={container()}
      >
        <Search />
        
        <Button  sx={appointmentButton()}
          variant="contained"
          onClick={handleNavigate}
          startIcon={<AddIcon />} 
        >
          Book New Appointment
        </Button>
      </Box>
    </Container>
  );
};

export default AppointmentButton;