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

export function CardCarInfo() {
  return (
    <Card className="w-full max-w-lg">
      <CardHeader>
        <CardTitle>BYD - Dolphin</CardTitle>
        <CardDescription>
            A partir de R$ 450,00 / semana
        </CardDescription>
       
      </CardHeader>
      <CardContent>
       <div className='container-car-info'>
            <div className='car-image-wrapper'>
                <img src="https://s2-autoesporte.glbimg.com/yJIPzAB-r8rCmYdi43CP68Qonhw=/0x0:1920x1280/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_cf9d035bf26b4646b105bd958f32089d/internal_photos/bs/2026/x/A/nPFjovSmebCTi7aFvWtw/byd-dolphin-gs-frente.jpg" alt="Foto do carro" className='car-image' />
            </div>

            <div className='car-text-info'>
               <p><strong>Aluguel semanal:</strong> R$ 450,00</p>
               <p><strong>Categoria:</strong> Hatch</p>
               <p><strong>Câmbio:</strong> Automático</p>
               <p><strong>Motorização:</strong> Elétrico</p>
            <p><strong>Disponibilidade:</strong> Imediata</p>
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
