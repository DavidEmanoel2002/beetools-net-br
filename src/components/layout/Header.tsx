import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Menu, MessageCircle, Trash2, Plus, Minus, Search, X } from "lucide-react";
import { useCart, type CartItem } from "@/hooks/use-cart";
import { useSearch } from "@/hooks/use-search";
import { Badge } from "@/components/ui/badge";
import beeLogo from "@/assets/bee-profile.jpeg.asset.json";
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
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-full overflow-hidden border border-yellow-500/20 bg-yellow-500/10 flex items-center justify-center">
              <img src={beeLogo.url} alt="Bee Tools Logo" className="h-full w-full object-cover mix-blend-lighten" />
            </div>
            <span className="text-xl md:text-2xl font-bold tracking-tight text-yellow-500 drop-shadow-[0_0_8px_rgba(254,240,138,0.4)] whitespace-nowrap">Bee Tools</span>
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
                placeholder="Pesquisar..."
                className="pl-9 h-9 w-[150px] lg:w-[300px] bg-muted/50 border-none focus-visible:ring-1 focus-visible:ring-primary"
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
            <a href="https://wa.me/558896261696?text=Ol%C3%A1%2C+tenho+interesse+nos+produtos+da+Bee+Tools.+Poderia+me+passar+mais+informa%C3%A7%C3%B5es%3F&utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 transition-colors hover:text-primary whitespace-nowrap">
              <MessageCircle className="h-4 w-4" />
              Suporte
            </a>
          </div>
        </nav>

        <div className="flex items-center gap-2 md:gap-4">
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Search className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="top" className="h-auto">
                <div className="py-4 space-y-4">
                  <SheetHeader>
                    <SheetTitle>Pesquisar</SheetTitle>
                  </SheetHeader>
                  <div className="relative flex items-center">
                    <Search className="absolute left-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                      type="search"
                      placeholder="Pesquisar ferramentas..."
                      className="pl-9 h-12 text-base bg-muted/50 border-none focus-visible:ring-1 focus-visible:ring-primary"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    {searchQuery && (
                      <button 
                        onClick={() => setSearchQuery('')}
                        className="absolute right-3 hover:text-primary transition-colors"
                      >
                        <X className="h-5 w-5" />
                      </button>
                    )}
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
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
                    <Button 
                      className="w-full py-6 text-base font-bold"
                      onClick={() => {
                        const hasCanva = items.some(item => item.name.toLowerCase().includes('canva'));
                        const hasCapcut = items.some(item => item.name.toLowerCase().includes('capcut'));
                        const hasEnvato2Meses = items.some(item => item.name.toLowerCase().includes('envato elements (2 meses)'));
                        const hasEnvato3Meses = items.some(item => item.name.toLowerCase().includes('envato elements (3 meses)'));
                        const hasFreepik1Mes = items.some(item => item.name.toLowerCase() === 'freepik premium');
                        const hasFreepik2Meses = items.some(item => item.name.toLowerCase() === 'freepik premium (2 meses)');
                        const hasFreepik3Meses = items.some(item => item.name.toLowerCase() === 'freepik premium (3 meses)');
                        const hasGemini1Mes = items.some(item => item.name.toLowerCase() === 'gemini pro (1 mês)');
                        const hasGeminiAdvanced = items.some(item => item.name.toLowerCase() === 'gemini advanced');
                        const hasNetflix = items.some(item => item.name.toLowerCase().includes('netflix'));
                        const hasHBO = items.some(item => item.name.toLowerCase().includes('hbo max'));
                        const hasSpotify = items.some(item => item.name.toLowerCase().includes('spotify'));
                        const hasIPTV = items.some(item => item.name.toLowerCase().includes('iptv'));

                        if (hasCanva) {
                          window.open('https://pay.kirvano.com/938feedf-3de6-4860-9058-6fb62fb86e44', '_blank');
                        } else if (hasCapcut) {
                          window.open('https://pay.kirvano.com/c42d9a91-6ffe-4d9a-a091-ffa597859ad8', '_blank');
                        } else if (hasEnvato2Meses) {
                          window.open('https://pay.kirvano.com/6bf0f6a8-4abc-485a-8742-578fa5a6cb84', '_blank');
                        } else if (hasEnvato3Meses) {
                          window.open('https://pay.kirvano.com/630c1a90-3cfd-477b-9f4c-0ace9eda3cfa', '_blank');
                        } else if (hasFreepik3Meses) {
                          window.open('https://pay.kirvano.com/7053f9fc-143f-4884-af07-40d6659e7f98', '_blank');
                        } else if (hasFreepik2Meses) {
                          window.open('https://pay.kirvano.com/13cf057b-b532-438b-99a4-6af24a171962', '_blank');
                        } else if (hasFreepik1Mes) {
                          window.open('https://pay.kirvano.com/de06653e-b03c-48cd-89e1-31cda242efec', '_blank');
                        } else if (hasGeminiAdvanced) {
                          window.open('https://wa.me/558896261696?text=Queria+saber+mais+sobre+o+Gemini+de+18+meses&utm_source=chatgpt.com', '_blank');
                        } else if (hasGemini1Mes) {
                          window.open('https://pay.kirvano.com/97c06d62-658c-4b45-87e1-e1ecbc4d4cea', '_blank');
                        } else if (hasNetflix) {
                          window.open('https://pay.kirvano.com/a2fb8599-2286-4305-871f-b5fd589044c9', '_blank');
                        } else if (hasHBO) {
                          window.open('https://pay.kirvano.com/eb140e78-7ced-4926-bd93-1ad48543a4e7', '_blank');
                        } else if (hasSpotify) {
                          window.open('https://pay.kirvano.com/fef9ddfc-be51-42dc-b17b-04bca176271e', '_blank');
                        } else if (hasIPTV) {
                          window.open('https://pay.kirvano.com/4519cc79-664c-42c7-b564-b84486162ea8', '_blank');
                        } else {

                          // Default checkout link for other products
                          const message = `Olá, gostaria de finalizar a compra dos seguintes itens: ${items.map(i => `${i.quantity}x ${i.name}`).join(', ')}. Total: R$ ${total.toFixed(2)}`;
                          window.open(`https://wa.me/558896261696?text=${encodeURIComponent(message)}`, '_blank');
                        }
                      }}
                    >
                      Finalizar Compra
                    </Button>
                    <Button variant="outline" className="w-full" onClick={clearCart}>Limpar Carrinho</Button>
                  </SheetFooter>
                </div>
              )}
            </SheetContent>
          </Sheet>
          
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px]">
              <SheetHeader className="mb-8">
                <SheetTitle className="text-left">Menu</SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-6 text-lg font-medium">
                <Link to="/" className="transition-colors hover:text-primary">Início</Link>
                <a href="#products" className="transition-colors hover:text-primary">Ferramentas</a>
                <a href="https://wa.me/558896261696?text=Ol%C3%A1%2C+tenho+interesse+nos+produtos+da+Bee+Tools.+Poderia+me+passar+mais+informa%C3%A7%C3%B5es%3F&utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 transition-colors hover:text-primary">
                  <MessageCircle className="h-5 w-5" />
                  Suporte WhatsApp
                </a>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
