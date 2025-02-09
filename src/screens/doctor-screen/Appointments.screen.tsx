import {useState } from "react";
import { Paper, Box, InputBase, IconButton } from "@mui/material";
import { SearchOutlined } from "@mui/icons-material";
import { Appointment, initialAppointments, Status } from "../../types/@types";
import CustomModal from "../../components/custom-modal/CustomModal"
import AppointmentsTable from "../../Components/doctorComponents/appointments/AppointmentsTable";
import { inputSearch } from "./doctor.style";
import useModal from "../../hooks/useModal";

const Appointments=()=> {
  const [appointments, setAppointments] = useState<Appointment[]>(initialAppointments);
  const{state, dispatch}=useModal();

  const handleStatusChange = (id: number, newStatus: Status) => {
    setAppointments((prevAppointments) =>
      prevAppointments.map((appointment) =>
        appointment.id === id ? { ...appointment, status: newStatus } : appointment
      )
    );
  };

  const showSymptom = (symptom: string) => {
    dispatch({ type: "OPEN_MODAL", payload: symptom });
  };

  const handleClose = () => {
    dispatch({ type: "CLOSE_MODAL" });
  };

  const openNoteModal = () => {
    dispatch({ type: "OPEN_NOTE_MODAL" });
  };

  const addNote = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: "ADD_NOTE", payload: event.target.value });
  };

  return (
    <Box>
      <Paper sx={inputSearch}>
        <InputBase placeholder="Search by Patient Name" />
        <IconButton>
          <SearchOutlined />
        </IconButton>
      </Paper>
      <AppointmentsTable
        appointments={appointments}
        showSymptom={showSymptom}
        openNoteModal={openNoteModal}
        handleStatusChange={handleStatusChange}
      />

      <CustomModal open={state.open} handleClose={handleClose} selectedSymptom={state.symptom} addNote={addNote} mode={state.mode} note={state.note} />
    </Box>
  );
}
export default Appointments;