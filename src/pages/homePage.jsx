import { useState } from "react";
import CauroselCars from "../components/cars/caurosel_cars";
import CarFilters from "../components/cars/cars_filters";

export default function HomePage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("todos");
  const [transmission, setTransmission] = useState("todos");

  return (
    <main>
      <CarFilters
        search={search}
        setSearch={setSearch}
        category={category}
        setCategory={setCategory}
        transmission={transmission}
        setTransmission={setTransmission}
      />

      <CauroselCars search={search} category={category} transmission={transmission} />
    </main>
  );
}