import React, { createContext, useReducer, ReactNode, useEffect } from 'react';
import { Appointment } from '../types/@types';
import appointmentReducer, { AppointmentState } from '../state/appointmentReducer';
import useLocalStorage from '../hooks/local-storage';
import { appointmentInitialData } from '../constants/formInitialValues';

interface AppointmentContextProps {
  state: AppointmentState;
  addAppointment: (appointment: Appointment) => void;
  setAppointment: (appointment: Appointment) => void;
  getAppointmentsForDoctor: () => void;
}

export const AppointmentContext = createContext<AppointmentContextProps | undefined>(undefined);

export const AppointmentProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [storedAppointments, setStoredAppointments]= useLocalStorage("appointments",[]);
  const [user]= useLocalStorage("user","");
  const [state, dispatch] = useReducer(appointmentReducer, { appointments: storedAppointments, appointment: appointmentInitialData, myAppointments:storedAppointments });

  const addAppointment = (newAppointment:Appointment) => {
    dispatch({ type: 'ADD_APPOINTMENT', payload: newAppointment });
  };
  const setAppointment = (newAppointment:Appointment) => {
    dispatch({ type: 'SET_APPOINTMENT', payload: newAppointment });
  };
  const getAppointmentsForDoctor = () => {
    dispatch({ type: 'GET_APPOINTMENTS', payload: {appointments:storedAppointments, user} });
  };

  useEffect(() => {
    setStoredAppointments(state.appointments);
  }, [state.appointments, setStoredAppointments]);

  return (
    <AppointmentContext.Provider value={{ state, addAppointment,setAppointment, getAppointmentsForDoctor }}>
      {children}
    </AppointmentContext.Provider>
  );
};
