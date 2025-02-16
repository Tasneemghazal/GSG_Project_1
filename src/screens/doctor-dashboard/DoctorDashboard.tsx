import Grid from "@mui/material/Grid2";
import { FaUserClock, FaUserInjured } from "react-icons/fa";
import { FaCalendarDays } from "react-icons/fa6";
import { Paper } from "@mui/material";
import { chartCard } from "./doctor-dashboard.style";
import StatisticCard from "../../Components/doctorComponents/statistic-card/StatisticCard";
import CustomPieChart from "../../Components/doctorComponents/charts/CustomPieChart";
import CustomBarChart from "../../Components/doctorComponents/charts/CustomBarChart";
import useAppointmentContext from "../../hooks/useAppointment";
import { useEffect } from "react";

const DoctorDashboard = () => {
  const {state,countStatisticData} = useAppointmentContext();
  useEffect(()=>{
    countStatisticData();
  },[]);
  return (
    <Grid container spacing={2}>
      <Grid size={4}>
        <StatisticCard
          icon={<FaUserInjured size={"48px"} color="grey" />}
          text="Total Patients"
          total={state.appointments.length}
        />
      </Grid>
      <Grid size={4}>
        <StatisticCard
          icon={<FaUserClock size={"48px"} color="grey" />}
          text="Patients Today"
          total={state.totalAppointmentsToday}
        />
      </Grid>
      <Grid size={4}>
        <StatisticCard
          icon={<FaCalendarDays size={"48px"} color="grey" />}
          text="Appointments Today"
          total={state.totalAppointmentsToday}
        />
      </Grid>
      <Grid size={6}>
        <Paper sx={chartCard}>
          <CustomPieChart countPending={state.pending} countConfirmed={state.confirmed} />
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
