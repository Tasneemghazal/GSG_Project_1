import React from 'react';
import { Container, Box } from '@mui/material';
import Search from '../Search/Search';  
import { container } from './NewAppointment.style';
import { Link } from 'react-router-dom';

const AppointmentButton: React.FC = () => {

  return (
    <Container>
      <Box sx={container}>
        <Search />
        <Link to="/patient/booking" className="book">
          Book New Appointment
        </Link>
      </Box>
    </Container>
  );
};

export default AppointmentButton;
