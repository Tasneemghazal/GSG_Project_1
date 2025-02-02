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