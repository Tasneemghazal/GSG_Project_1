import React from "react";
import { Paper, Box, InputBase, IconButton } from "@mui/material";
import { SearchOutlined } from "@mui/icons-material";
import AppointmentsTable from "../../Components/doctorComponents/appointments/AppointmentsTable";
import { inputSearch } from "./doctor.style";
import useModal from "../../hooks/useModal";
import CustomModal from "../../Components/custom-modal/CustomModal";
import useAppointmentContext from "../../hooks/useAppointment";

const Appointments = () => {
  const { state } = useAppointmentContext(); 
  const appointments = state.appointments; 
  const { state: modalState, dispatch } = useModal();

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
        handleStatusChange={(id, newStatus) => {
        }}
      />

      <CustomModal 
        open={modalState.open} 
        handleClose={handleClose} 
        selectedSymptom={modalState.symptom} 
        addNote={addNote} 
        mode={modalState.mode} 
        note={modalState.note} 
      />
    </Box>
  );
}

export default Appointments;