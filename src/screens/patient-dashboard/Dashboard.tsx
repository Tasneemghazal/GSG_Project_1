import { Box, Container, Grid } from '@mui/material';
import UppCommingAppointments from '../UppCommingAppointment/UppComingAppointment';
import { CiTempHigh } from 'react-icons/ci';
import { FaHeart, FaSyringe, FaUserEdit } from 'react-icons/fa';
import { MdAddBox } from 'react-icons/md';
import { SiOxygen } from 'react-icons/si';
import Report from '../Report/Report';
import AppointmentButton from '../Appointment/NewAppointmentButton';
import HealthRecordComponent from '../HealthRecord/HealthReacord';
import Calender from '../Calender/Calender';
import { box } from './dashboard.styl';

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
      <Box sx={box()}>
        <Box sx={{ flexGrow: 1 }}>
          <Grid>
          <AppointmentButton />
          </Grid>
          <Grid container spacing={2} sx={{ marginTop: 2 }}>
            <Grid item xs={12} md={6}>
              <HealthRecordComponent healthData={healthData} />
            </Grid>
            <Grid item xs={12} md={6} sx={{ marginTop: 0 }}>
              <Calender />
            </Grid>

            <Grid item xs={12} md={6} sx={{ marginTop: 0 }}>
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