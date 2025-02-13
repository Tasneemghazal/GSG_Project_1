import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';
import { PatientSidebar } from '../../Components/PatiantComponent/PaitientSidebar/SidebarPaitiant';

const Patient = () => {
  return (
    <Box sx={{ display: 'flex', height: '100vh' }}>
      <PatientSidebar />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          bgcolor: 'background.default',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          p: 3,
        }}
      >
        <Outlet />
      </Box>
    </Box>
  );
}

export default Patient;