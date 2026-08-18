import { Car } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export default function InitialPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col">
      {/* Cabeçalho simples, só com a logo */}
      <header className="flex items-center gap-2 px-6 py-4">
        <Car className="w-6 h-6 text-primary" />
        <span className="font-bold text-lg">Miguel Aluguel V.2</span>
      </header>

      {/* Hero */}
      <main className="flex-1 flex items-center justify-center px-6 py-10">
        <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Texto + botões */}
          <div className="flex flex-col gap-6 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Alugue o carro ideal
              <br />
              para sua próxima viagem
            </h1>

            <p className="text-muted-foreground text-lg">
              No Miguel Aluguel você encontra carros para todos os estilos e
              orçamentos, com aluguel semanal simples e sem burocracia.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
              <Button size="lg" className="w-full sm:w-auto" onClick={() => navigate("/login")}>
                Entrar
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto"
                onClick={() => navigate("/cadastro_usuario")}
              >
                Criar conta
              </Button>
            </div>
          </div>

          {/* Imagem do carro */}
          <div className="flex justify-center">
            <img
              src="https://admin.cnnbrasil.com.br/wp-content/uploads/sites/12/2024/02/Hyundai-HB20-Platinum-Plus.jpg?w=1200&h=675&crop=1"
              alt="Carro disponível para aluguel"
              className="rounded-2xl shadow-lg w-full max-w-md object-cover"
            />
          </div>
        </div>
      </main>

      {/* Rodapé simples */}
      <footer className="text-center text-sm text-muted-foreground py-6">
        © {new Date().getFullYear()} Miguel Aluguel. Todos os direitos reservados.
      </footer>
    </div>
  );
}
