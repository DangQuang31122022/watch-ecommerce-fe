import { useRoutes, Navigate } from "react-router-dom";
import Login from "../views/Login";
import Home from "../views/Home";

export default function Routes() {
  return useRoutes([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "home",
      element: <Home />,
    },
    {
      path: "*",
      element: <Navigate to="/" />,
    },
  ]);
}
