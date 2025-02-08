import { Box, Typography } from "@mui/material";
import DoctorSidebar from "../../components/doctor-sidebar/DoctorSidebar";
import { Outlet, useLocation } from "react-router-dom";
import { container, content } from "./doctor.style";

const Doctor = () => {
  const location = useLocation();
  return (
    <Box sx={container}>
      <DoctorSidebar />
      <Box sx={content}>
        <Typography>Dashboard </Typography>
        <Typography>
          Doctor {">"}
          <span className="title"> {location.pathname.slice(8)} </span>
        </Typography>
        <Outlet />
      </Box>
    </Box>
  );
};

export default Doctor;
