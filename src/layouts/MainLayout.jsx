import { Outlet } from "react-router-dom";
import NavBar from "../components/nav_bar";

export default function MainLayout() {
  return (
    <>
      <NavBar />
      <main>
        <Outlet />
      </main>
    </>
  );
}