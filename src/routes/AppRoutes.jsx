import { Routes, Route, Navigate } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import LoginPage from "../pages/loginPage";
import HomePage from "../pages/homePage";
import RegisterPage from "../pages/registerUserPage";
import ProfilePage from "../pages/profilePage";
import InitialPage from "../pages/initialPage";
import RegisterCarPage from "../pages/registerCarPage";
import NotAuthorized from "../pages/noAuthorized";
import { ProtectedRoute } from "./secureRoutes";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/welcome" replace />} />
      <Route path="/welcome" element={<InitialPage />} />

      <Route element={<MainLayout />}>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/cadastro_usuario" element={<RegisterPage />} />
        <Route path="/not_authorized" element={<NotAuthorized />} />

        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <HomePage />
            </ProtectedRoute>
          }
        />

        <Route
          path="/perfil"
          element={
            <ProtectedRoute>
              <ProfilePage />
            </ProtectedRoute>
          }
        />

        {/* Cadastro de novo carro */}
        <Route
          path="/cadastro_carro"
          element={
            <ProtectedRoute justAdmin>
              <RegisterCarPage />
            </ProtectedRoute>
          }
        />

        {/* Edição de carro existente via ID */}
        <Route
          path="/cadastro_carro/:id"
          element={
            <ProtectedRoute justAdmin>
              <RegisterCarPage />
            </ProtectedRoute>
          }
        />
      </Route>
    </Routes>
  );
}