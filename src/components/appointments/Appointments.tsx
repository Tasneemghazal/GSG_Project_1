import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
  Button,
  Typography,
  Stack,
} from "@mui/material";
import { Appointment, Status } from "../../types/@types";
import { button, table } from "./appointments.style";
import CustomModal from "../custom-modal/CustomModal";

const initialAppointments: Appointment[] = [
  { id: 1, name: "John Doe", age: 29, gender: "Male", contact: "123-456-7890", symptoms: "Fever, Cough", status: Status.Pending },
  { id: 2, name: "Jane Smith", age: 34, gender: "Female", contact: "987-654-3210", symptoms: "Headache", status: Status.Confirmed},
  { id: 3, name: "Michael Brown", age: 42, gender: "Male", contact: "555-789-1234", symptoms: "Fatigue", status: Status.Completed },
];

export default function Appointments() {
  const [appointments, setAppointments] = useState<Appointment[]>(initialAppointments);
  const [open, setOpen] = useState(false);
  const [symptom, setSymptom] = useState("");

  const handleStatusChange = (id: number, newStatus: Status) => {
    setAppointments((prevAppointments) =>
      prevAppointments.map((appointment) =>
        appointment.id === id ? { ...appointment, status: newStatus } : appointment
      )
    );
  };

  const showSymptom = (symptom: string)=>{
    setSymptom(symptom);
    setOpen(true);
  }

  const handleClose = ()=>{
    setOpen(false);
    setSymptom("");
  }

  return (
    <Box>
      <Typography variant="h5" mb={2}>
        Patients Appointments
      </Typography>
      <TableContainer component={Paper}>
        <Table sx={table}>
          <TableHead>
            <TableRow>
              <TableCell>Patient Name</TableCell>
              <TableCell align="right">Age</TableCell>
              <TableCell align="right">Gender</TableCell>
              <TableCell align="right">Contact</TableCell>
              <TableCell align="right">Symptoms</TableCell>
              <TableCell align="center">Action</TableCell>
              <TableCell align="center">Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {appointments.map((appointment) => (
              <TableRow key={appointment.id}>
                <TableCell>{appointment.name}</TableCell>
                <TableCell align="right">{appointment.age}</TableCell>
                <TableCell align="right">{appointment.gender}</TableCell>
                <TableCell align="right">{appointment.contact}</TableCell>
                <TableCell align="right">
                  <Button variant="outlined" sx={button} onClick={()=>showSymptom(appointment.symptoms)}>Show</Button>
                </TableCell>
                <TableCell align="right"><Button variant="outlined" sx={button}>Add note</Button></TableCell>
                <TableCell align="center">
                  <Stack direction="row" spacing={1} justifyContent="center">
                    {[Status.Pending, Status.Confirmed, Status.Completed].map((status) => (
                      <Button
                        key={status}
                        variant={appointment.status === status ? "contained" : "outlined"}
                        color={
                          status === "Pending"
                            ? "error"
                            : status === "Confirmed"
                            ? "primary"
                            : "success"
                        }
                        sx={button}
                        onClick={() => handleStatusChange(appointment.id, status)}
                      >
                        {status}
                      </Button>
                    ))}
                  </Stack>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <CustomModal open={open} handleClose={handleClose} selectedSymptom={symptom}/>
    </Box>
  );
}
