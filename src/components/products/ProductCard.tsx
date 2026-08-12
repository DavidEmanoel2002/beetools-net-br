import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, ShoppingCart, MessageCircle, Info } from "lucide-react";
import { useCart } from "@/hooks/use-cart";
import { toast } from "sonner";
import { motion } from "framer-motion";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface ProductCardProps {
  product: {
    id: string;
    name: string;
    description: string | null;
    price: number;
    image_url: string | null;
    category: string | null;
    features: string[] | null;
  };
}

export function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCart();

  const handleAddToCart = () => {
    addItem(product);
    toast.success(`${product.name} adicionado ao carrinho!`);
  };

  const handleSupportClick = () => {
    window.open(`https://wa.me/558896261696?text=Ol%C3%A1%2C+tenho+interesse+nos+produtos+da+Bee+Tools.+Poderia+me+passar+mais+informa%C3%A7%C3%B5es%3F&utm_source=chatgpt.com`, '_blank');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -8 }}
    >
      <Card className="flex flex-col h-full overflow-hidden transition-all hover:shadow-2xl hover:shadow-yellow-500/10 bg-yellow-500/5 border-yellow-500/10 hover:border-yellow-500/30 backdrop-blur-sm group">
      <div className="aspect-video w-full overflow-hidden bg-white flex items-center justify-center p-4">
        {product.image_url ? (
          <img
            src={product.image_url}
            alt={product.name}
            className="max-h-full max-w-full transition-transform hover:scale-105 object-contain"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.onerror = null;
              target.src = `https://placehold.co/400x250/1a1a1a/ffffff?text=${encodeURIComponent(product.name)}`;
            }}
          />
        ) : (
          <div className="h-full w-full flex items-center justify-center text-muted-foreground bg-muted">
            Sem imagem
          </div>
        )}
      </div>
      <CardHeader className="p-3 md:p-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
          <Badge variant="secondary" className="bg-secondary text-secondary-foreground w-fit text-[10px] md:text-xs">{product.category || 'Geral'}</Badge>
          <span className="text-sm md:text-lg font-bold text-yellow-500">
            {product.category === 'IPTV' ? 'A partir de R$ 30,00' : `R$ ${Number(product.price).toFixed(2)}`}
          </span>
        </div>
        <CardTitle className="mt-2 line-clamp-1 group-hover:text-yellow-500 transition-colors text-white text-sm md:text-lg">{product.name}</CardTitle>
        
        <div className="flex flex-col gap-2 mt-2">
          {product.category === 'IPTV' && !['netflix', 'spotify', 'hbo max', 'netflix premium', 'spotify premium', 'hbo max premium'].some(name => product.name.toLowerCase().includes(name)) && (
            <Dialog>
              <DialogTrigger asChild>
                <Button 
                  variant="link" 
                  className="p-0 h-auto text-yellow-500 text-[10px] md:text-xs justify-start hover:text-yellow-400"
                >
                  <Info className="h-3 w-3 mr-1" />
                  Saiba mais sobre os preços aqui
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md bg-[#1a1a1a] border-yellow-500/20 text-white">
                <DialogHeader>
                  <DialogTitle className="text-yellow-500">Tabela de Preços - {product.name}</DialogTitle>
                  <DialogDescription className="text-muted-foreground">
                    Escolha o plano que melhor atende suas necessidades.
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="flex items-center justify-between p-3 rounded-lg bg-yellow-500/5 border border-yellow-500/10">
                    <span className="font-medium">1 Tela</span>
                    <span className="text-yellow-500 font-bold text-lg">R$ 30,00</span>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-lg bg-yellow-500/5 border border-yellow-500/10">
                    <span className="font-medium">2 Telas</span>
                    <span className="text-yellow-500 font-bold text-lg">R$ 45,00</span>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-lg bg-yellow-500/5 border border-yellow-500/10">
                    <span className="font-medium">3 Telas</span>
                    <span className="text-yellow-500 font-bold text-lg">R$ 50,00</span>
                  </div>
                </div>
                <Button 
                  className="w-full bg-yellow-500 hover:bg-yellow-600 text-black"
                  onClick={handleSupportClick}
                >
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Contratar via WhatsApp
                </Button>
              </DialogContent>
            </Dialog>
          )}

          {product.category === 'IPTV' && (
            <Button 
              variant="outline" 
              size="sm" 
              className="w-full md:w-fit gap-2 h-7 md:h-8 text-[10px] md:text-xs" 
              onClick={handleSupportClick}
            >
              <MessageCircle className="h-3 w-3 md:h-3.5 md:w-3.5" />
              Suporte
            </Button>
          )}
        </div>
      </CardHeader>
      <CardContent className="flex-1 p-3 md:p-6 pt-0 md:pt-0">
        <p className="text-[10px] md:text-sm text-muted-foreground line-clamp-2 mb-2 md:mb-4">
          {product.description}
        </p>
        <ul className="space-y-2">
          {product.features?.slice(0, 3).map((feature, i) => (
            <li key={i} className="flex items-center text-xs text-muted-foreground">
              <Check className="mr-2 h-3 w-3 text-green-500" />
              {feature}
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter className="p-3 md:p-6 pt-0 md:pt-0">
        <Button onClick={handleAddToCart} className="w-full gap-2 h-8 md:h-10 text-[10px] md:text-sm">
          <ShoppingCart className="h-3 w-3 md:h-4 md:w-4" />
          <span className="hidden xs:inline">Adicionar</span>
          <span className="xs:hidden">Add</span>
        </Button>
      </CardFooter>
      </Card>
    </motion.div>
  );
}
