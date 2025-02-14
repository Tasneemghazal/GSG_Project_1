import React, { useEffect, useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Stack, Box, TextField, MenuItem, SelectChangeEvent, Slider, Typography } from '@mui/material';
import { Appointment, Status, UserType } from '../../../types/@types';
import { button, table, tableContainer } from './appointmentsTable.style';
import { useSearchParams , useLocation   } from 'react-router-dom';

interface IProps {
  appointments: Appointment[];
  userType: UserType;
  showSymptom: (symptom: string) => void;
  openNoteModal?: () => void;
  handleStatusChange: (id: string, newStatus: Status) => void;
}

const AppointmentsTable: React.FC<IProps> = ({ appointments, userType, showSymptom, openNoteModal, handleStatusChange }) => {
  const [paramse, setParamse] = useSearchParams();
  const [fillterlist, setFillterlist] = useState<Appointment[]>(appointments);
  const [ageRange, setAgeRange] = useState<number[]>([0, 50]);
  const [filterdata, setFilterdata] = useState(false);
  const location = useLocation()
  console.log(location.pathname);
  // if (location.pathname.includes("patient") ){
  //   setFilterdata(false);
  // }
  // doctor
  useEffect(() => {
    const genderFilter = paramse.get('gender');
    const statusFilter = paramse.get('status');
    const minValueFilter = paramse.get('minValue');
    const maxValueFilter = paramse.get('maxValue');
    let filteredAppointments = appointments;

    if (genderFilter && genderFilter !== 'all') {
      filteredAppointments = filteredAppointments.filter(item => item.gender === genderFilter);
    }

    if (statusFilter && statusFilter !== 'all') {
      filteredAppointments = filteredAppointments.filter(item => item.status === statusFilter);
    }

    if (minValueFilter !== null && maxValueFilter !== null) {
      const min = parseInt(minValueFilter);
      const max = parseInt(maxValueFilter);
      filteredAppointments = filteredAppointments.filter(item => item.age >= min && item.age <= max);
    }

    setFillterlist(filteredAppointments);
  }, [paramse, appointments]);

  const handleGender = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const newParams = new URLSearchParams(paramse);
    if (value === 'all') {
      newParams.delete('gender');
    } else {
      newParams.set('gender', value);
    }
    setParamse(newParams);
  };

  const handleStatus = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const newParams = new URLSearchParams(paramse);
    if (value === 'all') {
      newParams.delete('status');
    } else {
      newParams.set('status', value);
    }
    setParamse(newParams);
  };

  const handleAgeRangeChange = (newValue: number | number[]) => {
    const [min, max] = newValue as number[];
    setAgeRange([min, max]);
    const newParams = new URLSearchParams(paramse);
    newParams.set('minValue', min.toString());
    newParams.set('maxValue', max.toString());
    setParamse(newParams);
  };

  return (
    <>
  {  location.pathname.includes("doctor")&& 
     <Box sx={{display:"flex", width:"100%",  marginTop: '8px',  marginBottom: '8px', marginLeft: '8px',  marginRight: '8px', color:"blue" }}>
     <span
        color="primary"
        onClick={() => {
          setFilterdata(!filterdata);
          setFillterlist(appointments);
        }}
      >
        Filter
      </span>
     </Box>}
      {filterdata && (
        <Box component="div" sx={{ display: 'flex', flexDirection: 'column', gap: 2, padding: 2, backgroundColor: '#f5f5f5', borderRadius: '8px' }}>
          <Box sx={{ display: 'flex' }}>
            <TextField
              select
              id="gender"
              label="Gender"
              value={paramse.get("gender") || "all"}
              onChange={handleGender}
              variant="outlined"
              fullWidth
            >
              <MenuItem value="all">All</MenuItem>
              <MenuItem value="Male">Male</MenuItem>
              <MenuItem value="Female">Female</MenuItem>
            </TextField>
            <TextField
              select
              id="status"
              label="Status"
              value={paramse.get("status") || "all"}
              onChange={handleStatus}
              variant="outlined"
              fullWidth
            >
              <MenuItem value="all">All</MenuItem>
              {Object.values(Status).map((status) => (
                <MenuItem key={status} value={status}>{status}</MenuItem>
              ))}
            </TextField>

          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography variant="body1">{`Age Range: ${ageRange[0]} - ${ageRange[1]}`}</Typography>
            <Slider
              value={ageRange}
              onChange={handleAgeRangeChange}
              valueLabelDisplay="auto"
              min={0}
              max={100}
              step={1}
              sx={{ flex: 1 }}
            />
          </Box>
        </Box>)}
      <TableContainer component={Paper} sx={tableContainer}>
        <Table sx={table}>
          <TableHead>
            <TableRow>
              <TableCell>Patient Name</TableCell>
              <TableCell align="right">Age</TableCell>
              <TableCell align="right">Gender</TableCell>
              <TableCell align="right">Contact</TableCell>
              <TableCell align="right">Symptoms</TableCell>
              {userType === UserType.Doctor && <TableCell align="center">Action</TableCell>}
              <TableCell align="center">Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {fillterlist.length > 0 ? (
              fillterlist.map((appointment) => (
                <TableRow key={appointment.id}>
                  <TableCell>{appointment.patientName}</TableCell>
                  <TableCell align="right">{appointment.age}</TableCell>
                  <TableCell align="right">{appointment.gender}</TableCell>
                  <TableCell align="right">{appointment.contact}</TableCell>
                  <TableCell align="right">
                    <Button variant="outlined" sx={button} onClick={() => showSymptom(appointment.symptoms)}>
                      Show
                    </Button>
                  </TableCell>

                  {userType === UserType.Doctor && (
                    <TableCell align="right">
                      <Button variant="outlined" sx={button} onClick={openNoteModal}>
                        Add Note
                      </Button>
                    </TableCell>
                  )}

                  <TableCell align="center">
                    {userType === UserType.Doctor ? (
                      <Stack direction="row" spacing={1} justifyContent="center">
                        {[Status.Pending, Status.Confirmed, Status.Completed].map((status) => (
                          <Button
                            key={status}
                            variant={appointment.status === status ? 'contained' : 'outlined'}
                            color={
                              status === Status.Pending ? 'error' : status === Status.Confirmed ? 'primary' : 'success'
                            }
                            sx={button}
                            onClick={() => handleStatusChange(appointment.id, status)}
                          >
                            {status}
                          </Button>
                        ))}
                      </Stack>
                    ) : (
                      <Button
                        variant="contained"
                        color={
                          appointment.status === Status.Pending ? 'error' :
                            appointment.status === Status.Confirmed ? 'primary' :
                              'success'
                        }
                        sx={button}
                      >
                        {appointment.status}
                      </Button>
                    )}
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={userType === UserType.Doctor ? 7 : 6} align="center">
                  No appointments available
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default AppointmentsTable;
