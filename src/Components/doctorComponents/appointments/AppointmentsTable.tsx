import React, { useEffect } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Stack } from '@mui/material';
import { Appointment, Status, UserType } from '../../../types/@types';
import { button, table, tableContainer } from './appointmentsTable.style';

interface IProps {
  appointments: Appointment[];
  userType: UserType;
  showSymptom: (symptom: string) => void;
  openNoteModal: (id:string) => void;
  handleStatusChange: (id: string, newStatus: Status) => void;
}

const AppointmentsTable: React.FC<IProps> = ({ appointments, userType, showSymptom, openNoteModal, handleStatusChange }) => {

  return (
    <TableContainer component={Paper} sx={tableContainer}>
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
          {appointments.length > 0 ? (
            appointments.map((appointment) => (
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
                          onClick={() =>  handleStatusChange(appointment.id, status)}
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
