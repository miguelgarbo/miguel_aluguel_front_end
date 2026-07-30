import { Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

<NavigationMenu>
  <NavigationMenuList>
    <NavigationMenuItem>
      <NavigationMenuLink asChild>
        <Link to="/carros">Carros Disponíveis</Link>
      </NavigationMenuLink>
    </NavigationMenuItem>

    <NavigationMenuItem>
      <NavigationMenuLink asChild>
        <Link to="/alugueis">Meus Aluguéis</Link>
      </NavigationMenuLink>
    </NavigationMenuItem>
  </NavigationMenuList>
</NavigationMenu>