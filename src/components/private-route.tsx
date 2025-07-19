import { Navigate, Outlet } from "react-router-dom";

interface PrivateRouteProps {
  redirectTo?: string;
}

const PrivateRoute = ({ redirectTo = "/login" }: PrivateRouteProps) => {
  const isLoggedIn = !!localStorage.getItem("token");

  return isLoggedIn ? <Outlet /> : <Navigate to={redirectTo} />;
};

export default PrivateRoute;
