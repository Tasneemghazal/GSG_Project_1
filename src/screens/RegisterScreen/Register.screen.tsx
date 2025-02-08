import { useState } from "react";
import "./Register.css";
import useLocalStorage from "../../hooks/local-storage";
import { useNavigate } from "react-router-dom";

interface Types {
  email?: string;
  Password?: string;
  phone?: string;
}

const Register = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    Password: "",
    phone: "",
    userType: "patient",
  });

  const [error, setError] = useState<Types>({});
  const [storedUser, setStoredUser] = useLocalStorage("user", null);
  const [userExists, setUserExists] = useState(false);

  const validateForm = () => {
    let newError: Types = {};

    if (!formData.email.includes("@")) {
      newError.email = "Invalid email address.";
    }

    if (formData.Password.length < 6) {
      newError.Password = "Password must be at least 6 characters.";
    }

    if (!/^\d{10}$/.test(formData.phone)) {
      newError.phone = "Phone number must be 10 digits.";
    }

    setError(newError);
    return Object.keys(newError).length === 0;
  };

  const handelSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const validateValue = validateForm();
    if (!validateValue) return;

    const existingUser = localStorage.getItem(formData.email);
    if (existingUser) {
      setUserExists(true);
    } else {
      localStorage.setItem(formData.email, JSON.stringify(formData));
      setUserExists(false);

      if (formData.userType === "patient") {
        navigate("/Patient");
      } else {
        navigate("/Doctor");
        // window.location.href = "../Doctor.screen";
      }
    }
  };

  const handelChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setUserExists(false);
  };

  return (
    <div className="register-container">
      <div className="Register-box">
        <h2>Register</h2>
        <form onSubmit={handelSubmit}>
          <div className="input-group">
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handelChange}
            />
            {error && <p className="error-message">{error.email}</p>}
          </div>

          <div className="input-group">
            <label>Password:</label>
            <input
              type="Password"
              name="Password"
              value={formData.Password}
              onChange={handelChange}
            />
            {error && <p className="error-message">{error.Password}</p>}
          </div>

          <div className="input-group">
            <label>Phone Number:</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handelChange}
            />
            {error && <p className="error-message">{error.phone}</p>}
          </div>

          <div className="input-group">
            <label>Are you a doctor or a patient?</label>
            <select
              name="userType"
              value={formData.userType}
              onChange={handelChange}
            >
              <option value="patient">Patient</option>
              <option value="doctor">Doctor</option>
            </select>
          </div>

          <div className="login-link-container">
            {userExists && (
              <span className="error-message">
                This account is already registered.
              </span>
            )}
            <a href="/login"> Already have an account? </a>
          </div>
          <div>
            <button type="submit">Register</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
