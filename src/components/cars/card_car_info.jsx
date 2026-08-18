import { useState } from "react";
import { Button } from "@/components/ui/button";

import {
  Card,
  CardContent,
  CardFooter,
  CardDescription,
  CardTitle,
  CardHeader
} from "@/components/ui/card";

import RentModal from "./rentModal";
import { getUserAuthenticated } from "@/services/authService";
import { deleteCar } from "@/services/carsService";

export function CardCarInfo({ car }) {

  const [open, setOpen] = useState(false);
  const userLogged = getUserAuthenticated();

  const isAdmin = userLogged?.role === "ADMIN";

  function availableCar(available) {
    if (available === true) {
      return "Disponível";
    }

    return "Indisponível";
  }

  async function handleDelete() {
    try {
      await deleteCar(car.id);

      alert("Carro apagado com sucesso!");

      // Recarrega a página para atualizar a lista
      window.location.reload();
    } catch (error) {
      console.error("Erro ao apagar carro:", error);

      alert("Não foi possível apagar o carro.");
    }
  }

  return (
    <Card className="card-car shrink-0">
      <CardHeader>
        <CardTitle>
          {car.modelo} - {car.marca}
        </CardTitle>

        <CardDescription>
          A partir de R$ {car.valorDiaria} / dia
        </CardDescription>
      </CardHeader>

      <CardContent>
        <div className="container-car-info">
          <div className="car-image-wrapper">
            <img
              src={car.imagem}
              alt="Foto do carro"
              className="car-image"
            />
          </div>

          <div className="car-text-info">
            <p>
              <strong>Aluguel diária:</strong> R$ {car.valorDiaria},00
            </p>

            <p>
              <strong>Placa:</strong> {car.placa}
            </p>

            <p>
              <strong>Disponibilidade:</strong>{" "}
              {availableCar(car.disponivel)}
            </p>
          </div>
        </div>
      </CardContent>

      <CardFooter className="flex-col gap-2">

        <Button
          className="w-full"
          onClick={() => setOpen(true)}
        >
          Alugar
        </Button>

        {isAdmin && (
          <Button
            variant="destructive"
            className="w-full"
            onClick={handleDelete}
          >
            Apagar
          </Button>
        )}

        <RentModal
          open={open}
          onOpenChange={setOpen}
          car={car}
        />

      </CardFooter>
    </Card>
  );
}