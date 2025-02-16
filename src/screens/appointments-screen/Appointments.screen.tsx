import React, { useContext, useEffect } from "react";
import { Paper, Box, InputBase} from "@mui/material";
import { SearchOutlined } from "@mui/icons-material";
import AppointmentsTable from "../../components/common/appointments-table/AppointmentsTable";
import { inputSearch } from "./appointments.style"
import useModal from "../../hooks/useModal";
import CustomModal from "../../components/common/custom-modal/CustomModal";
import useAppointmentContext from "../../hooks/useAppointment";
import { AuthContext } from "../../providers/AuthProvider";
import { UserType } from "../../types/@types";

const Appointments = () => {
  const { state, getMyAppointments, handleStatusChange , filterAppointments, searchByPatientName} = useAppointmentContext();
  const { user } = useContext(AuthContext);
  const { state: modalState, dispatch } = useModal();
  useEffect(() => {
    getMyAppointments();
  }, []);

  const showSymptom = (symptom: string) => {
    dispatch({ type: "OPEN_MODAL", payload: symptom });
  };

  const handleClose = () => {
    dispatch({ type: "CLOSE_MODAL" });
  };

  const openNoteModal = (id: string) => {
    dispatch({ type: "OPEN_NOTE_MODAL", payload: id });
  };
  const showNote = (note: string) => {
    dispatch({ type: "SHOW_NOTE", payload: note });
  };
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    searchByPatientName(event.target.value);
  };

  return (
    <Box>
      {user.userType===UserType.Doctor&&<Paper sx={inputSearch}>
        <InputBase placeholder="Search by Patient Name" onChange={handleSearchChange}/>
          <SearchOutlined />
      </Paper>}
      <AppointmentsTable
        filteredAppointments={state.filteredAppointments} 
        filterAppointments={filterAppointments}
        userType={user.userType}
        showSymptom={showSymptom}
        showNote={showNote}
        openNoteModal={openNoteModal}
        handleStatusChange={handleStatusChange}
      />

      <CustomModal
        open={modalState.open}
        handleClose={handleClose}
        selectedSymptom={modalState.symptom}
        mode={modalState.mode}
        appointmentId={modalState.appointId}
        note={modalState.note}
      />
    </Box>
  );
}

export default Appointments;