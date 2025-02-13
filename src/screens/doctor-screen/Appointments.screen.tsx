import React, { useContext, useEffect } from "react";
import { Paper, Box, InputBase, IconButton } from "@mui/material";
import { SearchOutlined } from "@mui/icons-material";
import AppointmentsTable from "../../Components/doctorComponents/appointments/AppointmentsTable";
import { inputSearch } from "./doctor.style";
import useModal from "../../hooks/useModal";
import CustomModal from "../../Components/custom-modal/CustomModal";
import useAppointmentContext from "../../hooks/useAppointment";
import { AuthContext } from "../../providers/AuthProvider";

const Appointments = () => {
  const { state, getAppointmentsForDoctor} = useAppointmentContext(); 
  const {user}= useContext(AuthContext);
  const { state: modalState, dispatch } = useModal();
  useEffect(() => {
    getAppointmentsForDoctor();
  }, []); 

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
  // const handleStatusChange = (id:string, newStatus:string)=>{
  //   console.log(`Updating appointment status for ${id} to ${newStatus}`);
  //    const appointment = state.appointments.find(appoint => appoint.id === id)?.status = newStatus;
  //    dispatch({ type: "UPDATE_APPOINTMENT", payload: appointment });
  // }

  return (
    <Box>
      <Paper sx={inputSearch}>
        <InputBase placeholder="Search by Patient Name" />
        <IconButton>
          <SearchOutlined />
        </IconButton>
      </Paper>
      <AppointmentsTable
        appointments={state.myAppointments} 
        userType={user.userType}
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