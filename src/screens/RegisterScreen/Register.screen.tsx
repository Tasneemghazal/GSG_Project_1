import { useContext, useState } from "react";
import "./Register.css";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { RegisterFormErrors, validateRegisterForm } from "../../utils/validation";
import { RegisterInitialData } from "../../constants/formInitialValues";

const Register = () => {
  const navigate = useNavigate();
  const{register} = useContext(AuthContext);
  const [formData, setFormData] = useState(RegisterInitialData);
  const [error, setError] = useState<RegisterFormErrors>({});
  const [userExists, setUserExists] = useState(false);


  const handelSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const validationErrors = validateRegisterForm(formData);
    setError(validationErrors);
    if (Object.keys(validationErrors).length !== 0){
      return;
    }
    const exist = register(formData)
    if(exist){
      alert("user already registered")
    }
      else{
        if (formData.userType === "patient") {
          navigate("/Patient");
        } else {
          navigate("/Doctor");
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
              type="password"
              name="password"
              value={formData.password}
              onChange={handelChange}
            />
            {error && <p className="error-message">{error.password}</p>}
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