import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
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
import { createCar, updateCar, getCarById } from "../services/carsService";

export default function RegisterCarPage() {
  const navigate = useNavigate();
  const { id } = useParams();
  const isEditing = Boolean(id);

  const [placa, setPlaca] = useState("");
  const [marca, setMarca] = useState("");
  const [modelo, setModelo] = useState("");
  const [valorDiaria, setValorDiaria] = useState("");
  const [imagem, setImagem] = useState("");

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    if (id) {
      getCarById(id)
        .then((car) => {
          setPlaca(car.placa || "");
          setMarca(car.marca || "");
          setModelo(car.modelo || "");
          setValorDiaria(car.valorDiaria ? String(car.valorDiaria) : "");
          setImagem(car.imagem || "");
        })
        .catch((err) => {
          console.error("Erro ao carregar dados do carro:", err);
          setError("Não foi possível carregar os dados do veículo.");
        });
    }
  }, [id]);

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!placa || !marca || !modelo || !valorDiaria || !imagem) {
      setError("Preencha todos os campos.");
      return;
    }

    const carData = {
      placa,
      marca,
      modelo,
      valorDiaria: parseFloat(valorDiaria),
      imagem,
      disponivel: true,
    };

    try {
      if (isEditing) {
        await updateCar(id, carData);
        setSuccess("Carro atualizado com sucesso!");
      } else {
        await createCar(carData);
        setSuccess("Carro cadastrado com sucesso!");
      }

      setTimeout(() => {
        navigate("/home");
      }, 1500);
    } catch (err) {
      console.error(err);
      setError(
        isEditing
          ? "Não foi possível atualizar o carro."
          : "Não foi possível cadastrar o carro."
      );
    }
  }

  return (
    <div className="section-cars">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>{isEditing ? "Editar Carro" : "Cadastrar Carro"}</CardTitle>
          <CardDescription>
            {isEditing
              ? "Altere os dados do veículo abaixo"
              : "Informe os dados do veículo"}
          </CardDescription>
        </CardHeader>

        <CardContent>
          <form
            id="register-car-form"
            onSubmit={handleSubmit}
            className="flex flex-col gap-6"
          >
            {error && <AlertError title="Erro" description={error} />}
            {success && <AlertSuccess title="Sucesso!" description={success} />}

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
              <Select value={marca} onValueChange={setMarca}>
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
              <Label htmlFor="valorDiaria">Valor da diária (R$)</Label>
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
            {isEditing ? "Salvar Alterações" : "Cadastrar Carro"}
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}