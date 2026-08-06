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
import { AlertError } from "../components/alerts"; 

import { getUserAuthenticated, login } from "../services/authService";

export default function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState(""); 

    async function handleLogin(e) {
      e.preventDefault();

      try {
        const token = await login(email, senha);

        console.log("Token:", token);
        setError("");
        const userAuthtenticated = getUserAuthenticated
        if (userAuthtenticated.role =='ADMIN'){
                  navigate("/cadastro_carro");

        }else{
        navigate("/home");

        }
      } catch (error) {
        setError("Usuário ou senha inválidos");
      }
  }
  

  return (
    <div className="section-cars">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle>Entre em sua Conta</CardTitle>
          <CardDescription>Informe seu email abaixo</CardDescription>
          <CardAction>
            <Button variant="link" onClick={() => navigate("/cadastro_usuario")}>
              Cadastra-se
            </Button>
          </CardAction>
        </CardHeader>

        <CardContent>
          <form id="login-form" onSubmit={handleLogin}>
            <div className="flex flex-col gap-6">

              {error && (
                <AlertError
                  title="Erro no login"
                  description={error}
                />
              )}

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
                <div className="flex items-center">
                  <Label htmlFor="password">Senha</Label>
                </div>
                <Input
                  id="password"
                  type="password"
                  value={senha}
                  onChange={(e) => setSenha(e.target.value)}
                  required
                />
              </div>
            </div>
          </form>
        </CardContent>

        <CardFooter className="flex-col gap-2">
          <Button type="submit" form="login-form" className="w-full">
            Login
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}