import { Appointment, Status, User, UserType } from "../types/@types";

export const loginFormInitialValues = {
  email: "",
  password: "",
};

export const loginFormErrorInitialValues = {
  email: "",
  password: "",
};

export const RegisterInitialData: User = {
  id:"",
  name: "",
  email: "",
  password: "",
  phone: "",
  userType: UserType.Patient,
};

export const appointmentInitialData: Appointment = {
  id: "0",
  patientId: "",
  patientName: "",
  doctorId: "0",
  doctorName: "",
  gender: "",
  date: "",
  time: "",
  age: 0,
  contact: "",
  symptoms: "",
  status: Status.Pending,
};
