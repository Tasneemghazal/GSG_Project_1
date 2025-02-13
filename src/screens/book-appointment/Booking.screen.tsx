import React, { useContext, useState } from 'react';
import './booking.css';
import Button from '@mui/material/Button';
import {
  Box,
  createTheme,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
  ThemeProvider
} from '@mui/material';
import { button, form, group } from './booking.style';
import useAppointmentContext from '../../hooks/useAppointment';
import AlertMessage from '../../Components/snackbar/AlertMessage';
import useLocalStorage from '../../hooks/local-storage';
import { User } from '../../types/@types';
import { AuthContext } from '../../providers/AuthProvider';

const theme = createTheme({
  components: {
    MuiFormLabel: {
      styleOverrides: {
        asterisk: { color: 'red' }
      }
    }
  }
});

const Booking = () => {
  const {state, addAppointment, setAppointment } = useAppointmentContext();
  const {user} =useContext(AuthContext);
  const [storedDoctors] =useLocalStorage("doctors",[]);
  const doctors:User[]=storedDoctors;
  const [isBooked, setIsBooked] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    const newAppointment ={...state.appointment,[name]:name==="age"?Number(value):value, patientId:user.id, id: Date.now().toString()};
    setAppointment(newAppointment);
  };

  const handleSelectChange = (e: SelectChangeEvent<string>) => {
    const { name, value } = e.target;
    const newAppointment ={...state.appointment,[name]:value};
    setAppointment(newAppointment);
  };

  const handleDoctorChange = (e: SelectChangeEvent<string>) => {
    const chosenDoctor = doctors.find(doc => doc.name === e.target.value);
    const newAppointment={
      ...state.appointment,
      doctorId: chosenDoctor?.id || '',
      doctorName: chosenDoctor?.name || '',
    };
    setAppointment(newAppointment);
  };

  const handleBooking = () => {
    if (
      !state.appointment.patientName.trim() ||
      !state.appointment.age ||
      !state.appointment.doctorName.trim() ||
      !state.appointment.contact.trim() ||
      !state.appointment.date.trim() ||
      !state.appointment.time.trim()
    ) {
      alert('Please fill all required fields');
      return;
    }
    console.log('Booking appointment:', state.appointment);
    addAppointment(state.appointment);
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
          value={state.appointment.patientName}
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
            value={state.appointment.age}
            onChange={handleChange}
          />
          <FormControl fullWidth required margin='normal'>
            <InputLabel>Doctor</InputLabel>
            <Select
              name='doctorName'
              value={state.appointment.doctorName}
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
            value={state.appointment.contact}
            onChange={handleChange}
          />
        </Box>
        <Box sx={group}>
          <FormControl fullWidth required margin='normal'>
            <InputLabel>Gender</InputLabel>
            <Select
              name='gender'
              value={state.appointment.gender}
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
            value={state.appointment.date}
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
            value={state.appointment.time}
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
          value={state.appointment.symptoms}
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
        <AlertMessage isBooked={isBooked} setIsBooked={setIsBooked} message='Booking Successful'/>
      )}
    </ThemeProvider>
  );
};

export default Booking;