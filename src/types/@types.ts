export enum Status {
  Pending = "Pending",
  Confirmed = "Confirmed",
  Completed = "Completed",
  All = "all",
}
export enum ModalMode {
  SYMPTOM = "SYMPTOM",
  NOTE = "NOTE",
}
export interface Appointment {
  id: string;
  patientId: string;
  patientName: string;
  doctorName: string;
  doctorId: string;
  date: string;
  time: string;
  age: number;
  gender: string;
  contact: string;
  symptoms: string;
  status: Status;
  note?: string;
}
export interface MakeAppointmentForm {
  name: string;
  email: string;
  phone: string;
  Subject: string;
  message: string;
}

export enum UserType {
  Patient = "patient",
  Doctor = "doctor",
}

export interface LoggedUser {
  email: string;
  password: string;
}

export interface User extends LoggedUser {
  id: string;
  name: string;
  phone: string;
  userType: UserType;
}
