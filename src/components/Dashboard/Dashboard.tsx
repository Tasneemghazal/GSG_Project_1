import { Box, Container, Grid } from '@mui/material';
import UppCommingAppointments from './UppComingAppointment';
import { CiTempHigh } from 'react-icons/ci';
import { FaHeart, FaSyringe, FaUserEdit } from 'react-icons/fa';
import { MdAddBox } from 'react-icons/md';
import { SiOxygen } from 'react-icons/si';
import HealthRecordComponent from './HealthReacord';
import Report from './Report';
import Calender from './Calender';
import AppointmentButton from './NewAppointmentButton';

const healthData = [
  { icon: <FaHeart />, label: "Heart Rate", value: "140 BPM" },
  { icon: <CiTempHigh />, label: "Body Temperature", value: "37.5 °C" },
  { icon: <MdAddBox />, label: "Glucose Level", value: "70 - 90 mg/dL" },
  { icon: <SiOxygen />, label: "SpO2", value: "96%" },
  { icon: <FaSyringe />, label: "Blood Pressure", value: "100/70 mmHg" },
  { icon: <FaUserEdit />, label: "BMI", value: "20.1 kg/m²" },
];

const Dashboard = () => {
  return (
    <Container>
      <Box sx={{ display: 'flex', height: '100vh', bgcolor: 'white' }}>
        <Box sx={{ flexGrow: 1 }}>
          <Grid>
          <AppointmentButton />
          </Grid>
          <Grid container spacing={2} sx={{ marginTop: 2 }}>
            <Grid item xs={12} md={6}>
              <HealthRecordComponent healthData={healthData} />
            </Grid>
            <Grid item xs={12} md={6} sx={{ marginTop: 0 }}> {/* Adjust marginTop here */}
              <Calender />
            </Grid>

            <Grid item xs={12} md={6} sx={{ marginTop: 0 }}> {/* Adjust marginTop here */}
              <UppCommingAppointments />
            </Grid>
            <Grid item xs={12} md={6}>
              <Report />
            </Grid>

          </Grid>
        </Box>
      </Box>
    </Container>
  );
}

export default Dashboard;