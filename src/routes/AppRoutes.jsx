import { Routes, Route, Navigate } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import LoginPage from "../pages/loginPage";
import HomePage from "../pages/homePage";
import RegisterPage from "../pages/registerPage";
import ProfilePage from "../pages/profilePage";
import InitialPage from "../pages/initialPage";

export default function AppRoutes() {
  return (
    <Routes>
       <Route path="/" element={<Navigate to="/welcome" replace />} />
       <Route path="/welcome" element={<InitialPage />} />

        <Route element={<MainLayout/>}>

            <Route path="/home" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/cadastro_usuario" element={<RegisterPage />} />
            <Route path="/perfil" element={<ProfilePage />} />


        </Route>
    </Routes>
  );
}