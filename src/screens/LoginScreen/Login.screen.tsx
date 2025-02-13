import { useContext, useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { LoginFormErrors, validateLoginForm } from "../../utils/validation";
import { UserType } from "../../types/@types";
import { loginFormErrorInitialValues, loginFormInitialValues } from "../../constants/formInitialValues";

const Login = () => {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const [formData, setFormData] = useState(loginFormInitialValues);

  const [error, setError] = useState<LoginFormErrors>(loginFormErrorInitialValues);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    const validationErrors = validateLoginForm(formData);
    setError(validationErrors);
  
    if (Object.keys(validationErrors).length === 0) {
      const loggedInUser = login(formData);
  
      if (loggedInUser) {
        if (loggedInUser.userType === UserType.Doctor) {
          navigate('/doctor');
        } else {
          navigate('/patient');
        }
      } else {
        setError({ email: "", password: "Invalid email or password" });
      }
    }
  };
  

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };
  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Log In </h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            {/* {error.email && <p className="error-message">{error.email}</p>} */}
          </div>

          <div className="input-group">
            <label>password:</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
            {error.password && (
              <p className="error-message">{error.password}</p>
            )}
            <div className="register-link">
              <Link to="/register">Create Account</Link>
            </div>
          </div>
          <div>
            <button type="submit">Log In</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
