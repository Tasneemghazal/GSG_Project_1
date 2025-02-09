import { User, UserType } from "../types/@types";

export const loginFormInitialValues = {
    email: "",
    password: "",
  };
  
  export const loginFormErrorInitialValues = {
    email: "",
    password: "",
  };

  export const RegisterInitialData: User={
    email: "",
    password: "",
    phone: "",
    userType: UserType.Patient,
  }
  