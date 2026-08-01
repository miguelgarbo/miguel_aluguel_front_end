import { useState } from "react";
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
import { AlertError } from "../components/alerts";

export default function ProfilePage() {
  // Dados do perfil (viriam da API futuramente)
  const [name, setName] = useState("Miguel Garbo");
  const [email, setEmail] = useState("miguel@email.com");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const [rentals] = useState([
    { id: 1, car: "Dolphin", startDate: "01/07/2026", endDate: "08/07/2026", status: "Concluído" },
    { id: 2, car: "Onix", startDate: "20/07/2026", endDate: "27/07/2026", status: "Em andamento" },
  ]);

  function handleUpdateProfile(e) {
    e.preventDefault();

    if (!name || !email) {
      setError("Preencha todos os campos");
      setSuccess("");
      return;
    }

    setError("");
    setSuccess("Dados atualizados com sucesso!");
  }

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

            {/* Aba: Editar Perfil */}
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
                ) : (
                  rentals.map((rental) => (
                    <div
                      key={rental.id}
                      className="flex items-center justify-between border rounded-lg p-3"
                    >
                      <div>
                        <p className="font-medium">{rental.car}</p>
                        <p className="text-sm text-muted-foreground">
                          {rental.startDate} até {rental.endDate}
                        </p>
                      </div>
                      <span
                        className={`text-xs px-2 py-1 rounded-full ${
                          rental.status === "Em andamento"
                            ? "bg-blue-100 text-blue-700"
                            : "bg-green-100 text-green-700"
                        }`}
                      >
                        {rental.status}
                      </span>
                    </div>
                  ))
                )}
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}
