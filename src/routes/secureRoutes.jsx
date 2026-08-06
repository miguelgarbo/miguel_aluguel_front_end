import { Navigate } from "react-router-dom";
import { isAuthenticated, getUserAuthenticated } from "../services/authService"; // ajusta o path certo

export function RotaProtegida({ children, apenasAdmin = false }) {
  if (!isAuthenticated()) {
    return <Navigate to="/login" replace />;
  }

  if (apenasAdmin) {
    const usuario = getUserAuthenticated();
    if (usuario?.role !== "ADMIN") {
      return <Navigate to="/nao-autorizado" replace />;
    }
  }

  return children;
}