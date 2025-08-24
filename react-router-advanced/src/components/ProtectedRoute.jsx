import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

function ProtectedRoute({ children }) {
  const user = useAuth();

  if (!user?.loggedIn) {
    return <Navigate to="/" replace />;
  }

  return children;
}

export default ProtectedRoute;
