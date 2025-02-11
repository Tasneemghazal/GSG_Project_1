import React, { createContext, useReducer, ReactNode, useContext, useEffect } from 'react';
import { Appointment } from '../types/@types';
import appointmentReducer from '../state/BookingReduser';

interface AppointmentState {
  appointments: Appointment[];
}

interface AppointmentContextProps {
  state: AppointmentState;
  addAppointment: (appointment: Appointment) => void;
}

const AppointmentContext = createContext<AppointmentContextProps | undefined>(undefined);

const AppointmentProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(appointmentReducer, { appointments: [] });

  const addAppointment = (appointment:Appointment) => {
    console.log('Adding appointment:', appointment);
    dispatch({ type: 'ADD_APPOINTMENT', payload: appointment });
  };

  useEffect(() => {
    console.log('Updated appointments:', state.appointments);
  }, [state.appointments]);

  return (
    <AppointmentContext.Provider value={{ state, addAppointment }}>
      {children}
    </AppointmentContext.Provider>
  );
};

const useAppointmentContext = () => {
  const context = useContext(AppointmentContext);
  if (!context) {
    throw new Error('useAppointmentContext must be used within an AppointmentProvider');
  }
  return context;
};

export { AppointmentProvider, useAppointmentContext };