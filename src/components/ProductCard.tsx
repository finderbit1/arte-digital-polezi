import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Heart, ShoppingCart } from "lucide-react";

interface ProductCardProps {
  title: string;
  price: number;
  originalPrice?: number;
  category: string;
  image: string;
  isNew?: boolean;
  isFeatured?: boolean;
}

const ProductCard = ({ 
  title, 
  price, 
  originalPrice, 
  category, 
  image, 
  isNew, 
  isFeatured 
}: ProductCardProps) => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(price);
  };

  return (
    <Card className="group cursor-pointer overflow-hidden border-0 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105">
      <div className="relative overflow-hidden bg-muted">
        <img 
          src={image} 
          alt={title}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
        />
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {isNew && (
            <Badge className="bg-green-500 hover:bg-green-500">
              Novo
            </Badge>
          )}
          {isFeatured && (
            <Badge className="bg-accent hover:bg-accent">
              Destaque
            </Badge>
          )}
        </div>

        {/* Action buttons */}
        <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <Button size="icon" variant="secondary" className="w-8 h-8">
            <Heart className="w-4 h-4" />
          </Button>
        </div>

        {/* Quick add overlay */}
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          <Button size="sm" className="gap-2">
            <ShoppingCart className="w-4 h-4" />
            Adicionar ao Carrinho
          </Button>
        </div>
      </div>

      <CardContent className="p-4">
        <p className="text-xs text-accent font-medium mb-1">{category}</p>
        <h3 className="font-semibold mb-2 line-clamp-2 group-hover:text-accent transition-colors">
          {title}
        </h3>
        <div className="flex items-center gap-2">
          <span className="text-lg font-bold">{formatPrice(price)}</span>
          {originalPrice && (
            <span className="text-sm text-muted-foreground line-through">
              {formatPrice(originalPrice)}
            </span>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;