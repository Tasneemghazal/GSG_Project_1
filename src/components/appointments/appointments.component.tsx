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
  Snackbar,
  TextField,
  ThemeProvider
} from '@mui/material'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import doctor1 from '../../images/Doctors/01.jpg'
import doctor2 from '../../images/Doctors/02.jpg'
import doctor3 from '../../images/Doctors/03.jpg'
import doctor4 from '../../images/Doctors/04.jpg'
import doctor5 from '../../images/Doctors/04.jpg'
import doctor6 from '../../images/Doctors/04.jpg'
import doctor7 from '../../images/Doctors/04.jpg'
import { form, group } from './appointment.style'

interface Appointment {
  patientName: string
  patientImg: string
  age: number
  doctor: string
  doctorImg: string
  email: string
  gender: string
  date: string
  time: string
  fees: string
}
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
  { id: 1, name: 'Dr. Calvin Carlo', image: doctor1, fee: '100$' },
  { id: 2, name: 'Dr. Cristino Murphy', image: doctor2, fee: '70$' },
  { id: 3, name: 'Dr. Alia Reddy', image: doctor3, fee: '200$' },
  { id: 4, name: 'Dr. Toni Kovar', image: doctor4, fee: '150$' },
  { id: 5, name: 'Dr. Jessica McFarlane', image: doctor5, fee: '180$' },
  { id: 6, name: 'Dr. Bertha Magers', image: doctor6, fee: '250$' },
  { id: 7, name: 'Dr. Elsie Sherman', image: doctor7, fee: '300$' }
]

const Appointments = () => {
  const [open, setOpen] = useState(true)
  const [isBooked, setIsBooked] = useState(false)
  const [addAppointments, setAddAppointments] = useState<Appointment>({
    patientName: '',
    patientImg: '',
    age: 0,
    doctor: '',
    doctorImg: '',
    email: '',
    gender: '',
    date: '',
    time: '',
    fees: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setAddAppointments({
      ...addAppointments,
      [name]: name === 'age' ? Number(value) : value
    })
  }

  const handleDoctorChange = (e: any) => {
    const choosenDoctor = doctors.find(doc => doc.name === e.target.value)
    setAddAppointments({
      ...addAppointments,
      doctor: choosenDoctor?.name || '',
      doctorImg: choosenDoctor?.image || '',
      fees: choosenDoctor?.fee || ''
    })
  }

  const handleBooking = () => {
    if (
      !addAppointments.patientName.trim() ||
      !addAppointments.age ||
      !addAppointments.doctor.trim() ||
      !addAppointments.email.trim() ||
      !addAppointments.date.trim() ||
      !addAppointments.time.trim()
    ) {
      alert('Please fill all required data')
      return
    }
    setOpen(false)
    setIsBooked(true)
    // setTimeout(() => setIsBooked(false), 3000)
  }

  return (
    <ThemeProvider theme={theme}>
      <div>
        <Modal open={open} onClose={() => setOpen(false)}>
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
                value={addAppointments.age}
                onChange={handleChange}
              />
              <FormControl fullWidth required margin='normal'>
                <InputLabel>Doctor</InputLabel>
                <Select
                  name='doctor'
                  value={addAppointments.doctor}
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
                label='Your Email'
                required
                margin='normal'
                name='email'
                value={addAppointments.email}
                onChange={handleChange}
              />
            </Box>
            <Box sx={group}>
              <FormControl fullWidth required margin='normal'>
                <InputLabel>Gender</InputLabel>
                <Select
                  name='gender'
                  value={addAppointments.gender}
                  onChange={handleChange}
                >
                  <MenuItem value='male'>Male</MenuItem>
                  <MenuItem value='female'>Female</MenuItem>
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
              label='Comments'
              margin='normal'
              multiline
              rows={4}
              name='comments'
              onChange={handleChange}
            />
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
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
                onClick={() => setOpen(false)}
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
              Booking Successfully!
            </Alert>
          </Snackbar>
        )}
      </div>
    </ThemeProvider>
  )
}

export default Appointments
