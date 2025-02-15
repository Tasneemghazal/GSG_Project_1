import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';
import { PatientSidebar } from '../../Components/PatiantComponent/PaitientSidebar/SidebarPaitiant';

const Patient = () => {
  return (
    <Box sx={{ display: 'flex', maxHeight: '100vh' }}>
      <PatientSidebar />
      <Box
        sx={{
          maxHeight: '100vh',
          flexGrow: 1,
          p: 3,
        }}
      >
        <Outlet />
      </Box>
    </Box>
  );
}

export default Patient;