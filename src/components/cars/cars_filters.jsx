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
  brand,
  setBrand,
  available,
  setAvailable,
}) {
  return (
    <div className="w-full max-w-4xl mx-auto flex flex-col sm:flex-row gap-3 px-6 py-4">
      {/* Busca por modelo ou marca */}
      <div className="relative flex-1">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        <Input
          placeholder="Buscar carro..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="pl-9"
        />
      </div>

      {/* Marca */}
      <Select value={brand} onValueChange={setBrand}>
        <SelectTrigger className="w-full sm:w-[180px]">
          <SelectValue placeholder="Marca" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="todas">Todas</SelectItem>
          <SelectItem value="TOYOTA">Toyota</SelectItem>
          <SelectItem value="HONDA">Honda</SelectItem>
          <SelectItem value="CHEVROLET">Chevrolet</SelectItem>
          <SelectItem value="VOLKSWAGEN">Volkswagen</SelectItem>
          <SelectItem value="HYUNDAI">Hyundai</SelectItem>
        </SelectContent>
      </Select>

      {/* Disponibilidade */}
      <Select value={available} onValueChange={setAvailable}>
        <SelectTrigger className="w-full sm:w-[180px]">
          <SelectValue placeholder="Disponibilidade" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="todos">Todos</SelectItem>
          <SelectItem value={true}>Disponível</SelectItem>
          <SelectItem value={false}>Indisponível</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}