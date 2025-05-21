
'use client';

import type { MenuItemType } from '@/types';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { PlusCircle, MinusCircle, ShoppingCart, Utensils, Info } from 'lucide-react';

interface MenuListItemProps {
  item: MenuItemType;
  quantityInCart: number;
  onUpdateQuantity: (newQuantity: number) => void;
  onItemClick: () => void;
}

export function MenuListItem({ item, quantityInCart, onUpdateQuantity, onItemClick }: MenuListItemProps) {
  const handleIncrement = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent triggering onItemClick
    if (quantityInCart < 100) {
      onUpdateQuantity(quantityInCart + 1);
    }
  };

  const handleDecrement = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent triggering onItemClick
    onUpdateQuantity(quantityInCart - 1);
  };

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent triggering onItemClick
    onUpdateQuantity(1);
  };

  return (
    <div 
      className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-4 rounded-lg hover:bg-card/50 transition-colors"
    >
      <div className="flex-grow cursor-pointer group" onClick={onItemClick}>
        <h3 className="text-lg font-semibold text-primary group-hover:text-accent transition-colors">{item.name}</h3>
        <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
          {item.description || 'Delicious and freshly prepared.'}
        </p>
        <Badge variant="outline" className="mt-2 border-primary/50 text-primary text-xs">
           <Utensils className="w-3 h-3 mr-1" /> {item.category}
        </Badge>
      </div>

      <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 mt-3 sm:mt-0 flex-shrink-0 w-full sm:w-auto">
        <Badge variant="default" className="text-base bg-accent text-accent-foreground whitespace-nowrap px-3 py-1 self-start sm:self-center">
          {item.price}
        </Badge>
        
        <div className="flex items-center gap-2 self-start sm:self-center">
          {quantityInCart === 0 ? (
            <Button onClick={handleAddToCart} size="sm" className="bg-accent hover:bg-secondary text-accent-foreground hover:text-secondary-foreground w-full sm:w-auto">
              <ShoppingCart className="mr-2 h-4 w-4" /> Add
            </Button>
          ) : (
            <div className="flex items-center gap-1">
              <Button onClick={handleDecrement} variant="outline" size="icon" className="h-8 w-8 border-primary text-primary hover:bg-primary/10 hover:text-primary-foreground">
                <MinusCircle className="h-4 w-4" />
              </Button>
              <span className="text-lg font-medium w-8 text-center text-foreground">{quantityInCart}</span>
              <Button onClick={handleIncrement} variant="outline" size="icon" className="h-8 w-8 border-primary text-primary hover:bg-primary/10 hover:text-primary-foreground" disabled={quantityInCart >= 100}>
                <PlusCircle className="h-4 w-4" />
              </Button>
            </div>
          )}
        </div>
         <Button 
            variant="ghost" 
            size="icon" 
            onClick={onItemClick} 
            className="text-primary hover:text-accent hover:bg-accent/10 h-8 w-8 self-start sm:self-center"
            aria-label="View details"
          >
            <Info className="h-5 w-5" />
        </Button>
      </div>
    </div>
  );
}
