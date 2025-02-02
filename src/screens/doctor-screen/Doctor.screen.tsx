import { Box } from "@mui/material";
import DoctorSidebar from "../../components/doctor-sidebar/DoctorSidebar";
import { Outlet } from "react-router-dom";
import { container, content } from "./doctor.style";

const Doctor = () => {
  return (
    <Box sx={container}>
      <DoctorSidebar />
      <Box sx={content}>
        <Outlet />
      </Box>
    </Box>
  );
};

export default Doctor;
