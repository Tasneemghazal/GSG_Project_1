import { Box, Paper, Typography } from '@mui/material';
import { Container } from '@mui/system';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
import { box, box2, paper,typography } from './Report.style';

interface HealthData {
  icon: JSX.Element;
  label: string;
  value: string;
}

const healthData: HealthData[] = [
  { icon: <span>❤️</span>, label: 'Heart Rate', value: '140' },
  { icon: <span>🩸</span>, label: 'Blood Pressure', value: '100/70' },
  { icon: <span>🌡️</span>, label: 'Temperature', value: '37.5 ' },
];

export default function Report() {
  const data = [
    { metric: 'Heart Rate', value: parseInt(healthData[0].value) },
    { metric: 'Blood Pressure', value: parseInt(healthData[1].value.split('/')[0]) }, 
    { metric: 'Temperature', value: parseFloat(healthData[2].value) },
  ];

  return (
    <Container maxWidth="sm"> 
      <Paper sx={paper()}>
        <Box>
          <Box sx={box()}>
            <Typography variant="h5" sx={typography()}>
              Health Report
            </Typography>
          </Box>
          <BarChart
            width={420}
            height={160}
            data={data}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="metric" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="value" fill="#3572EF" /> 
          </BarChart>
          <Box sx={{ marginTop: 2 }}>
            {healthData.map((item, index) => (
              <Box key={index} sx={box2()}>
                <Box sx={{ marginRight: 1 }}>{item.icon}</Box>
                <Typography variant="body1">{item.label}: {item.value}</Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Paper>
    </Container>
  );
}