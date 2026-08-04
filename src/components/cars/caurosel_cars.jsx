import { useCars } from"../../hooks/useCars";
import { CardCarInfo } from "./card_car_info";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function CauroselCars({ search, brand }) {
  const { cars, loading } = useCars();

  console.log("cars aqui no carrosel", cars)

  const filteredCars = cars.filter((car) => {
    const filterSearch = car.modelo
      .toLowerCase()
      .includes(search.toLowerCase());

    const filterBrand = brand === "todos" || car.marca === brand;

    const filterAvailable = car.disponivel === true;

    return filterSearch && filterBrand && filterAvailable;
  });


  console.log("filteredCars", filteredCars)
    
  if (loading) return (
    <div className="section-cars flex justify-center py-4 px-2">
    <p>Carregando carros...</p>
    </div>)

  return (
    <Carousel className="w-full max-w-5xl mx-auto">
      <CarouselContent>
        {filteredCars.map((car) => (
          <CarouselItem key={car.id} className="basis-auto">
            <CardCarInfo car={car} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}