import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { createRental } from "../../services/rentalService";
import { AlertSuccess, AlertError } from "../alerts";

export default function RentModal({
  open,
  onOpenChange,
  car,
}) {
  const [inicio, setInicio] = useState("");
  const [fim, setFim] = useState("");

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const diaria = Number(car?.valorDiaria ?? 0);

  const dias =
    inicio && fim
      ? Math.max(
          1,
          Math.ceil(
            (new Date(fim) - new Date(inicio)) /
              (1000 * 60 * 60 * 24)
          )
        )
      : 0;

  const valorTotal = dias * diaria;

  async function handleRent() {
    if (!inicio || !fim) {
      setError("Preencha as datas do aluguel.");
      return;
    }

    if (new Date(fim) <= new Date(inicio)) {
      setError("A data de devolução deve ser maior que a data de retirada.");
      return;
    }

    try {
      await createRental({
        carro: {
          id: car.id,
        },
        usuario: {
          id: Number(localStorage.getItem("user")),
        },
        valorTotal,
        inicioAluguel: inicio,
        fimAluguel: fim,
      });

      setError("");
      setSuccess("Aluguel realizado com sucesso!");

      setTimeout(() => {
        onOpenChange(false);
        setSuccess("");
        setInicio("");
        setFim("");
      }, 2000);

    } catch (err) {
      console.error(err);
      setError("Erro ao realizar aluguel.");
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>Alugar veículo</DialogTitle>

          <DialogDescription>
            Confira os dados antes de confirmar o aluguel.
          </DialogDescription>
        </DialogHeader>

        <div className="flex flex-col gap-4">

          <div className="flex gap-4 items-center">
            <img
              src={car.imagem}
              alt={car.modelo}
              className="w-32 h-24 object-cover rounded-md"
            />

            <div>
              <h3 className="font-semibold">
                {car.marca} {car.modelo}
              </h3>

              <p className="text-sm text-muted-foreground">
                Placa: {car.placa}
              </p>
            </div>
          </div>

        {error && (
          <AlertError 
            title="Erro no aluguel"
            description={error}
          />
        )}

        {success && (
         <AlertSuccess 
            title="Aluguel Confirmado"
            description={success}
          />
        )}

          <div className="grid gap-2">
            <Label>Data de retirada</Label>

            <Input
              type="datetime-local"
              value={inicio}
              onChange={(e) => setInicio(e.target.value)}
            />
          </div>

          <div className="grid gap-2">
            <Label>Data de devolução</Label>

            <Input
              type="datetime-local"
              value={fim}
              onChange={(e) => setFim(e.target.value)}
            />
          </div>

          <div className="grid gap-2">
            <Label>Valor da diária</Label>

            <Input
              disabled
              value={diaria.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            />
          </div>

          <div className="grid gap-2">
            <Label>Quantidade de dias</Label>

            <Input disabled value={dias || 0} />
          </div>

          <div className="grid gap-2">
            <Label>Valor total</Label>

            <Input
              disabled
              value={valorTotal.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            />
          </div>

        </div>

        <DialogFooter>
          <Button
            variant="outline"
            onClick={() => onOpenChange(false)}
          >
            Cancelar
          </Button>

          <Button onClick={handleRent}>
            Confirmar aluguel
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}