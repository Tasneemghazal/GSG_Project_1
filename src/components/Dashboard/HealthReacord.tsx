import React, { ReactElement } from 'react';
import { Box, Typography, Paper, Container } from '@mui/material';

// Define the type for each health record item
interface HealthRecord {
  icon: ReactElement;
  label: string;
  value: string;
}

// Define the props for the HealthRecordComponent
interface HealthRecordComponentProps {
  healthData: HealthRecord[];
}

const HealthRecordComponent: React.FC<HealthRecordComponentProps> = ({ healthData }) => {
  return (
    <Container maxWidth="sm" > 
      <Paper sx={{ padding: 2, borderRadius: 2, boxShadow: 2, border: `1px solid #E0E0E0`, width: '100%', display: 'flex', flexDirection: 'column',marginBottom:'10px' }}>
        <Box sx={{ borderBottom: '2px solid #050C9C', pb: 1, width: '100%' }}>
          <Typography variant="h5" sx={{ color: '#050C9C' }}>Health Records</Typography>
        </Box>
        
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, width: '100%' }}>
          {healthData.map((item, index) => (
            <Typography key={index} variant="h6" sx={{ color: '#5A5A5A', display: 'flex', alignItems: 'center' }}>
              {React.cloneElement(item.icon, { style: { marginRight: 8, color: '#3ABEF9' } })}
              {item.label}: {item.value}
            </Typography>
          ))}
        </Box>
      </Paper>
    </Container>
  );
};

export default HealthRecordComponent;