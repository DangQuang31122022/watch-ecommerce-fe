import { useRoutes, Navigate } from "react-router-dom";
import Login from "../views/Login";
import Home from "../views/Home";
import Account from "../views/account/Account";
import AccountEdit from "../views/account/AccountEdit";

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
  ]);
}
