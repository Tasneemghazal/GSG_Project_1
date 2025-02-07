import { BarChart } from "@mui/x-charts/BarChart";

const CustomBarChart = () => {
  return (
    <BarChart
      xAxis={[
        {
          scaleType: "band",
          data: [
            "group A",
            "group B",
            "group C",
            "group D",
            "group E",
            "group F",
            "group G",
          ],
          label: "Appointments",
        },
      ]}
      series={[{ data: [4, 3, 5, 7, 8, 1, 4] }]}
      width={500}
      height={300}
      colors={["#3ABEF9"]}
    />
  );
};

export default CustomBarChart;
