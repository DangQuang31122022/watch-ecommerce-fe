import { useRoutes, Navigate } from "react-router-dom";
import Login from "../views/Login";
import Home from "../views/Home";
import Account from "../views/account/Account";
import AccountEdit from "../views/account/AccountEdit";
import Checkout from "../views/Checkout";
import Dashboard from "../views/DashBoard";

export default function Routes() {
  return useRoutes([
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/account",
      element: <Account />,
    },
    {
      path: "*",
      element: <Navigate to="/" />,
    },
    {
      path: "/accountEdit",
      // element: <Navigate to="/account" />,
      element: <AccountEdit />,
    },
    {
      path: "/checkout",
      element: <Checkout />,
    },
    {
      path: "/admin",
      element: <Dashboard />,
    },
  ]);
}
