import { useState } from "react";
import CauroselCars from "../components/cars/caurosel_cars";
import CarFilters from "../components/cars/cars_filters";
import { getUserAuthenticated } from "@/services/authService";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  const [search, setSearch] = useState("");
  const [brand, setBrand] = useState("todos");
  const [available, setAvailable] = useState("todos");

  const userLogged = getUserAuthenticated();
  const isAdmin = userLogged?.role === "ADMIN";

  const navigate = useNavigate();


  function handleRegisterCar(){

    navigate("/cadastro_carro")
  }


  return (
    <main>

      {isAdmin && (
          <Button
            variant="default"
            className="btn-admin-car"
            onClick={handleRegisterCar}
          >
            + Cadastrar Carro
          </Button>
        )}

      <CarFilters
        search={search}
        setSearch={setSearch}
        brand={brand}
        setBrand={setBrand}
        
      />

      <CauroselCars search={search} brand={brand} />
    </main>
  );
}