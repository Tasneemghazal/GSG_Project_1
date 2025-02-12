import { useContext } from "react";
import { AppointmentContext } from "../providers/AppointmentProvider";

const useAppointmentContext = () => {
    const context = useContext(AppointmentContext);
    if (!context) {
      throw new Error('useAppointmentContext must be used within an AppointmentProvider');
    }
    return context;
};
export default useAppointmentContext;