import React, { useState } from 'react';
import { Container, Box } from '@mui/material';
import Search from '../Search/Search';  
import { container } from './NewAppointment.style';
import { Link } from 'react-router-dom';
import Appointments from '../../appointments/appointments.component';

const AppointmentButton: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <Container>
      <Box sx={container}>
        <Search />
        
        <Link to="#" onClick={handleModalOpen} className="book">
          Book New Appointment
        </Link>

        {isModalOpen && <Appointments onClose={handleModalClose} />}
      </Box>
    </Container>
  );
};

export default AppointmentButton;
