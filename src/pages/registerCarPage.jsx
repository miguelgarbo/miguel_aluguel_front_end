import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { AlertError, AlertSuccess } from "../components/alerts";
import { createCar } from "../services/carsService";

export default function RegisterCarPage() {
  const navigate = useNavigate();

  const [placa, setPlaca] = useState("");
  const [marca, setMarca] = useState("");
  const [modelo, setModelo] = useState("");
  const [valorDiaria, setValorDiaria] = useState("");
  const [imagem, setImagem] = useState("");

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  async function handleRegisterCar(e) {
    e.preventDefault();

    setError("");
    setSuccess("");

    if (!placa || !marca || !modelo || !valorDiaria || !imagem) {
      setError("Preencha todos os campos.");
      return;
    }

    try {
      await createCar({
        placa,
        marca,
        modelo,
        valorDiaria: parseFloat(valorDiaria),
        imagem,
        disponivel: true,
      });

      setSuccess("Carro cadastrado com sucesso!");

      setTimeout(() => {
        navigate("/home");
      }, 1500);
    } catch (err) {
      console.error(err);
      setError("Não foi possível cadastrar o carro.");
    }
  }

  return (
    <div className="section-cars">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Cadastrar Carro</CardTitle>
          <CardDescription>
            Informe os dados do veículo
          </CardDescription>
        </CardHeader>

        <CardContent>
          <form
            id="register-car-form"
            onSubmit={handleRegisterCar}
            className="flex flex-col gap-6"
          >
            {error && (
              <AlertError
                title="Erro"
                description={error}
              />
            )}

            {success && (
              <AlertSuccess
                title="Sucesso!"
                description={success}
              />
            )}

            <div className="grid gap-2">
              <Label htmlFor="placa">Placa</Label>
              <Input
                id="placa"
                placeholder="ABC1234"
                value={placa}
                onChange={(e) => setPlaca(e.target.value.toUpperCase())}
                maxLength={7}
              />
            </div>

            <div className="grid gap-2">
              <Label>Marca</Label>

              <Select
                value={marca}
                onValueChange={setMarca}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Selecione a marca" />
                </SelectTrigger>

                <SelectContent>
                  <SelectItem value="FIAT">Fiat</SelectItem>
                  <SelectItem value="CHEVROLET">Chevrolet</SelectItem>
                  <SelectItem value="VOLKSWAGEN">Volkswagen</SelectItem>
                  <SelectItem value="FORD">Ford</SelectItem>
                  <SelectItem value="TOYOTA">Toyota</SelectItem>
                  <SelectItem value="HONDA">Honda</SelectItem>
                  <SelectItem value="HYUNDAI">Hyundai</SelectItem>
                  <SelectItem value="RENAULT">Renault</SelectItem>
                  <SelectItem value="NISSAN">Nissan</SelectItem>
                  <SelectItem value="JEEP">Jeep</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid gap-2">
              <Label htmlFor="modelo">Modelo</Label>
              <Input
                id="modelo"
                placeholder="Corolla"
                value={modelo}
                onChange={(e) => setModelo(e.target.value)}
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="valorDiaria">
                Valor da diária (R$)
              </Label>

              <Input
                id="valorDiaria"
                type="number"
                step="0.01"
                placeholder="150.00"
                value={valorDiaria}
                onChange={(e) => setValorDiaria(e.target.value)}
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="imagem">URL da imagem</Label>

              <Input
                id="imagem"
                placeholder="https://..."
                value={imagem}
                onChange={(e) => setImagem(e.target.value)}
              />
            </div>
          </form>
        </CardContent>

        <CardFooter className="flex-col gap-2">
          <Button
            type="submit"
            form="register-car-form"
            className="w-full"
          >
            Cadastrar Carro
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}