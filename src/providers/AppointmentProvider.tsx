import React, {
  createContext,
  useReducer,
  ReactNode,
  useEffect,
  useContext,
} from "react";
import { Appointment, Status } from "../types/@types";
import appointmentReducer, {
  AppointmentState,
} from "../state/appointmentReducer";
import useLocalStorage from "../hooks/local-storage";
import { appointmentInitialData } from "../constants/formInitialValues";
import { AuthContext } from "./AuthProvider";

interface AppointmentContextProps {
  state: AppointmentState;
  addAppointment: (appointment: Appointment) => void;
  setAppointment: (appointment: Appointment) => void;
  getMyAppointments: () => void;
  countStatisticData: () => void;
  addNote: (note: string, id: string) => void;
  getAppointmentsPerDay: () => void;
  handleStatusChange: (id: string, newStatus: Status) => void;
  filterAppointments: (status: Status) => void;
  searchByPatientName: (patientName: string) => void;
}

export const AppointmentContext = createContext<
  AppointmentContextProps | undefined
>(undefined);

export const AppointmentProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [storedAppointments, setStoredAppointments] = useLocalStorage(
    "appointments",
    []
  );
  const { user } = useContext(AuthContext);
  const [state, dispatch] = useReducer(appointmentReducer, {
    appointments: storedAppointments,
    appointment: appointmentInitialData,
    myAppointments: storedAppointments,
    pending: 0,
    confirmed: 0,
    totalAppointmentsToday: 0,
    appointmentsPerDay: {},
    filteredAppointments:storedAppointments
  });

  const addAppointment = (newAppointment: Appointment) => {
    dispatch({ type: "ADD_APPOINTMENT", payload: newAppointment });
  };
  const setAppointment = (newAppointment: Appointment) => {
    dispatch({ type: "SET_APPOINTMENT", payload: newAppointment });
  };
  const getMyAppointments = () => {
    dispatch({
      type: "GET_APPOINTMENTS",
      payload: { appointments: storedAppointments, user },
    });
  };
  const countStatisticData = () => {
    dispatch({ type: "COUNT_STATISTIC_DATA", payload: storedAppointments });
  };
  const getAppointmentsPerDay = () => {
    dispatch({ type: "APPOINTMENTS_PER_DAY", payload: storedAppointments });
  };
  const addNote = (note: string, id: string) => {
    dispatch({ type: "ADD_NOTE", payload: { note, id } });
  };
  const handleStatusChange = (id: string, newStatus: Status) => {
    dispatch({ type: "UPDATE_STATUS", payload: { id, newStatus } });
  };
  const filterAppointments = (status: Status) => {
    dispatch({ type: "FILTER", payload: { status } });
  };
  const searchByPatientName = (searchValue: string) => {
    dispatch({ type: "SEARCH", payload: searchValue });
  };

  useEffect(() => {
    setStoredAppointments(state.appointments);
  }, [state.appointments, setStoredAppointments]);

  return (
    <AppointmentContext.Provider
      value={{
        state,
        addAppointment,
        setAppointment,
        getMyAppointments,
        addNote,
        countStatisticData,
        getAppointmentsPerDay,
        handleStatusChange,
        filterAppointments,
        searchByPatientName
      }}
    >
      {children}
    </AppointmentContext.Provider>
  );
};
