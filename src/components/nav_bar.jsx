import { Car, User, LogOut } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Link, useNavigate, useLocation } from "react-router-dom";

import { logout } from '../services/authService'

export default function NavBar() {
  const navigate = useNavigate();
  const location = useLocation();

  function handleLogout() {

    logout()
    navigate("/welcome");
  }

  function backToWelcome(){

    navigate("/welcome");
  }

  function isLoggedIn() {

          return !!localStorage.getItem("token");
  }


  return (
    <div className="flex items-center justify-between px-6 py-3 border-b">
      {/* Logo */}
      <div className="flex items-center gap-2 cursor-pointer"   
          onClick={backToWelcome}>
        <Car className="w-6 h-6 text-primary"/>
        <span className="font-bold text-lg">Miguel Aluguel</span>
      </div>

      {/* Abas */}

      <div className="flex items-center gap-2">
      {isLoggedIn() && (
        <Link
          to="/home"
          className={`flex items-center gap-2 rounded-lg p-2 text-sm transition-all hover:bg-accent ${
            location.pathname === "/home" ? "bg-accent" : ""
          }`}
        >
          Carros Disponíveis
        </Link>
        )}

        {/* <Link
          to="/alugueis"
          className={`flex items-center gap-2 rounded-lg p-2 text-sm transition-all hover:bg-accent ${
            location.pathname === "/alugueis" ? "bg-accent" : ""
          }`}
        >
          Meus Aluguéis
        </Link> */}
      </div>


      {isLoggedIn() && (
      <div className="flex items-center gap-4">
        <Link to="/perfil">
          <Avatar>
            <AvatarFallback>
              <User className="w-5 h-5" />
            </AvatarFallback>
          </Avatar>
        </Link>

        <button
          type="button"
          onClick={handleLogout}
          className="cursor-pointer text-muted-foreground hover:text-foreground transition-colors"
          title="Sair"
        >
          <LogOut className="w-5 h-5" />
        </button>
      </div>)

      }

    </div>
  );
}