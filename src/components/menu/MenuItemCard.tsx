
'use client';

import Image from 'next/image';
import type { MenuItemType } from '@/types';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Utensils, PlusCircle, MinusCircle, ShoppingCart } from 'lucide-react';

interface MenuItemCardProps {
  item: MenuItemType;
  quantityInCart: number;
  onUpdateQuantity: (newQuantity: number) => void;
}

export function MenuItemCard({ item, quantityInCart, onUpdateQuantity }: MenuItemCardProps) {
  const handleIncrement = () => {
    if (quantityInCart < 100) {
      onUpdateQuantity(quantityInCart + 1);
    }
  };

  const handleDecrement = () => {
    onUpdateQuantity(quantityInCart - 1);
  };

  const handleAddToCart = () => {
    onUpdateQuantity(1);
  };

  return (
    <Card className="flex flex-col overflow-hidden shadow-lg h-full bg-card text-card-foreground border-border">
      <div className="relative h-48 sm:h-56 w-full group">
        <Image
          src={item.image}
          alt={item.name}
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-300 group-hover:scale-105"
          data-ai-hint={item.dataAiHint}
        />
      </div>
      <CardHeader className="pb-2 pt-4 px-4 md:px-6">
        <div className="flex justify-between items-start gap-2">
          <CardTitle className="text-lg md:text-xl font-semibold text-primary">{item.name}</CardTitle>
          <Badge variant="default" className="text-xs md:text-sm bg-accent text-accent-foreground whitespace-nowrap px-2 py-0.5 md:px-2.5">
            {item.price}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="flex-grow px-4 md:px-6 pt-1 pb-3">
        <CardDescription className="text-xs md:text-sm text-foreground/80 leading-relaxed line-clamp-3">
          {item.description || 'Delicious and freshly prepared.'}
        </CardDescription>
        {item.ingredients.length > 0 && (
          <p className="mt-1.5 md:mt-2 text-xs text-muted-foreground">
            Ingredients: {item.ingredients.join(', ')}
          </p>
        )}
      </CardContent>
      <CardFooter className="flex flex-col sm:flex-row justify-between items-center pt-3 md:pt-4 px-4 md:px-6 pb-4 md:pb-6 gap-2 sm:gap-2">
         <Badge variant="outline" className="border-primary/50 text-primary self-start sm:self-center text-xs px-2 py-0.5">
           <Utensils className="w-2.5 h-2.5 md:w-3 md:h-3 mr-1" /> {item.category}
         </Badge>
        {quantityInCart === 0 ? (
          <Button 
            onClick={handleAddToCart} 
            size="sm" 
            className="bg-accent hover:bg-secondary text-accent-foreground hover:text-secondary-foreground w-full sm:w-auto h-8 md:h-9 text-xs md:text-sm"
          >
            <ShoppingCart className="mr-1.5 md:mr-2 h-3.5 w-3.5 md:h-4 md:w-4" /> Add to Cart
          </Button>
        ) : (
          <div className="flex items-center gap-1 sm:gap-1.5 md:gap-2">
            <Button onClick={handleDecrement} variant="outline" size="icon" className="h-7 w-7 md:h-8 md:w-8 border-primary text-primary hover:bg-primary/10 hover:text-primary-foreground">
              <MinusCircle className="h-3.5 w-3.5 md:h-4 md:w-4" />
            </Button>
            <span className="text-sm sm:text-base md:text-lg font-medium w-6 sm:w-7 md:w-8 text-center text-foreground">{quantityInCart}</span>
            <Button onClick={handleIncrement} variant="outline" size="icon" className="h-7 w-7 md:h-8 md:w-8 border-primary text-primary hover:bg-primary/10 hover:text-primary-foreground" disabled={quantityInCart >= 100}>
              <PlusCircle className="h-3.5 w-3.5 md:h-4 md:w-4" />
            </Button>
          </div>
        )}
      </CardFooter>
    </Card>
  );
}
