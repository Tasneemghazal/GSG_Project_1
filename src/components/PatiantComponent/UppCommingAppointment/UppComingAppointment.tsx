import { Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { box, paper } from "./UppCommingAppointment.style";
import useAppointmentContext from "../../../hooks/useAppointment";
import { useEffect } from "react";

const UppCommingAppointments = () => {
  const {state,getMyAppointments}=useAppointmentContext();
  useEffect(()=>{
    getMyAppointments();
  },[])
  const now = new Date();
  const upcoming = state.myAppointments.find(
    (appoint) => new Date(appoint.date + " " + appoint.time) > now
  );
  console.log(upcoming)
  return (
    <Paper sx={paper}>
      <Box sx={box}>
        <Typography variant="h5" sx={{ color: "#050C9C" }}>
          Upcoming Appointment
        </Typography>
      </Box>
      <Typography variant="h6" sx={{ color: "#5A5A5A" }}>
        Dr. {upcoming?.doctorName} - {upcoming?.date}, {upcoming?.time}
      </Typography>
    </Paper>
  );
};

export default UppCommingAppointments;
