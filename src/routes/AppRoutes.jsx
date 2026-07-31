import { Routes, Route, Navigate } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import LoginPage from "../pages/loginPage";
import HomePage from "../pages/homePage";
import RegisterPage from "@/pages/registerPage";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/cadastro_usuario" element={<RegisterPage />} />


      <Route element={<MainLayout />}>
        <Route path="/home" element={<HomePage />} />
      </Route>


    </Routes>
  );
}