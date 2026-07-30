import { Car } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

export default function NavBar() {
  return (
    <div className="flex items-center justify-between px-6 py-3 border-b">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <Car className="w-6 h-6 text-primary" />
        <span className="font-bold text-lg">Auto Rent</span>
      </div>

      {/* Abas  */}
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuLink href="/carros">
              Carros Disponíveis
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink href="/alugueis">
              Meus Aluguéis
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}