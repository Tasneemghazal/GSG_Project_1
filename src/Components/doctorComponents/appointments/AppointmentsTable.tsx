import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Stack } from '@mui/material';
import { Appointment, Status } from '../../../types/@types';
import { button, table, tableContainer } from './appointmentsTable.style';

interface IProps {
  updatedAppointments: any;
  showSymptom: (symptom: string) => void;
  openNoteModal: () => void;
  handleStatusChange: (id: number, newStatus: Status) => void;
}

const AppointmentsTable: React.FC<IProps> = ({ updatedAppointments, showSymptom, openNoteModal, handleStatusChange }) => {
  return (
    <TableContainer component={Paper} sx={tableContainer}>
      <Table sx={table}>
        <TableHead>
          <TableRow>
            <TableCell>Patient Name</TableCell>
            <TableCell align="right">Age</TableCell>
            <TableCell align="right">Gender</TableCell>
            <TableCell align="right">Contact</TableCell>
            <TableCell align="right">Symptoms</TableCell>
            <TableCell align="center">Action</TableCell>
            <TableCell align="center">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {updatedAppointments?.length > 0 ? (
            updatedAppointments.map((appointment) => (
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
                <TableCell align="right">
                  <Button variant="outlined" sx={button} onClick={openNoteModal}>
                    Add note
                  </Button>
                </TableCell>
                <TableCell align="center">
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
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={7} align="center">
                No updatedAppointments available
              </TableCell>
            </TableRow>
          )
          }
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default AppointmentsTable;