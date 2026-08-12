import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Menu, MessageCircle, Trash2, Plus, Minus, Search, X } from "lucide-react";
import { useCart, type CartItem } from "@/hooks/use-cart";
import { useSearch } from "@/hooks/use-search";
import { Badge } from "@/components/ui/badge";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
} from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";

import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";

export function Header() {
  const { items, updateQuantity, removeItem, clearCart } = useCart();
  const { searchQuery, setSearchQuery } = useSearch();
  const itemCount = items.reduce((acc: number, item: CartItem) => acc + item.quantity, 0);
  const total = items.reduce((acc, item) => acc + (item.price * item.quantity), 0);


  return (
    <header className="sticky top-0 z-50 w-full border-b border-orange-500/10 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold tracking-tight text-orange-500 drop-shadow-[0_0_8px_rgba(249,115,22,0.4)]">Bee Tools</span>
          </Link>
        </div>
        
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <Link to="/" className="transition-colors hover:text-primary">Início</Link>
          <a href="#products" className="transition-colors hover:text-primary">Ferramentas</a>
          <div className="flex items-center gap-4">
            <div className="relative flex items-center">
              <Search className="absolute left-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Pesquisar ferramentas..."
                className="pl-9 h-9 w-[200px] lg:w-[300px] bg-muted/50 border-none focus-visible:ring-1 focus-visible:ring-primary"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 hover:text-primary transition-colors"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>
            <a href="https://wa.me/5500000000000" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 transition-colors hover:text-primary">
              <MessageCircle className="h-4 w-4" />
              Suporte
            </a>
          </div>
        </nav>

        <div className="flex items-center gap-4">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingCart className="h-5 w-5" />
                {itemCount > 0 && (
                  <Badge className="absolute -top-1 -right-1 h-4 w-4 flex items-center justify-center p-0 text-[10px]" variant="destructive">
                    {itemCount}
                  </Badge>
                )}
              </Button>
            </SheetTrigger>
            <SheetContent className="flex flex-col w-full sm:max-w-md">
              <SheetHeader className="mb-4">
                <SheetTitle>Seu Carrinho</SheetTitle>
              </SheetHeader>
              <ScrollArea className="flex-1 -mx-6 px-6">
                {items.length === 0 ? (
                  <div className="flex flex-col items-center justify-center h-full pt-20 text-center text-muted-foreground">
                    <ShoppingCart className="h-12 w-12 mb-4 opacity-20" />
                    <p>Seu carrinho está vazio</p>
                  </div>
                ) : (
                  <div className="space-y-6 pt-2">
                    {items.map((item) => (
                      <div key={item.id} className="flex gap-4">
                        <div className="h-20 w-20 rounded-md border bg-muted overflow-hidden flex-shrink-0">
                          {item.image_url && <img src={item.image_url} alt={item.name} className="h-full w-full object-cover" />}
                        </div>
                        <div className="flex-1 flex flex-col justify-between py-0.5">
                          <div className="flex justify-between items-start">
                            <h4 className="text-sm font-semibold line-clamp-1 pr-2">{item.name}</h4>
                            <Button 
                              variant="ghost" 
                              size="icon" 
                              className="h-7 w-7 text-muted-foreground hover:text-destructive hover:bg-destructive/10"
                              onClick={() => removeItem(item.id)}
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                          <div className="flex justify-between items-center mt-2">
                            <p className="text-sm font-bold text-primary">R$ {Number(item.price).toFixed(2)}</p>
                            <div className="flex items-center gap-2 border rounded-md p-0.5">
                              <Button 
                                variant="ghost" 
                                size="icon" 
                                className="h-6 w-6"
                                onClick={() => updateQuantity(item.id, -1)}
                              >
                                <Minus className="h-3 w-3" />
                              </Button>
                              <span className="text-xs font-medium w-4 text-center">{item.quantity}</span>
                              <Button 
                                variant="ghost" 
                                size="icon" 
                                className="h-6 w-6"
                                onClick={() => updateQuantity(item.id, 1)}
                              >
                                <Plus className="h-3 w-3" />
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </ScrollArea>
              {items.length > 0 && (
                <div className="pt-4 space-y-4">
                  <Separator />
                  <div className="flex justify-between items-center py-2">
                    <span className="text-base font-medium">Total</span>
                    <span className="text-xl font-bold text-primary">R$ {total.toFixed(2)}</span>
                  </div>
                  <SheetFooter className="flex-col gap-2 sm:flex-col">
                    <Button className="w-full py-6 text-base font-bold">Finalizar Compra</Button>
                    <Button variant="outline" className="w-full" onClick={clearCart}>Limpar Carrinho</Button>
                  </SheetFooter>
                </div>
              )}
            </SheetContent>
          </Sheet>
          
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
}
