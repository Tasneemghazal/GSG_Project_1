import { LoggedUser, User } from "../types/@types";

export interface LoginFormErrors {
  email?: string;
  password?: string;
}

export interface RegisterFormErrors extends LoginFormErrors {
    phone?: string;
    name?: string;
}



export const validateLoginForm = (data: LoggedUser): LoginFormErrors => {
  const errors: LoginFormErrors = {};

  if (!data.email.includes("@")) {
    errors.email = "Invalid email address.";
  }

  if (data.password.length < 6) {
    errors.password = "Password must be at least 6 characters.";
  }

  return errors;
};

export const validateRegisterForm = (data:User) => {
    const errors: RegisterFormErrors = {};
    
    if (data.name.length < 4) {
      errors.password = "Name must be at least 4 characters.";
    }

    if (!data.email.includes("@")) {
      errors.email = "Invalid email address.";
    }

    if (data.password.length < 6) {
      errors.password = "Password must be at least 6 characters.";
    }

    if (!/^\d{10}$/.test(data.phone)) {
      errors.phone = "Phone number must be 10 digits.";
    }

    return errors;
  };
