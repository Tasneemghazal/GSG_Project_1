import { Paper, Typography } from "@mui/material";
import { Box, Container, Grid } from "@mui/system";
import { box, paper } from "./UppCommingAppointment.style";

const UppCommingAppointments = () => {
  return (
    <Container >
        <Grid container spacing={2}>
            <Grid >
              <Paper sx={paper()}>
                <Box sx={box()}>
                    <Typography variant="h5" sx={{ color: '#050C9C' }}>Upcoming Appointments</Typography>
                </Box>
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