import { useState } from 'react'
import './appointments.css'
import Button from '@mui/material/Button'
import {
  Alert,
  Box,
  createTheme,
  FormControl,
  InputLabel,
  MenuItem,
  Modal,
  Select,
  SelectChangeEvent,
  Snackbar,
  TextField,
  ThemeProvider
} from '@mui/material'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import { form, group } from './appointment.style'
import { Appointment } from '../../types/@types'
import { appointmentInitialData } from '../../constants/formInitialValues'

const theme = createTheme({
  components: {
    MuiFormLabel: {
      styleOverrides: {
        asterisk: { color: 'red' }
      }
    }
  }
})

const doctors = [
  { id: 1, name: 'Dr. Calvin Carlo'},
  { id: 2, name: 'Dr. Cristino Murphy'},
  { id: 3, name: 'Dr. Alia Reddy'},
  { id: 4, name: 'Dr. Toni Kovar'},
  { id: 5, name: 'Dr. Jessica McFarlane'},
  { id: 6, name: 'Dr. Bertha Magers'},
  { id: 7, name: 'Dr. Elsie Sherman'}
]

interface AppointmentsProps {
  onClose: () => void;
}

const Appointments = ({ onClose }: AppointmentsProps) => {
  const [open, setOpen] = useState(true)
  const [isBooked, setIsBooked] = useState(false)
  const [addAppointments, setAddAppointments] = useState<Appointment>(appointmentInitialData);

  const handleChange = (e: React.ChangeEvent<{ name?: string; value: unknown }>) => {
    const { name, value } = e.target;
    if (!name) return;

    setAddAppointments(prev => ({
      ...prev,
      [name]: name === 'age' ? Number(value) : value
    }));
  };

  const handleGenderChange = (e: SelectChangeEvent) => {
    const { name, value } = e.target;
    if (!name) return;

    setAddAppointments(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleDoctorChange = (e: SelectChangeEvent) => {
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

    setOpen(false);
    setIsBooked(true);
  };

  return (
    <ThemeProvider theme={theme}>
      <div>
        <Modal open={open} onClose={onClose}>
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
                  onChange={handleGenderChange}
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
                label='Time'
                required
                margin='normal'
                type='time'
                InputLabelProps={{ shrink: true }}
                name='time'
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
                sx={{ marginTop: 5 }}
                onClick={handleBooking}
              >
                Book an Appointment
              </Button>
              <Button
                variant='outlined'
                color='error'
                sx={{ marginTop: 5 }}
                onClick={onClose}
              >
                Cancel
              </Button>
            </Box>
          </Box>
        </Modal>
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
      </div>
    </ThemeProvider>
  )
}

export default Appointments
