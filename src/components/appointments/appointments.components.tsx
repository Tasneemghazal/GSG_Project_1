import { useState } from "react";
import AppointmentsTable from "./AppointmentsTable";
import "./appointments.css";
import Button from "@mui/material/Button";
import {
  Box,
  createTheme,
  FormControl,
  InputLabel,
  MenuItem,
  Modal,
  Select,
  TextField,
  ThemeProvider,
} from "@mui/material";
import doctor1 from "../../images/Doctors/01.jpg";
import doctor2 from "../../images/Doctors/02.jpg";
import doctor3 from "../../images/Doctors/03.jpg";
import doctor4 from "../../images/Doctors/04.jpg";
import doctor5 from "../../images/Doctors/04.jpg";
import doctor6 from "../../images/Doctors/04.jpg";
import doctor7 from "../../images/Doctors/04.jpg";
import patient1 from "../../images/Patient/01.jpg";
import patient2 from "../../images/Patient/02.jpg";
import patient3 from "../../images/Patient/03.jpg";
import patient4 from "../../images/Patient/04.jpg";

interface Appointment {
  patientName: string;
  patientImg: string;
  age: number;
  doctor: string;
  doctorImg: string;
  email: string;
  phone?: string;
  date: string;
  time: string;
  fees?: string;
}
const theme = createTheme({
  components: {
    MuiFormLabel: {
      styleOverrides: {
        asterisk: { color: "red" },
      },
    },
  },
});

const doctors = [
  { id: 1, name: "Dr. Calvin Carlo", image: doctor1, fee: "100$" },
  { id: 2, name: "Dr. Cristino Murphy", image: doctor2, fee: "70$" },
  { id: 3, name: "Dr. Alia Reddy", image: doctor3, fee: "200$" },
  { id: 4, name: "Dr. Toni Kovar", image: doctor4, fee: "150$" },
  { id: 5, name: "Dr. Jessica McFarlane", image: doctor5, fee: "180$" },
  { id: 6, name: "Dr. Bertha Magers", image: doctor6, fee: "250$" },
  { id: 7, name: "Dr. Elsie Sherman", image: doctor7, fee: "300$" },
];

const initialData = [
  {
    id: 1,
    patientName: "John Doe",
    patientImg: patient1,
    email: "john@example.com",
    age: 30,
    gender: "Male",
    date: "13th Sep 2025",
    time: "10:00 AM",
    doctor: "Dr. Calvin Carlo",
    doctorImg: doctor1,
    fees: "100$",
  },
  {
    id: 2,
    patientName: "Howard Tanner",
    patientImg: patient2,
    email: "howard@example.com",
    age: 28,
    gender: "Male",
    date: "1st Jan 2024",
    time: "02:00 PM",
    doctor: "Dr. Cristino Murphy",
    doctorImg: doctor2,
    fees: "70$",
  },
  {
    id: 3,
    patientName: "Wendy Filson",
    patientImg: patient3,
    email: "wendy@example.com",
    age: 22,
    gender: "Female",
    date: "15th Nov 2024",
    time: "09:00 AM",
    doctor: "Dr. Alia Reddy",
    doctorImg: doctor3,
    fees: "200$",
  },
  {
    id: 4,
    patientName: "Faye Bridger",
    patientImg: patient4,
    email: "faye@example.com",
    age: 25,
    gender: "Female",
    date: "7th April 2025",
    time: "12:00 AM",
    doctor: "Dr. Toni Kovar",
    doctorImg: doctor4,
    fees: "150$",
  },
];

const Appointments = () => {
  const [open, setOpen] = useState(false);
  const [appointments, setAppointments] = useState<Appointment[]>(initialData);
  const [addAppointments, setAddAppointments] = useState<Appointment>({
    patientName: "",
    patientImg: "",
    age: 0,
    doctor: "",
    doctorImg: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    fees: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setAddAppointments({
      ...addAppointments,
      [name]: name === "age" ? Number(value) : value,
    });
  };

  const handleDoctorChange = (e: any) => {
    const choosenDoctor = doctors.find((doc) => doc.name === e.target.value);
    setAddAppointments({
      ...addAppointments,
      doctor: choosenDoctor?.name || "",
      doctorImg: choosenDoctor?.image || "",
      fees: choosenDoctor?.fee || "",
    });
  };

  const handleSubmit = () => {
    if (
      !addAppointments.patientName.trim() ||
      !addAppointments.age ||
      !addAppointments.doctor.trim() ||
      !addAppointments.email.trim() ||
      !addAppointments.date.trim() ||
      !addAppointments.time.trim()
    ) {
      alert("Please fill all required data");
      return;
    }
    setAppointments([...appointments, addAppointments]);
    setAddAppointments({
      patientName: "",
      patientImg: "",
      age: 0,
      doctor: "",
      doctorImg: "",
      email: "",
      phone: "",
      date: "",
      time: "",
      fees: "",
    });
    setOpen(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <div>
        <span className="root">
          <h3>Appointments Table</h3>
          <Button variant="contained" onClick={() => setOpen(true)}>
            Add Appointment
          </Button>
        </span>
        <Modal open={open} onClose={() => setOpen(false)}>
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              height: "500px",
              width: "800px",
              bgcolor: "#F7F3F2",
              boxShadow: 24,
              p: 4,
              borderRadius: "10px",
              overflow: "auto",
            }}
          >
            <span>Book an Appointment</span>
            <TextField
              fullWidth
              label="Patient Name"
              required
              margin="normal"
              name="patientName"
              value={addAppointments.patientName}
              onChange={handleChange}
            />
            <Box sx={{ display: "flex", gap: 2 }}>
              <TextField
                fullWidth
                label="Age"
                required
                margin="normal"
                name="age"
                value={addAppointments.age}
                onChange={handleChange}
              />
              <FormControl fullWidth required margin="normal">
                <InputLabel>Doctor</InputLabel>
                <Select
                  name="doctor"
                  value={addAppointments.doctor}
                  onChange={handleDoctorChange}
                >
                  {doctors.map((doc) => (
                    <MenuItem key={doc.id} value={doc.name}>
                      {doc.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <TextField
                fullWidth
                label="Your Email"
                required
                margin="normal"
                name="email"
                value={addAppointments.email}
                onChange={handleChange}
              />
            </Box>
            <Box sx={{ display: "flex", gap: 2 }}>
              <TextField
                fullWidth
                label="Your Phone"
                required
                margin="normal"
                name="phone"
                value={addAppointments.phone}
                onChange={handleChange}
              />
              <TextField
                fullWidth
                label="Date"
                required
                margin="normal"
                type="date"
                InputLabelProps={{ shrink: true }}
                name="date"
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
                name="time"
                value={addAppointments.time}
                onChange={handleChange}
              />
            </Box>
            <TextField
              fullWidth
              label="Comments"
              margin="normal"
              multiline
              rows={4}
              name="comments"
              onChange={handleChange}
            />
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Button
                variant="contained"
                sx={{ marginTop: 5 }}
                onClick={handleSubmit}
              >
                Book an Appointment
              </Button>
              <Button
                variant="outlined"
                color="error"
                sx={{ marginTop: 5 }}
                onClick={() => setOpen(false)}
              >
                Cancel
              </Button>
            </Box>
          </Box>
        </Modal>
        <AppointmentsTable appointments={appointments} />
      </div>
    </ThemeProvider>
  );
};

export default Appointments;
