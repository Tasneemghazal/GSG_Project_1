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

  const openNoteModal = (id:string) => {
    dispatch({ type: "OPEN_NOTE_MODAL", payload: id });
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
        mode={modalState.mode}
        appointmentId={modalState.appointId}
      />
    </Box>
  );
}

export default Appointments;