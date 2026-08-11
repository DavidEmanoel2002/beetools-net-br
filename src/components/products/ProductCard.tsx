import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, ShoppingCart } from "lucide-react";
import { useCart } from "@/hooks/use-cart";
import { toast } from "sonner";

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

  return (
    <Card className="flex flex-col overflow-hidden transition-all hover:shadow-lg bg-card border-border">
      <div className="aspect-video w-full overflow-hidden bg-muted">
        {product.image_url ? (
          <img
            src={product.image_url}
            alt={product.name}
            className="h-full w-full object-cover transition-transform hover:scale-105"
          />
        ) : (
          <div className="h-full w-full flex items-center justify-center text-muted-foreground">
            No image
          </div>
        )}
      </div>
      <CardHeader>
        <div className="flex items-center justify-between">
          <Badge variant="secondary" className="bg-secondary text-secondary-foreground">{product.category || 'Geral'}</Badge>
          <span className="text-lg font-bold text-primary">
            R$ {Number(product.price).toFixed(2)}
          </span>
        </div>
        <CardTitle className="mt-2 line-clamp-1">{product.name}</CardTitle>
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
  );
}
