import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";

import { getUserById, updateUser } from "../services/userService";

import { getRentalsByUser } from "../services/rentalService";
import { updateCar } from "../services/carsService";
import { getUserAuthenticated } from "@/services/authService";
import { AlertError } from "@/components/alerts";



export default function ProfilePage() {

  const userLogged = getUserAuthenticated()


  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [rentals, setRentals] = useState([]);

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");



    useEffect(() => {
    async function loadProfile() {
      try {
        const userLogged = await getUserAuthenticated();

        if (!userLogged) return;

        const user = await getUserById(userLogged.id);
        const rentals = await getRentalsByUser(userLogged.id);

        setName(user.nomeCompleto);
        setEmail(user.email);
        setRentals(rentals);
      } catch (err) {
        console.error(err);
        setError("Erro ao carregar os dados do usuário.");
      }
    }

    loadProfile();
  }, []);


  async function handleUpdateProfile(e) {
    e.preventDefault();
    setError("");
    setSuccess("");

    try {
      

      await updateUser(userLogged.id, {
        ...user,
        nomeCompleto: name,
        email: email,
      });

      setSuccess("Dados atualizados com sucesso!");
    } catch (err) {
      setError("Erro ao atualizar.");
    }
  }

  function getRentalStatus(fimAluguel) {
    return new Date(fimAluguel) < new Date()
      ? "Encerrado"
      : "Em andamento";
  }



  async function setCarAvailableAgain(carro_aluguel, fimAluguel) {

    if (new Date(fimAluguel) < new Date()) {

      await updateCar(carro_aluguel.id, {
        ...carro_aluguel,
        disponivel: true,
      })
        .then((updatedCar) => {
          console.log("Carro atualizado:", updatedCar);
        })
        .catch((error) => {
          console.error("Erro ao atualizar o carro:", error);
        });

    }

    return
  }

  useEffect(() => {

    async function updateCarAvailability() {
      for (const rental of rentals) {
        await setCarAvailableAgain(rental.carro, rental.fimAluguel);
      }
    }

    updateCarAvailability();
  }, [rentals]);




  return (
    <div className="section-cars flex justify-center py-10 px-4">
      <Card className="w-full max-w-lg">
        <CardHeader>
          <CardTitle>Meu Perfil</CardTitle>
          <CardDescription>Gerencie seus dados e veja seus aluguéis</CardDescription>
        </CardHeader>

        <CardContent>
          <Tabs defaultValue="editar">
            <TabsList className="w-full">
              <TabsTrigger value="editar">Editar Perfil</TabsTrigger>
              <TabsTrigger value="alugueis">Meus Aluguéis</TabsTrigger>
            </TabsList>

            {/* Aba Editar Perfil */}
            <TabsContent value="editar">
              <form
                id="profile-form"
                onSubmit={handleUpdateProfile}
                className="flex flex-col gap-6 mt-4"
              >
                {error && (
                  <AlertError title="Erro ao atualizar" description={error} />
                )}

                {success && (
                  <p className="text-sm text-green-600">{success}</p>
                )}

                <div className="grid gap-2">
                  <Label htmlFor="name">Nome</Label>
                  <Input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>

                <Button type="submit" className="w-full">
                  Salvar Alterações
                </Button>
              </form>
            </TabsContent>

            {/* Aba: Meus Aluguéis */}
            <TabsContent value="alugueis">
              <div className="flex flex-col gap-3 mt-4">
                {rentals.length === 0 ? (
                  <p className="text-sm text-muted-foreground">
                    Você ainda não fez nenhum aluguel.
                  </p>
                ) : rentals.map((rental) => {

                  const status = getRentalStatus(rental.fimAluguel);
                  return (
                    <div
                      key={rental.id}
                      className="flex items-center justify-between border rounded-lg p-3"
                    >
                      <div>
                        <p className="font-medium">
                          {rental.carro.marca} {rental.carro.modelo}
                        </p>

                        <p className="text-sm text-muted-foreground">
                          {new Date(rental.inicioAluguel).toLocaleDateString()}
                          {" até "}
                          {new Date(rental.fimAluguel).toLocaleDateString()}
                        </p>

                        <p className="text-sm font-medium">
                          R$ {rental.valorTotal.toFixed(2)}
                        </p>
                      </div>

                      <span
                        className={`text-xs px-2 py-1 rounded-full ${status === "Em andamento"
                          ? "bg-blue-100 text-blue-700"
                          : "bg-green-100 text-green-700"
                          }`}
                      >
                        {status}
                      </span>
                    </div>
                  );
                })}
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}
