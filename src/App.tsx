import {
  createBrowserRouter,
  RouteObject,
  RouterProvider,
} from "react-router-dom";
import Login from "./screens/LoginScreen/Login.screen";
import Register from "./screens/RegisterScreen/index";
import Home from "./screens/Home.screen";
import Doctor from "./screens/doctor-screen/Doctor.screen";
import Patient from "./screens/Patient.screen";
import DoctorDashboard from "./Components/doctorComponents/doctor-dashboard/DoctorDashboard";
import AppointmentsScreen from "./screens/doctor-screen/Appointments.screen";
import Dashboard from "./Components/PatiantComponent/Dashboard/Dashboard";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme();

const App = () => {
  const routes: RouteObject[] = [
    { path: "/", element: <Home /> },
    { path: "/login", element: <Login /> },
    { path: "/Register", element: <Register /> },
    {
      path: "/doctor",
      element: <Doctor />,
      children: [
        {index: true, element: <DoctorDashboard /> },
        { path: "dashboard", element: <DoctorDashboard /> },
        { path: "appointments", element: <AppointmentsScreen /> },
      ],
    },
    { 
      path: "/patient", 
      element: <Patient />,
      children: [
        { path: "dashboard", element: <Dashboard/> },
      ] 
    },
  ];
  
  const browserRouter = createBrowserRouter(routes);
  
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={browserRouter} />
    </ThemeProvider>
  );
};

export default App;

