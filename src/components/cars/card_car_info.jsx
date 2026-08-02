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


  function availableCar(available) {

    if (available === true) {
      return "Disponível"

    }else{
      return "Indisponível"
    }
  } 

  console.log("car", car)
  
  return (
    <Card className="card-car shrink-0">
      <CardHeader>
        <CardTitle>{car.modelo} - {car.marca}</CardTitle>
        <CardDescription>
            A partir de R$ {car.valorDiaria} / semana
        </CardDescription>
       
      </CardHeader>
      <CardContent>
       <div className='container-car-info'>
            <div className='car-image-wrapper'>
                <img src={car.imageUrl} alt="Foto do carro" className='car-image' />
            </div>

            <div className='car-text-info'>
               <p><strong>Aluguel semanal:</strong> R$ {car.valorDiaria},00</p>
               {/* <p><strong>Categoria:</strong> {car.category}</p> */}
                <p><strong>Placa:</strong> {car.placa}</p>
               {/* <p><strong>Motorização:</strong> {car.fuelType}</p> */} 
            <p><strong>Disponibilidade:</strong> {availableCar(car.disponivel)}</p>
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
