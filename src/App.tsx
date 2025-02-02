import {
  createBrowserRouter,
  RouteObject,
  RouterProvider,
} from "react-router-dom";
import Login from "./screens/Login.screen";
import Home from "./screens/Home.screen";
import Doctor from "./screens/doctor-screen/Doctor.screen";
import Patient from "./screens/Patient.screen";
import Appointments from "./components/appointments/Appointments";
import DoctorDashboard from "./components/doctor-dashboard/DoctorDashboard";

const App = () => {
  const routes: RouteObject[] = [
    { path: "/", element: <Home /> },
    { path: "/login", element: <Login /> },
    {
      path: "/doctor",
      element: <Doctor />,
      children: [
        { path: "dashboard", index: true, element: <DoctorDashboard /> },
        { path: "appointments", element: <Appointments /> },
      ],
    },
    { path: "/patient", element: <Patient /> },
  ];
  const browserRouter = createBrowserRouter(routes);
  return <RouterProvider router={browserRouter} />;
};

export default App;
