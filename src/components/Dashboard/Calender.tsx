import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { Box } from '@mui/material';

export default function Calender() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box sx={{ width: '500px', height: '300px', overflow: 'hidden' }}> {/* Adjust width and height as needed */}
        <DateCalendar showDaysOutsideCurrentMonth fixedWeekNumber={6} />
      </Box>
    </LocalizationProvider>
  );
}