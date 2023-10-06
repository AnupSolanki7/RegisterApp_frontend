import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import Login from "../page/login/Login";
import Register from "../page/register/Register";
import Dashboard from "../page/dashboard/Dashboard";
import AdminRegistration from "../page/register/AdminRegistration";

const Routes = () => {
  const { user } = useSelector((state: any) => state.user);

  return [
    {
      path: "/",
      element: user ? <Dashboard /> : <Navigate to={"/login"} />,
    },
    {
      path: "/login",
      element: !user ? <Login /> : <Navigate to={"/"} />,
    },
    {
      path: "/register",
      element: !user ? <Register /> : <Navigate to={"/"} />,
    },
    {
      path: "/admin-register",
      element: !user ? <AdminRegistration /> : <Navigate to={"/"} />,
    },
  ];
};

export default Routes;
