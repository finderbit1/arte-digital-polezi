import { Card, CardContent } from "@/components/ui/card";

interface CategoryCardProps {
  title: string;
  description: string;
  itemCount: number;
  gradient: string;
  icon: React.ReactNode;
}

const CategoryCard = ({ title, description, itemCount, gradient, icon }: CategoryCardProps) => {
  return (
    <Card className="group cursor-pointer overflow-hidden border-0 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105">
      <div className={`h-32 ${gradient} relative flex items-center justify-center`}>
        <div className="text-white opacity-80 group-hover:opacity-100 transition-opacity">
          {icon}
        </div>
        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-colors" />
      </div>
      <CardContent className="p-6">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground text-sm mb-3">{description}</p>
        <p className="text-xs text-accent font-medium">
          {itemCount} {itemCount === 1 ? 'item' : 'itens'}
        </p>
      </CardContent>
    </Card>
  );
};

export default CategoryCard;