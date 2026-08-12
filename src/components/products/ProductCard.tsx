import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, ShoppingCart, MessageCircle } from "lucide-react";
import { useCart } from "@/hooks/use-cart";
import { toast } from "sonner";
import { motion } from "framer-motion";

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
    window.open(`https://wa.me/5500000000000?text=Olá, gostaria de saber mais sobre o produto: ${product.name}`, '_blank');
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
      <CardHeader>
        <div className="flex items-center justify-between">
          <Badge variant="secondary" className="bg-secondary text-secondary-foreground">{product.category || 'Geral'}</Badge>
          <span className="text-lg font-bold text-yellow-500">
            R$ {Number(product.price).toFixed(2)}
          </span>
        </div>
        <CardTitle className="mt-2 line-clamp-1 group-hover:text-yellow-500 transition-colors text-white">{product.name}</CardTitle>
        <Button 
          variant="outline" 
          size="sm" 
          className="mt-2 w-fit gap-2 h-8 text-xs" 
          onClick={handleSupportClick}
        >
          <MessageCircle className="h-3.5 w-3.5" />
          Suporte
        </Button>
      </CardHeader>
      <CardContent className="flex-1">
        <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
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
      <CardFooter>
        <Button onClick={handleAddToCart} className="w-full gap-2">
          <ShoppingCart className="h-4 w-4" />
          Adicionar ao Carrinho
        </Button>
      </CardFooter>
      </Card>
    </motion.div>
  );
}
