import { Navigate } from "react-router-dom";
import { isAuthenticated, getUserAuthenticated } from "../services/authService"; 

export function ProtectedRoute({ children, justAdmin = false }) {
  if (!isAuthenticated()) {
    return <Navigate to="/login" replace />;
  }

  if (justAdmin) {
    const usuario = getUserAuthenticated();
    if (usuario?.role !== "ADMIN") {
      return <Navigate to="/not_authorized" replace />;
    }
  }

  return children;
}