import { useCars } from"../../hooks/useCars";
import { CardCarInfo } from "./card_car_info";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function CauroselCars({ search, category, transmission }) {
  const { cars, loading } = useCars();

  const filteredCars = cars.filter((car) => {
    const filterSearch = car.name.toLowerCase().includes(search.toLowerCase());
    const filterCategory = category === "todos" || car.category === category;
    const filterTransmission = transmission === "todos" || car.transmission === transmission;
    return filterSearch && filterCategory && filterTransmission;
  });
    
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