import { Appointment, User, UserType } from "../types/@types";

export interface AppointmentState {
  appointment: Appointment;
  appointments: Appointment[];
  myAppointments: Appointment[];
}

type AppointmentAction =
  | { type: "ADD_APPOINTMENT"; payload: Appointment }
  | { type: "CLEAR_APPOINTMENTS" }
  | { type: "SET_APPOINTMENT"; payload: Appointment }
  | {
      type: "GET_APPOINTMENTS";
      payload: { appointments: Appointment[]; user: User };
    }|{type: "ADD_NOTE",payload:{note:string, id:string}};

const appointmentReducer = (
  state: AppointmentState,
  action: AppointmentAction
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
        (a, b) =>
          new Date(a.date).getTime() -
          new Date(b.date).getTime()
      );

      return {
        ...state,
        myAppointments: sortedAppointments,
      };
    }
    case "ADD_NOTE":{
      const {note, id } =action.payload;
      return {
        ...state,
        appointments: state.appointments.map(appoint =>appoint.id===id?{...appoint,note}:appoint)
      }}
    default:
      return state;
  }
};

export default appointmentReducer;
