import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';
import { PatientSidebar } from '../../Components/PatiantComponent/PaitientSidebar/SidebarPaitiant';
import { container, content } from './patient-screen.styl';

const Patient = () => {
  return (
    <Box sx={container}>
      <PatientSidebar />
      <Box
        sx={content}
      >
        <Outlet />
      </Box>
    </Box>
  );
}

export default Patient;