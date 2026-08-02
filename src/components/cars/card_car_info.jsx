import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"


export function CardCarInfo({ car }) {

  
  return (
    <Card className="card-car shrink-0">
      <CardHeader>
        <CardTitle>{car.name} - {car.brand}</CardTitle>
        <CardDescription>
            A partir de R$ {car.weeklyPrice} / semana
        </CardDescription>
       
      </CardHeader>
      <CardContent>
       <div className='container-car-info'>
            <div className='car-image-wrapper'>
                <img src={car.imageUrl} alt="Foto do carro" className='car-image' />
            </div>

            <div className='car-text-info'>
               <p><strong>Aluguel semanal:</strong> R$ {car.weeklyPrice},00</p>
               <p><strong>Categoria:</strong> {car.category}</p>
               <p><strong>Câmbio:</strong> {car.transmission}</p>
               <p><strong>Motorização:</strong> {car.fuelType}</p>
            <p><strong>Disponibilidade:</strong> Imediata</p>
            </div>
        </div>
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <Button type="submit" className="w-full">
          Alugar
        </Button>
        <Button variant="outline" className="w-full">
            + Salvar
        </Button>
      </CardFooter>
    </Card>
  )
}
