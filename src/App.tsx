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
import Dashboard from "./components/Dashboard/Dashboard";
import Booking from "./components/Booking/BookingAppointment";
import { ThemeProvider, createTheme } from "@mui/material/styles"; // Import ThemeProvider
// import Search from "./components/Search/SearchDoctor";

// Register required Chart.js elements ONCE

const theme = createTheme();

const App = () => {
  const routes: RouteObject[] = [
    { path: "/", element: <Home /> },
    { path: "/login", element: <Login /> },
    { path: "/doctor", element: <Doctor /> },
    { 
      path: "/patient", 
      element: <Patient />,
      children: [
        { path: "dashboard", element: <Dashboard/> },
        // { path: "search", element: <Search /> },
        { path: "booking", element: <Booking /> },
      ] 
    },
    { path: "/admin", element: <Admin /> },
  ];
  
  const browserRouter = createBrowserRouter(routes);
  
  return (
    <ThemeProvider theme={theme}> {/* Wrap your app in the ThemeProvider */}
      <RouterProvider router={browserRouter} />
    </ThemeProvider>
  );
};

export default App;