import { Appointment } from '../types/@types';

export interface AppointmentState {
  appointment: Appointment;
  appointments: Appointment[];
}

type AppointmentAction =
  | { type: 'ADD_APPOINTMENT'; payload: Appointment }
  | { type: 'CLEAR_APPOINTMENTS' }|{type: 'SET_APPOINTMENT'; payload: Appointment};

  
  const appointmentReducer = (state: AppointmentState, action: AppointmentAction): AppointmentState => {
    switch (action.type) {
      case 'SET_APPOINTMENT':
      return {
        ...state,
        appointment: action.payload,
      };
      case 'ADD_APPOINTMENT':
        return {
          ...state,
          appointments: [...state.appointments, action.payload], 
        };
        case 'CLEAR_APPOINTMENTS':
          return {
            ...state,
            appointments: [],
          };      
        default:
        return state;
    }
  };
  
  export default appointmentReducer;