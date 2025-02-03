import Grid from "@mui/material/Grid2";
import StatisticCard from "../statistic-card/StatisticCard";
import { FaUserClock, FaUserInjured } from "react-icons/fa";
import { FaCalendarDays } from "react-icons/fa6";
import CustomPieChart from "../charts/CustomPieChart";
import { Paper } from "@mui/material";
import CustomBarChart from "../charts/CustomBarChart";
import { chartCard } from "./doctor-dashboard.style";

const DoctorDashboard = () => {
  return (
    <Grid container spacing={2}>
      <Grid size={4}>
        <Grid container direction="column" spacing={2}>
          <StatisticCard
            icon={<FaUserInjured size={"48px"} color="grey" />}
            text="Total Patient"
            total={40}
          />
          <StatisticCard
            icon={<FaUserClock size={"48px"} color="grey" />}
            text="Patients Today"
            total={40}
          />
          <StatisticCard
            icon={<FaCalendarDays size={"48px"} color="grey" />}
            text="Appointments Today"
            total={40}
          />
        </Grid>
      </Grid>
      <Grid size={8}>
        <Grid container direction="column" spacing={2}>
          <Paper sx={chartCard}>
            <CustomPieChart />
          </Paper>
          <Paper sx={chartCard}>
            <CustomBarChart />
          </Paper>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default DoctorDashboard;
