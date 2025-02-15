import { Appointment, Status, User, UserType } from "../types/@types";

export interface AppointmentState {
  appointment: Appointment;
  appointments: Appointment[];
  myAppointments: Appointment[];
  pending:number;
  confirmed:number;
  totalAppointmentsToday:number;
  appointmentsPerDay: Record<string, number>;
  filteredAppointments: Appointment[];
}

type Action =
  | { type: "ADD_APPOINTMENT"; payload: Appointment }
  | { type: "CLEAR_APPOINTMENTS" }
  | { type: "SET_APPOINTMENT"; payload: Appointment }
  | { type: "GET_APPOINTMENTS"; payload: { appointments: Appointment[]; user: User } }
  | { type: "ADD_NOTE"; payload: { note: string; id: string } }
  | { type: "FILTER"; payload: { status: Status } }
  | { type: "UPDATE_STATUS"; payload: { id: string; newStatus: Status } }
  | { type: "COUNT_STATISTIC_DATA"; payload: Appointment[] }
  | { type: "APPOINTMENTS_PER_DAY"; payload: Appointment[] };

const appointmentReducer = (
  state: AppointmentState,
  action: Action
): AppointmentState => {
  switch (action.type) {
    case "SET_APPOINTMENT":
      return {
        ...state,
        appointment: action.payload,
      };
    case "ADD_APPOINTMENT":
      return {
        ...state,
        appointments: [...state.appointments, action.payload],
      };
    case "CLEAR_APPOINTMENTS":
      return {
        ...state,
        appointments: [],
      };
    case "GET_APPOINTMENTS": {
      const { user, appointments } = action.payload;
      const filteredAppointments =
        user.userType === UserType.Doctor
          ? appointments.filter((appoint) => appoint.doctorId === user.id)
          : appointments.filter((appoint) => appoint.patientId === user.id);

      const sortedAppointments = filteredAppointments.sort(
        (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
      );
      return {
        ...state,
        myAppointments: sortedAppointments,
        filteredAppointments: sortedAppointments,
      };
    }
    case 'COUNT_STATISTIC_DATA':{
      const today = new Date().toISOString().split('T')[0];
        return {
          ...state,
          pending: action.payload.filter((appoint) =>appoint.status===Status.Pending).length,
          confirmed: action.payload.filter((appoint)=>appoint.status === Status.Confirmed).length,
          totalAppointmentsToday: action.payload.filter((appoint)=>appoint.date===today).length,
        }
    }
    case 'APPOINTMENTS_PER_DAY':{
      const appointmentsByDate: Record<string, number> = {};
      
        action.payload.forEach((appointment) => {
          appointmentsByDate[appointment.date] = (appointmentsByDate[appointment.date] || 0) + 1;
        });
      
        return {
          ...state,
          appointmentsPerDay: appointmentsByDate,
        };
    }
    case 'FILTER': {
      const { status } = action.payload;
      return {
        ...state,
        filteredAppointments:
          status === Status.All ? state.myAppointments : state.myAppointments.filter((appoint) => appoint.status === status),
      };
    }
    
    case "ADD_NOTE":  {
      const {  note, id } =  action.payload;
      return {
        ...state,
        appointments: state.appointments.map(appoint => appoint.id === id ? { ...appoint, note } : appoint)
      }
    }
    case "UPDATE_STATUS":{
      const { id, newStatus } = action.payload;
      const updatedAllAppointments =state.appointments.map((appoint) =>
        appoint.id === id ? { ...appoint, status: newStatus } : appoint
      )
      const updatedMyAppointments =state.myAppointments.map((appoint) =>
        appoint.id === id ? { ...appoint, status: newStatus } : appoint
      )
      return {
        ...state,
        appointments: updatedAllAppointments,
        myAppointments: updatedMyAppointments,
        filteredAppointments: updatedMyAppointments
      }}
    default:
      return state;
  }
};

export default appointmentReducer;
