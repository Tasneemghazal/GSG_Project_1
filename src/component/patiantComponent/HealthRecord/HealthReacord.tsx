import React, { ReactElement } from 'react';
import { Box, Typography, Paper } from '@mui/material';
import { box1, box2, paper, typography } from './HealthRecord.style';

interface HealthRecord {
  icon: ReactElement;
  label: string;
  value: string;
}

interface HealthRecordComponentProps {
  healthData: HealthRecord[];
}

const HealthRecordComponent: React.FC<HealthRecordComponentProps> = ({ healthData }) => {
  return (
      <Paper sx={paper}>
        <Box sx={box1}>
          <Typography variant="h5" sx={{ color: '#050C9C' }}>Health Records</Typography>
        </Box>
        
        <Box sx={box2}>
          {healthData.map((item, index) => (
            <Typography key={index} variant="h6" sx={typography()}>
              {React.cloneElement(item.icon, { style: { marginRight: 8, color: '#3ABEF9' } })}
              {item.label}: {item.value}
            </Typography>
          ))}
        </Box>
      </Paper>
  );
};

export default HealthRecordComponent;