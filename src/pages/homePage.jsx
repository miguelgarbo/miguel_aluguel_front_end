import { useState } from "react";
import CauroselCars from "../components/cars/caurosel_cars";
import CarFilters from "../components/cars/cars_filters";

export default function HomePage() {
  const [search, setSearch] = useState("");
  const [brand, setBrand] = useState("todos");
  const [available, setAvailable] = useState("todos");

  return (
    <main>
      <CarFilters
        search={search}
        setSearch={setSearch}
        brand={brand}
        setBrand={setBrand}
        available={available}
        setAvailable={setAvailable}
      />

      <CauroselCars search={search} brand={brand} available={available} />
    </main>
  );
}