import { BarChart } from "@mui/x-charts/BarChart";
import { useEffect } from "react";
import useAppointmentContext from "../../../hooks/useAppointment";

const CustomBarChart = () => {
  const { state, getAppointmentsPerDay } = useAppointmentContext();
  useEffect(()=>{
    getAppointmentsPerDay();
  },[])
  const labels = Object.keys(state.appointmentsPerDay);
  const data = labels.map((date) => state.appointmentsPerDay[date]);
  return (
    <BarChart
      xAxis={[
        {
          scaleType: "band",
          data: labels,
          label: "Appointments",
        },
      ]}
      yAxis={[
        {
          min: 0,
          max:5, // Ensure it starts from 0
          tickMinStep: 1, // Force whole number steps
        },
      ]}
      series={[{ data: data }]}
      width={500}
      height={300}
      colors={["#3ABEF9"]}
    />
  );
};

export default CustomBarChart;
