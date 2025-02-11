import { Appointment } from '../types/@types';

interface AppointmentState {
  appointments: Appointment[];
}

type AppointmentAction =
  | { type: 'ADD_APPOINTMENT'; payload: Appointment }
  | { type: 'CLEAR_APPOINTMENTS' };

  const initialState: AppointmentState = {
    appointments: [],
  };
  
  const appointmentReducer = (state = initialState, action: AppointmentAction): AppointmentState => {
    switch (action.type) {
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