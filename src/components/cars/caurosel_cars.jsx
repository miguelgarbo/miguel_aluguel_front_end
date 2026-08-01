import { CardCarInfo } from "./card_car_info";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function CauroselCars() {

    return(
        <div className="section-cars">
                <Carousel className="w-full max-w-5xl border rounded-lg caurosel-cars">
                <CarouselContent>
                    <CarouselItem className="basis-auto">
                    <CardCarInfo />
                    </CarouselItem>
                    <CarouselItem className="basis-auto">
                    <CardCarInfo />
                    </CarouselItem>
                    <CarouselItem className="basis-auto">
                    <CardCarInfo />
                    </CarouselItem>
                    <CarouselItem className="basis-auto">
                    <CardCarInfo />
                    </CarouselItem>
                </CarouselContent>

                <CarouselPrevious />
                <CarouselNext />
                </Carousel>
            </div>

            )
}