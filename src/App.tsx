import {
  createBrowserRouter,
  RouteObject,
  RouterProvider,
} from "react-router-dom";
import Login from "./screens/LoginScreen/Login.screen";
import Register from "./screens/RegisterScreen/index";
import Home from "./screens/Home.screen";
import Doctor from "./screens/doctor-screen/Doctor.screen";
import Patient from "./screens/patient-screen/Patient.screen";
import AppointmentsScreen from "./screens/doctor-screen/Appointments.screen";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Booking from "./screens/book-appointment/Booking.screen";
import DoctorDashboard from "./screens/doctor-dashboard/DoctorDashboard";
import Dashboard from "./screens/patient-dashboard/Dashboard";
import { AppointmentProvider } from "./providers/AppointmentProvider";
import ProtectedRoute from "./Components/protected-route/ProtectedRoute";
import { UserType } from "./types/@types";
const theme = createTheme();

const App = () => {
  const routes: RouteObject[] = [
    { path: "/", element: <Home /> },
    { path: "/login", element: <Login /> },
    { path: "/Register", element: <Register /> },
    {
      path: "/doctor",
      element: 
      <ProtectedRoute userType={UserType.Doctor}>
        <Doctor />
      </ProtectedRoute>,
      children: [
        {index: true, element: <DoctorDashboard /> },
        { path: "dashboard", element: <DoctorDashboard /> },
        { path: "appointments", element: <AppointmentsScreen /> },
      ],
    },
    { 
      path: "/patient", 
      element: 
      <ProtectedRoute userType={UserType.Patient}>
        <Patient />
      </ProtectedRoute>,
      children: [
      {index:true, element: <Dashboard/> },
      {path: "dashboard", element: <Dashboard/>},
      {path:"booking", element:<Booking/>},
      {path: "appointments", element: <AppointmentsScreen/>}
      ] 
    }
  ];
  
  const browserRouter = createBrowserRouter(routes);
  
  return (
    <AppointmentProvider>
      <ThemeProvider theme={theme}>
        <RouterProvider router={browserRouter} />
      </ThemeProvider>
    </AppointmentProvider>
  )
};

export default App;