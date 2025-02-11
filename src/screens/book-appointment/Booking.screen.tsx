import React, { useState } from 'react';
import './booking.css';
import Button from '@mui/material/Button';
import {
  Alert,
  Box,
  createTheme,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Snackbar,
  TextField,
  ThemeProvider
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { button, form, group } from './booking.style';
import { Appointment } from '../../types/@types';
import { appointmentInitialData } from '../../constants/formInitialValues';
import { useAppointmentContext } from '../../providers/AppointmentProvider';

const theme = createTheme({
  components: {
    MuiFormLabel: {
      styleOverrides: {
        asterisk: { color: 'red' }
      }
    }
  }
});

const doctors = [
  { id: 1, name: 'Dr. Calvin Carlo' },
  { id: 2, name: 'Dr. Cristino Murphy' },
  { id: 3, name: 'Dr. Alia Reddy' },
  { id: 4, name: 'Dr. Toni Kovar' },
  { id: 5, name: 'Dr. Jessica McFarlane' },
  { id: 6, name: 'Dr. Bertha Magers' },
  { id: 7, name: 'Dr. Elsie Sherman' }
];

const Booking = () => {
  const { addAppointment } = useAppointmentContext();
  const [isBooked, setIsBooked] = useState(false);
  const [addAppointments, setAddAppointments] = useState<Appointment>(appointmentInitialData);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setAddAppointments({
      ...addAppointments,
      [name]: name === 'age' ? Number(value) : value
    });
  };

  const handleSelectChange = (e: SelectChangeEvent<string>) => {
    const { name, value } = e.target;
    setAddAppointments((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleDoctorChange = (e: SelectChangeEvent<string>) => {
    const chosenDoctor = doctors.find(doc => doc.name === e.target.value);
    setAddAppointments(prev => ({
      ...prev,
      doctorId: chosenDoctor?.id || 0,
      doctorName: chosenDoctor?.name || '',
    }));
  };

  const handleBooking = () => {
    if (
      !addAppointments.patientName.trim() ||
      !addAppointments.age ||
      !addAppointments.doctorName.trim() ||
      !addAppointments.contact.trim() ||
      !addAppointments.date.trim() ||
      !addAppointments.time.trim()
    ) {
      alert('Please fill all required fields');
      return;
    }
  
    console.log('Booking appointment:', addAppointments);
    addAppointment(addAppointments); // Ensure this is called correctly
    setIsBooked(true);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={form}>
        <span>Book an Appointment</span>
        <TextField
          fullWidth
          label='Patient Name'
          required
          margin='normal'
          name='patientName'
          value={addAppointments.patientName}
          onChange={handleChange}
        />
        <Box sx={group}>
          <TextField
            fullWidth
            label='Age'
            required
            margin='normal'
            name='age'
            type="number"
            value={addAppointments.age}
            onChange={handleChange}
          />
          <FormControl fullWidth required margin='normal'>
            <InputLabel>Doctor</InputLabel>
            <Select
              name='doctorName'
              value={addAppointments.doctorName}
              onChange={handleDoctorChange}
            >
              {doctors.map(doc => (
                <MenuItem key={doc.id} value={doc.name}>
                  {doc.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <TextField
            fullWidth
            label='Contact'
            required
            margin='normal'
            name='contact'
            value={addAppointments.contact}
            onChange={handleChange}
          />
        </Box>
        <Box sx={group}>
          <FormControl fullWidth required margin='normal'>
            <InputLabel>Gender</InputLabel>
            <Select
              name='gender'
              value={addAppointments.gender}
              onChange={handleSelectChange} // Use the new handler
            >
              <MenuItem value='Male'>Male</MenuItem>
              <MenuItem value='Female'>Female</MenuItem>
            </Select>
          </FormControl>
          <TextField
            fullWidth
            label='Date'
            required
            margin='normal'
            type='date'
            InputLabelProps={{ shrink: true }}
            name='date'
            value={addAppointments.date}
            onChange={handleChange}
          />
          <TextField
            fullWidth
            label="Time"
            required
            margin="normal"
            type="time"
            InputLabelProps={{ shrink: true }}
            inputProps={{
              min: "09:00",
              max: "17:00",
              step: 900, 
            }}
            name="time"
            value={addAppointments.time}
            onChange={handleChange}
          />
        </Box>
        <TextField
          fullWidth
          label='Symptoms'
          margin='normal'
          multiline
          rows={4}
          name='symptoms'
          value={addAppointments.symptoms}
          onChange={handleChange}
        />
        <Box sx={group}>
          <Button
            variant='contained'
            sx={button}
            onClick={handleBooking}
          >
            Book an Appointment
          </Button>
        </Box>
      </Box>
      {isBooked && (
        <Snackbar
          open={isBooked}
          autoHideDuration={3000}
          onClose={() => setIsBooked(false)}
          anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        >
          <Alert
            onClose={() => setIsBooked(false)}
            severity='success'
            variant='filled'
            icon={<CheckCircleIcon fontSize='inherit' />}
          >
            Booking Successful!
          </Alert>
        </Snackbar>
      )}
    </ThemeProvider>
  );
};

export default Booking;