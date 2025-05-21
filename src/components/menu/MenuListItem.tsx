
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
    e.stopPropagation(); 
    if (quantityInCart < 100) {
      onUpdateQuantity(quantityInCart + 1);
    }
  };

  const handleDecrement = (e: React.MouseEvent) => {
    e.stopPropagation(); 
    onUpdateQuantity(quantityInCart - 1);
  };

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation(); 
    onUpdateQuantity(1);
  };

  return (
    <div 
      className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4 p-3 md:p-4 rounded-lg hover:bg-card/50 transition-colors"
    >
      <div className="flex-grow cursor-pointer group w-full sm:w-auto" onClick={onItemClick}>
        <h3 className="text-base md:text-lg font-semibold text-primary group-hover:text-accent transition-colors">{item.name}</h3>
        <p className="text-xs md:text-sm text-muted-foreground mt-0.5 md:mt-1 line-clamp-2">
          {item.description || 'Delicious and freshly prepared.'}
        </p>
        <Badge variant="outline" className="mt-1 md:mt-2 border-primary/50 text-primary text-xs">
           <Utensils className="w-2.5 h-2.5 md:w-3 md:h-3 mr-1" /> {item.category}
        </Badge>
      </div>

      <div className="flex flex-row sm:flex-col md:flex-row items-center justify-between sm:justify-start md:items-center gap-2 md:gap-3 mt-2 sm:mt-0 flex-shrink-0 w-full sm:w-auto md:w-auto">
        <Badge variant="default" className="text-sm md:text-base bg-accent text-accent-foreground whitespace-nowrap px-2.5 py-0.5 md:px-3 md:py-1 order-1 sm:order-none">
          {item.price}
        </Badge>
        
        <div className="flex items-center gap-1 md:gap-2 order-3 sm:order-none">
          {quantityInCart === 0 ? (
            <Button onClick={handleAddToCart} size="sm" className="bg-accent hover:bg-secondary text-accent-foreground hover:text-secondary-foreground h-8 md:h-9 px-2.5 md:px-3 text-xs md:text-sm">
              <ShoppingCart className="mr-1 md:mr-2 h-3.5 w-3.5 md:h-4 md:w-4" /> Add
            </Button>
          ) : (
            <div className="flex items-center gap-1">
              <Button onClick={handleDecrement} variant="outline" size="icon" className="h-7 w-7 md:h-8 md:w-8 border-primary text-primary hover:bg-primary/10 hover:text-primary-foreground">
                <MinusCircle className="h-3.5 w-3.5 md:h-4 md:w-4" />
              </Button>
              <span className="text-base md:text-lg font-medium w-7 md:w-8 text-center text-foreground">{quantityInCart}</span>
              <Button onClick={handleIncrement} variant="outline" size="icon" className="h-7 w-7 md:h-8 md:w-8 border-primary text-primary hover:bg-primary/10 hover:text-primary-foreground" disabled={quantityInCart >= 100}>
                <PlusCircle className="h-3.5 w-3.5 md:h-4 md:w-4" />
              </Button>
            </div>
          )}
        </div>
         <Button 
            variant="ghost" 
            size="icon" 
            onClick={onItemClick} 
            className="text-primary hover:text-accent hover:bg-accent/10 h-7 w-7 md:h-8 md:w-8 order-2 sm:order-none"
            aria-label="View details"
          >
            <Info className="h-4 w-4 md:h-5 md:w-5" />
        </Button>
      </div>
    </div>
  );
}
