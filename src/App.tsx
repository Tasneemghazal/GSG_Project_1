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
import { Dashboard } from "@mui/icons-material";

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
      {index:true, element: <Dashboard/> },
      {path: "dashboard", element: <Dashboard/>},
      {path:"booking", element:<Booking/>},
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

