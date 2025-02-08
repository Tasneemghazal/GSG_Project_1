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
import Appointments from "./screens/doctor-screen/Appointments.screen";

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
        { path: "appointments", element: <Appointments /> },
      ],
    },
    { path: "/patient", element: <Patient /> },
  ];
  const browserRouter = createBrowserRouter(routes);
  return <RouterProvider router={browserRouter} />;
};

export default App;
