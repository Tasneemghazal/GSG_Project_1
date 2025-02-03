import { PieChart } from '@mui/x-charts';


const CustomPieChart=()=> {
  return (
    <PieChart
      series={[
        {
          data: [
            { id: 0, value: 10, label: 'series A' },
            { id: 1, value: 15, label: 'series B' },
          ],
        },
      ]}
      width={400}
      height={200}
      colors={["#3ABEF9","#3572EF"]}
    />
  );
}

export default CustomPieChart;