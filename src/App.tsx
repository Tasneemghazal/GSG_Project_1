import {
  createBrowserRouter,
  RouteObject,
  RouterProvider,
} from "react-router-dom";
import Login from "./screens/Login.screen";
import Home from "./screens/Home.screen";
import Doctor from "./screens/Doctor.screen";
import Patient from "./screens/Patient.screen";
import Admin from "./screens/Admin.screen";
import Appointments from "./components/appointments/appointments.component";

const App = () => {
  const routes: RouteObject[] = [
    { path: "/", element: <Home /> },
    { path: "/login", element: <Login /> },
    { path: "/doctor", element: <Doctor /> },
    { path: "/patient", element: <Patient /> },
    { path: "/admin", element: <Admin /> },
    { path: "/appointments", element: <Appointments /> },

  ];
  const browserRouter = createBrowserRouter(routes);
  return <RouterProvider router={browserRouter} />;
};

export default App;
