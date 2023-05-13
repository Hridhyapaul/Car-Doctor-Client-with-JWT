import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Details from "../Layouts/Details";
import ServiceDetailsArea from "../Pages/ServiceDetailsArea/ServiceDetailsArea";
import Checkout from "../Pages/Checkout/Checkout";
import Bookings from "../Pages/Bookings/Bookings";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/signUp",
        element: <SignUp></SignUp>
      },
      {
        path: "/checkout/:id",
        element: <PrivateRoute><Checkout></Checkout></PrivateRoute>,
        loader: ({ params }) => fetch(`http://localhost:4000/services/${params.id}`)
      },
      {
        path: "/bookings",
        element: <PrivateRoute><Bookings></Bookings></PrivateRoute>
      }
    ]
  },
  {
    path: '/serviceDetails',
    element: <Details></Details>,
    children: [
      {
        path: "/serviceDetails/:id",
        element: <ServiceDetailsArea></ServiceDetailsArea>,
        loader: ({ params }) => fetch(`http://localhost:4000/services/${params.id}`)
      }
    ]
  }
]);

export default router;