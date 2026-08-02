import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function CarFilters({
  search,
  setSearch,
  category,
  setCategory,
  transmission,
  setTransmission,
}) {
  return (
    <div className="w-full max-w-4xl mx-auto flex flex-col sm:flex-row gap-3 px-6 py-4">

        {/* filtro por nome busca por input usuario */}
      <div className="relative flex-1">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        <Input
          placeholder="Buscar carro..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="pl-9"
        />
      </div>
    {/* dropdown de categoria  */}
      <Select value={category} onValueChange={setCategory}>
        <SelectTrigger className="w-full sm:w-[160px]">
          <SelectValue placeholder="Categoria" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="todos">Todas categorias</SelectItem>
          <SelectItem value="hatch">Hatch</SelectItem>
          <SelectItem value="sedan">Sedã</SelectItem>
          <SelectItem value="suv">SUV</SelectItem>
          <SelectItem value="pickup">Picape</SelectItem>
        </SelectContent>
      </Select>

{/* dropdown de câmbio */}
      <Select value={transmission} onValueChange={setTransmission}>
        <SelectTrigger className="w-full sm:w-[160px]">
          <SelectValue placeholder="Câmbio" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="todos">Todos os câmbios</SelectItem>
          <SelectItem value="manual">Manual</SelectItem>
          <SelectItem value="automático">Automático</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
