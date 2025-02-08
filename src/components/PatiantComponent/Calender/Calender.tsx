import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { Box } from '@mui/material';
import { box } from './Calender.style';

export default function Calender() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box sx={box()}>
        <DateCalendar showDaysOutsideCurrentMonth fixedWeekNumber={6} />
      </Box>
    </LocalizationProvider>
  );
}