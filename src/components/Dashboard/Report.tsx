import { Box, Paper, Typography } from '@mui/material';
import { Container } from '@mui/system';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

interface HealthData {
  icon: JSX.Element;
  label: string;
  value: string;
}

// Hardcoded health data
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
      <Paper sx={{ padding: 2, borderRadius: 2, boxShadow: 2, border: `1px solid #E0E0E0`, width: '100%' }}>
        <Box>
          <Box sx={{ borderBottom: '2px solid #050C9C', pb: 1, width: '100%' }}>
            <Typography variant="h5" sx={{ marginBottom: 2, color: '#050C9C' }}>
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
            <Bar dataKey="value" fill="#3572EF" /> {/* Set the bar color here */}
          </BarChart>
          <Box sx={{ marginTop: 2 }}>
            {healthData.map((item, index) => (
              <Box key={index} sx={{ display: 'flex', alignItems: 'center', marginBottom: 1 }}>
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