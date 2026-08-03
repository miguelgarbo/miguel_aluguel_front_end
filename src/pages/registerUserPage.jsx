import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { AlertError, AlertSuccess } from "../components/alerts";
import { createUser } from "../services/userService";

export default function RegisterPage() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  async function handleRegisterUser(e) {
    e.preventDefault();

    setError("");
    setSuccess("");

    if (!name || !email || !password || !confirmPassword) {
      setError("Preencha todos os campos");
      return;
    }

    if (password !== confirmPassword) {
      setError("As senhas não coincidem");
      return;
    }

    try {
      await createUser({
        nomeCompleto: name,
        email,
        senhaHash: password,
        isAdmin: false,
        dataCadastro: new Date().toISOString().slice(0, 19),
      });

      setSuccess("Cadastro realizado com sucesso!");

      setTimeout(() => {
        navigate("/login");
      }, 1500);
    } catch (err) {
      console.error(err);
      setError("Não foi possível realizar o cadastro.");
    }
  }

  return (
    <div className="section-cars">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle>Crie sua Conta</CardTitle>
          <CardDescription>
            Preencha os dados abaixo para se cadastrar
          </CardDescription>

          <CardAction>
            <Button variant="link" onClick={() => navigate("/login")}>
              Já tenho conta
            </Button>
          </CardAction>
        </CardHeader>

        <CardContent>
          <form
            id="register-form"
            onSubmit={handleRegisterUser}
            className="flex flex-col gap-6"
          >
            {error && (
              <AlertError
                title="Erro no cadastro"
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
              <Label htmlFor="name">Nome</Label>
              <Input
                id="name"
                type="text"
                placeholder="Seu nome completo"
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
                placeholder="username@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="password">Senha</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="confirm-password">
                Confirmar Senha
              </Label>
              <Input
                id="confirm-password"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>
          </form>
        </CardContent>

        <CardFooter className="flex-col gap-2">
          <Button type="submit" form="register-form" className="w-full">
            Cadastrar
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}