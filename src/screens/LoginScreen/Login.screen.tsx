import { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    Password: "",
    // userType: "",
  });

  const [error, setError] = useState({
    email: "",
    password: "",
  });

  const [userExists, setUserExists] = useState(false);

  const validateForm = () => {
    let newError = { email: "", password: "" };

    if (!formData.email.includes("@")) {
      newError.email = "Invalid email address.";
    }

    if (formData.Password.length < 6) {
      newError.password = "Password must be at least 6 characters.";
    }

    setError(newError);

    return newError.email === "" && newError.password === "";
  };

  const handelSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const isValidate = validateForm();
    if (!isValidate) return;

    const existingUser = localStorage.getItem(formData.email);
    console.log(existingUser, "existingUser");

    if (existingUser) {
      const userData = JSON.parse(existingUser);

      if (userData.Password === formData.Password) {
        if (userData.userType === "doctor") {
          navigate("/Doctor");
        } else {
          navigate("/Patient");
        }
      } else {
        setError((prev) => ({ ...prev, password: "Incorrect password" }));
      }
    } else {
      setError((prev) => ({ ...prev, email: "User not found" }));
      // navigate("/register");
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
    <div className="login-container">
      <div className="login-box">
        <h2>Log In </h2>
        <form onSubmit={handelSubmit}>
          <div className="input-group">
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handelChange}
            />
            {/* {error.email && <p className="error-message">{error.email}</p>} */}
          </div>

          <div className="input-group">
            <label>Password:</label>
            <input
              type="Password"
              name="Password"
              value={formData.Password}
              onChange={handelChange}
            />
            {error.password && (
              <p className="error-message">{error.password}</p>
            )}
            {error.email && (
              <p className="error-message">
                {error.email}{" "}
                <a href="/register" className="register-link">
                  Register here
                </a>
              </p>
            )}
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
