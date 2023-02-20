import { createBrowserRouter } from "react-router-dom";
import Login from "../Components/pages/Authentication/Login";
import Register from "../Components/pages/Authentication/Register";
import AboutUs from "../Components/pages/AboutUs";
import Appointment from "../Components/pages/Appointement/Appointment";
import Contact from "../Components/pages/Contact";
import Home from "../Components/pages/Home";
import Main from "../Layout/Main";
import Reviews from "../Components/pages/Reviews";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <AboutUs></AboutUs>,
      },
      {
        path: "/appointment",
        element: <Appointment></Appointment>,
      },
      {
        path: "/reviews",
        element: <Reviews></Reviews>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        pathP: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);
export default router;
