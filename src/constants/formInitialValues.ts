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
  id: 0,
  patientId: "",
  patientName: "",
  doctorId: 0,
  doctorName: "",
  gender: "",
  date: "",
  time: "",
  age: 0,
  contact: "",
  symptoms: "",
  status: Status.Pending,
};

// will be deleted
export const doctors = [
  { id: 1, name: "Dr. Calvin Carlo" },
  { id: 2, name: "Dr. Cristino Murphy" },
  { id: 3, name: "Dr. Alia Reddy" },
  { id: 4, name: "Dr. Toni Kovar" },
  { id: 5, name: "Dr. Jessica McFarlane" },
  { id: 6, name: "Dr. Bertha Magers" },
  { id: 7, name: "Dr. Elsie Sherman" },
];
