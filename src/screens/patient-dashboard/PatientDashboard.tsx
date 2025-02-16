import Grid from "@mui/material/Grid2";
import { CiTempHigh } from "react-icons/ci";
import { FaHeart, FaSyringe, FaUserEdit } from "react-icons/fa";
import { MdAddBox } from "react-icons/md";
import Calender from "../../component/PatiantComponent/Calender/Calender";
import HealthRecordComponent from "../../component/PatiantComponent/HealthRecord/HealthReacord";
import UppCommingAppointments from "../../component/PatiantComponent/UppCommingAppointment/UppComingAppointment";
import Report from "../../component/PatiantComponent/Report/Report";

const healthData = [
  { icon: <FaHeart />, label: "Heart Rate", value: "140 BPM" },
  { icon: <CiTempHigh />, label: "Body Temperature", value: "37.5 °C" },
  { icon: <MdAddBox />, label: "Glucose Level", value: "70 - 90 mg/dL" },
  { icon: <FaSyringe />, label: "Blood Pressure", value: "100/70 mmHg" },
  { icon: <FaUserEdit />, label: "BMI", value: "20.1 kg/m²" },
];

const Dashboard = () => {
  return (
    <Grid container spacing={1}>
      <Grid  size={6} >
        <HealthRecordComponent healthData={healthData} />
      </Grid>
      <Grid  size={6} >
      <Report />
      </Grid>
      <Grid  size={6} >
        <UppCommingAppointments />
      </Grid>
      <Grid size={6} >
      <Calender />
      </Grid>
    </Grid>
  );
};

export default Dashboard;
