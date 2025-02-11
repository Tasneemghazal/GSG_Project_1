import { Box, Container, Grid } from '@mui/material';
import { CiTempHigh } from 'react-icons/ci';
import { FaHeart, FaSyringe, FaUserEdit } from 'react-icons/fa';
import { MdAddBox } from 'react-icons/md';
import { SiOxygen } from 'react-icons/si';
import { box } from './dashboard.styl';
import AppointmentButton from '../../Components/PatiantComponent/Appointment/NewAppointmentButton';
import Calender from '../../Components/PatiantComponent/Calender/Calender';
import HealthRecordComponent from '../../Components/PatiantComponent/HealthRecord/HealthReacord';
import UppCommingAppointments from '../../Components/PatiantComponent/UppCommingAppointment/UppComingAppointment';
import Report from '../../Components/PatiantComponent/Report/Report';
import { useAppointmentContext } from '../../providers/AppointmentProvider';


const healthData = [
  { icon: <FaHeart />, label: "Heart Rate", value: "140 BPM" },
  { icon: <CiTempHigh />, label: "Body Temperature", value: "37.5 °C" },
  { icon: <MdAddBox />, label: "Glucose Level", value: "70 - 90 mg/dL" },
  { icon: <SiOxygen />, label: "SpO2", value: "96%" },
  { icon: <FaSyringe />, label: "Blood Pressure", value: "100/70 mmHg" },
  { icon: <FaUserEdit />, label: "BMI", value: "20.1 kg/m²" },
];

const Dashboard = () => {
  const { state } = useAppointmentContext();
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

            </Grid>
              <Report/>
          </Grid>
        </Box>
      </Box>
      
    </Container>
  );
}

export default Dashboard;