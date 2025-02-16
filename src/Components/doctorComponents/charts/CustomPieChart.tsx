import { PieChart } from '@mui/x-charts';

interface IProps {
  countPending: number;
  countConfirmed: number;
}
const CustomPieChart=(props:IProps)=> {
  return (
    <PieChart
      series={[
        {
          data: [
            { id: 0, value: props.countPending, label: 'Pending' },
            { id: 1, value: props.countConfirmed, label: 'Confirmed' },
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