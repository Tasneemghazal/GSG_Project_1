import { Paper, Typography } from "@mui/material";
import { Box, Container, Grid } from "@mui/system";

const UppCommingAppointments = () => {
  return (
    <Container >
        <Grid container spacing={2}>
            <Grid >
              <Paper sx={{ padding: 2, borderRadius: 2, boxShadow: 2, border: `1px solid #E0E0E0` }}>
                <Box sx={{ borderBottom: '2px solid #050C9C', pb: 1, width: '100%' }}>
                    <Typography variant="h5" sx={{ color: '#050C9C' }}>Upcoming Appointments</Typography>
                </Box>
                {/* converted it depend on appointments date */}
                <Typography variant="h6" sx={{ color: '#5A5A5A' }}>
                  Dr. Edalin - 21 Mar 2024, 10:30 AM
                </Typography>
                <Typography variant="h6" sx={{ color: '#5A5A5A' }}>
                  Dr. Juliet Gabriel - 22 Mar 2024, 10:30 AM
                </Typography>
              </Paper>
            </Grid>
        </Grid>
    </Container>

  );
}

export default UppCommingAppointments;