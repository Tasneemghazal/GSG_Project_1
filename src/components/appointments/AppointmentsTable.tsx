import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Avatar,
} from "@mui/material";
import "./appointments.css";

interface Appointment {
  patientName: string;
  patientImg: string;
  age: number;
  doctor: string;
  doctorImg: string;
  email: string;
  phone?: string;
  date: string;
  time: string;
  fees?: string;
}
interface AppointmentsTableProps {
  appointments: Appointment[];
}
const AppointmentsTable: React.FC<AppointmentsTableProps> = ({
  appointments,
}) => {
  return (
    <TableContainer
      component={Paper}
      sx={{ maxWidth: "max-content", margin: "auto" }}
    >
      <Table className="MuiTable-root">
        <TableHead>
          <TableRow>
            <TableCell>#</TableCell>
            <TableCell>Patient</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Age</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Time</TableCell>
            <TableCell>Doctor</TableCell>
            <TableCell>Fees</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {appointments.map((row, index) => (
            <TableRow key={index}>
              <TableCell>{index + 1}</TableCell>
              <TableCell>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    cursor: "pointer",
                  }}
                >
                  <Avatar src={row.patientImg} alt={row.patientName} />
                  {row.patientName}
                </div>
              </TableCell>
              <TableCell sx={{ typography: "subtitle2" }}>
                {row.email}
              </TableCell>
              <TableCell>{row.age}</TableCell>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.time}</TableCell>
              <TableCell>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    cursor: "pointer",
                  }}
                >
                  <Avatar src={row.doctorImg} alt={row.doctor} />
                  {row.doctor}
                </div>
              </TableCell>
              <TableCell>{row.fees}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default AppointmentsTable;
