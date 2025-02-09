export enum Status {
    Pending="Pending",
    Confirmed="Confirmed",
    Completed="Completed"
}
export interface Appointment {
    id: number;
    patientId: number;
    patientName: string;
    doctorName: string;
    doctorId: number;
    date: string;
    time: string;
    age: number;
    gender: string;
    contact: string;
    symptoms: string;
    status: Status;
    note?: string;
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
  phone: string;
  userType: UserType
}


// this will be deleted 
// src/data/appointmentsData.ts

export const initialAppointments: Appointment[] = [
  {
    id: 1,
    patientName: "John Doe",
    patientId: 1,
    doctorName: "John Doe",
    doctorId: 1,
    age: 29,
    date:"",
    time:"",
    gender: "Male",
    contact: "123-456-7890",
    symptoms: "Fever, Cough",
    status: Status.Pending,
  },
  {
    id: 2,
    patientName: "John Doe",
    patientId: 1,
    doctorName: "John Doe",
    doctorId: 1,
    age: 29,
    date:"",
    time:"",
    gender: "Male",
    contact: "123-456-7890",
    symptoms: "Fever, Cough",
    status: Status.Pending,
  },
];
