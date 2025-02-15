import React, { useEffect } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Stack, Select, MenuItem, SelectChangeEvent } from '@mui/material';
import { Appointment, Status, UserType } from '../../../types/@types';
import { button, table, tableContainer } from './appointmentsTable.style';
import { useSearchParams } from 'react-router-dom';
interface IProps {
  filteredAppointments: Appointment[];
  userType: UserType;
  showSymptom: (symptom: string) => void;
  openNoteModal: (id:string) => void;
  handleStatusChange: (id: string, newStatus: Status) => void;
  filterAppointments: (status: Status) => void

}

const AppointmentsTable: React.FC<IProps> = ({filteredAppointments,userType, showSymptom, openNoteModal, handleStatusChange, filterAppointments }) => {
  const [params, setParams]=useSearchParams();
  useEffect(() => {
    const status = params.get('status') as Status || Status.All;
    filterAppointments(status);
  }, [params]);
  const handleStatusFilter = (e: SelectChangeEvent<Status>) => {
    const selectedStatus = e.target.value as Status;

    if (selectedStatus === Status.All) {
      params.delete('status');
    } else {
      params.set('status', selectedStatus);
    }
    setParams(params);
  };

  return (
    <TableContainer component={Paper} sx={tableContainer}>
        <Stack direction="row" spacing={2} sx={{ p: 2 }}>
        <Select value={(params.get('status') as Status) || Status.All} onChange={handleStatusFilter}>
            <MenuItem value={Status.All}>All</MenuItem>
            <MenuItem value={Status.Pending}>Pending</MenuItem>
            <MenuItem value={Status.Confirmed}>Confirmed</MenuItem>
            <MenuItem value={Status.Completed}>Completed</MenuItem>
          </Select>
        </Stack>
      <Table sx={table}>
        <TableHead>
          <TableRow>
            <TableCell>Patient Name</TableCell>
            <TableCell align="right">Age</TableCell>
            <TableCell align="right">Date</TableCell>
            <TableCell align="right">Time</TableCell>
            <TableCell align="right">Gender</TableCell>
            <TableCell align="right">Contact</TableCell>
            <TableCell align="right">Symptoms</TableCell>
            {userType === UserType.Doctor && <TableCell align="center">Action</TableCell>}
            <TableCell align="center">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {filteredAppointments.length > 0 ? (
            filteredAppointments.map((appointment) => (
              <TableRow key={appointment.id}>
                <TableCell>{appointment.patientName}</TableCell>
                <TableCell align="right">{appointment.age}</TableCell>
                <TableCell align="right">{appointment.date}</TableCell>
                <TableCell align="right">{appointment.time}</TableCell>
                <TableCell align="right">{appointment.gender}</TableCell>
                <TableCell align="right">{appointment.contact}</TableCell>
                <TableCell align="right">
                  <Button variant="outlined" sx={button} onClick={() => showSymptom(appointment.symptoms)}>
                    Show
                  </Button>
                </TableCell>
                
                {userType === UserType.Doctor && (
                  <TableCell align="right">
                    <Button variant="outlined" sx={button} onClick={()=>openNoteModal(appointment.id)}>
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
  );
};

export default AppointmentsTable;
