import Grid from "@mui/material/Grid2";
import { FaUserClock, FaUserInjured } from "react-icons/fa";
import { FaCalendarDays } from "react-icons/fa6";
import { Paper } from "@mui/material";
import { chartCard } from "./doctor-screen.style";
import StatisticCard from "../../Components/statistic-card/StatisticCard";
import CustomPieChart from "../../Components/charts/CustomPieChart";
import CustomBarChart from "../../Components/charts/CustomBarChart";

const DoctorDashboard = () => {
  return (
    <Grid container spacing={2}>
      <Grid size={4}>
        <StatisticCard
          icon={<FaUserInjured size={"48px"} color="grey" />}
          text="Total Patients"
          total={40}
        />
      </Grid>
      <Grid size={4}>
        <StatisticCard
          icon={<FaUserClock size={"48px"} color="grey" />}
          text="Patients Today"
          total={40}
        />
      </Grid>
      <Grid size={4}>
        <StatisticCard
          icon={<FaCalendarDays size={"48px"} color="grey" />}
          text="Appointments Today"
          total={40}
        />
      </Grid>
      <Grid size={6}>
        <Paper sx={chartCard}>
          <CustomPieChart />
        </Paper>
      </Grid>
      <Grid size={6}>
        <Paper sx={chartCard}>
          <CustomBarChart />
        </Paper>
      </Grid>
    </Grid>
  );
};

export default DoctorDashboard;
