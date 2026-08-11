import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Menu, MessageCircle } from "lucide-react";
import { useCart, type CartItem } from "@/hooks/use-cart";
import { Badge } from "@/components/ui/badge";

export function Header() {
  const { items } = useCart();
  const itemCount = items.reduce((acc: number, item: CartItem) => acc + item.quantity, 0);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold tracking-tight text-primary">Pluffy Tools</span>
          </Link>
        </div>
        
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <Link to="/" className="transition-colors hover:text-primary">Início</Link>
          <a href="#products" className="transition-colors hover:text-primary">Ferramentas</a>
          <a href="https://wa.me/5500000000000" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 transition-colors hover:text-primary">
            <MessageCircle className="h-4 w-4" />
            Suporte
          </a>
        </nav>

        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="relative">
            <ShoppingCart className="h-5 w-5" />
            {itemCount > 0 && (
              <Badge className="absolute -top-1 -right-1 h-4 w-4 flex items-center justify-center p-0 text-[10px]" variant="destructive">
                {itemCount}
              </Badge>
            )}
          </Button>
          <Button className="hidden sm:inline-flex">Entrar</Button>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
}
