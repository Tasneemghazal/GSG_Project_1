export enum Status {
    Pending="Pending",
    Confirmed="Confirmed",
    Completed="Completed"
}
export interface Appointment {
    id: number;
    name: string;
    age: number;
    gender: string;
    contact: string;
    symptoms: string;
    status: Status;
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
    name: "John Doe",
    age: 29,
    gender: "Male",
    contact: "123-456-7890",
    symptoms: "Fever, Cough",
    status: Status.Pending,
  },
  {
    id: 2,
    name: "Jane Smith",
    age: 34,
    gender: "Female",
    contact: "987-654-3210",
    symptoms: "Headache",
    status: Status.Confirmed,
  },
  {
    id: 3,
    name: "Michael Brown",
    age: 42,
    gender: "Male",
    contact: "555-789-1234",
    symptoms: "Fatigue",
    status: Status.Completed,
  },
];
