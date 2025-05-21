
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
    <Card className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 h-full bg-card text-card-foreground border-border hover:border-secondary"> {/* Card with mint green hover border */}
      <div className="relative h-56 w-full">
        <Image
          src={item.image}
          alt={item.name}
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-300 group-hover:scale-105"
          data-ai-hint={item.dataAiHint}
        />
      </div>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start gap-2">
          <CardTitle className="text-xl font-semibold text-primary">{item.name}</CardTitle> {/* Green title */}
          <Badge variant="default" className="text-sm bg-accent text-accent-foreground whitespace-nowrap">{item.price}</Badge> {/* Orange badge */}
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <CardDescription className="text-sm text-foreground/80 leading-relaxed"> {/* Dark brown text */}
          {item.description || 'Delicious and freshly prepared.'}
        </CardDescription>
        {item.ingredients.length > 0 && (
          <p className="mt-2 text-xs text-muted-foreground"> {/* Muted on card is dark brown */}
            Ingredients: {item.ingredients.join(', ')}
          </p>
        )}
      </CardContent>
      <CardFooter className="flex justify-between items-center pt-4">
         <Badge variant="outline" className="border-primary/50 text-primary"> {/* Green outline badge */}
           <Utensils className="w-3 h-3 mr-1" /> {item.category}
         </Badge>
        {quantityInCart === 0 ? (
          <Button onClick={handleAddToCart} size="sm" className="bg-accent hover:bg-secondary text-accent-foreground hover:text-secondary-foreground"> {/* Orange button, Mint hover */}
            <ShoppingCart className="mr-2 h-4 w-4" /> Add
          </Button>
        ) : (
          <div className="flex items-center gap-1 sm:gap-2">
            <Button onClick={handleDecrement} variant="outline" size="icon" className="h-8 w-8 border-primary text-primary hover:bg-primary/10 hover:text-primary-foreground"> {/* Green outline */}
              <MinusCircle className="h-4 w-4" />
            </Button>
            <span className="text-base sm:text-lg font-medium w-6 sm:w-8 text-center text-foreground">{quantityInCart}</span> {/* Dark brown text */}
            <Button onClick={handleIncrement} variant="outline" size="icon" className="h-8 w-8 border-primary text-primary hover:bg-primary/10 hover:text-primary-foreground" disabled={quantityInCart >= 100}> {/* Green outline */}
              <PlusCircle className="h-4 w-4" />
            </Button>
          </div>
        )}
      </CardFooter>
    </Card>
  );
}
