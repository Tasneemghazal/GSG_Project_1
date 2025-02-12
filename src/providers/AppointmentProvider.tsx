import React, { createContext, useReducer, ReactNode, useEffect } from 'react';
import { Appointment } from '../types/@types';
import appointmentReducer, { AppointmentState } from '../state/appointmentReducer';
import useLocalStorage from '../hooks/local-storage';
import { appointmentInitialData } from '../constants/formInitialValues';

interface AppointmentContextProps {
  state: AppointmentState;
  addAppointment: (appointment: Appointment) => void;
  setAppointment: (appointment: Appointment) => void;
}

export const AppointmentContext = createContext<AppointmentContextProps | undefined>(undefined);

export const AppointmentProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [storedAppointments, setStoredAppointments]= useLocalStorage("appointments",[]);
  const [state, dispatch] = useReducer(appointmentReducer, { appointments: storedAppointments, appointment: appointmentInitialData });

  const addAppointment = (newAppointment:Appointment) => {
    dispatch({ type: 'ADD_APPOINTMENT', payload: newAppointment });
  };
  const setAppointment = (newAppointment:Appointment) => {
    dispatch({ type: 'SET_APPOINTMENT', payload: newAppointment });
  };

  useEffect(() => {
    setStoredAppointments(state.appointments);
  }, [state.appointments, setStoredAppointments]);

  return (
    <AppointmentContext.Provider value={{ state, addAppointment,setAppointment }}>
      {children}
    </AppointmentContext.Provider>
  );
};
