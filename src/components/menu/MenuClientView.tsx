
'use client';

import { useState, useMemo, type ReactElement, useEffect } from 'react';
import type { MenuItemType, DishCategory } from '@/types';
import { MenuItemCard } from '@/components/menu/MenuItemCard';
import { MenuListItem } from '@/components/menu/MenuListItem';
import { Separator } from '@/components/ui/separator';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { MessageCircle, ShoppingCart, Search, XCircle } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';

interface MenuClientViewProps {
  initialItems: MenuItemType[];
  categories: DishCategory[];
  categoryIcons: Record<DishCategory, ReactElement>;
}

const RESTAURANT_WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '919332353778';

const parsePrice = (priceStr: string): number => {
  if (!priceStr) return 0;
  return parseFloat(priceStr.replace('₹', '').trim());
};

export function MenuClientView({ initialItems, categories, categoryIcons }: MenuClientViewProps) {
  const [cartItems, setCartItems] = useState<Record<string, number>>({});
  const [selectedItemForDialog, setSelectedItemForDialog] = useState<MenuItemType | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const filteredItems = useMemo(() => {
    if (!searchQuery.trim()) {
      return initialItems;
    }
    const lowercasedQuery = searchQuery.toLowerCase();
    return initialItems.filter(item =>
      item.name.toLowerCase().includes(lowercasedQuery) ||
      (item.description && item.description.toLowerCase().includes(lowercasedQuery)) ||
      item.ingredients.some(ingredient => ingredient.toLowerCase().includes(lowercasedQuery)) ||
      item.category.toLowerCase().includes(lowercasedQuery)
    );
  }, [initialItems, searchQuery]);

  const handleUpdateQuantity = (itemId: string, newQuantity: number) => {
    setCartItems(prev => {
      const updatedCart = { ...prev };
      if (newQuantity <= 0) {
        delete updatedCart[itemId];
      } else if (newQuantity > 100) {
        updatedCart[itemId] = 100;
      } else {
        updatedCart[itemId] = newQuantity;
      }
      return updatedCart;
    });
  };

  const handleOpenDialog = (item: MenuItemType) => {
    setSelectedItemForDialog(item);
    setIsDialogOpen(true);
  };

  const totalQuantityInCart = useMemo(() => {
    if (!isMounted) return 0; // Avoid hydration mismatch
    return Object.values(cartItems).reduce((sum, quantity) => sum + quantity, 0);
  }, [cartItems, isMounted]);

  const totalPrice = useMemo(() => {
    if (!isMounted) return 0; // Avoid hydration mismatch
    return Object.entries(cartItems).reduce((acc, [itemId, quantity]) => {
      const item = initialItems.find(i => i.id === itemId); // Use initialItems for price lookup
      if (item) {
        return acc + (parsePrice(item.price) * quantity);
      }
      return acc;
    }, 0);
  }, [cartItems, initialItems, isMounted]);

  const handleOrderNow = () => {
    if (totalQuantityInCart === 0) return;

    let message = "Hi, I’d like to order these items from your menu:\n\n";
    Object.entries(cartItems).forEach(([itemId, quantity]) => {
      const item = initialItems.find(i => i.id === itemId);
      if (item) {
        message += `${item.name} (₹${parsePrice(item.price).toFixed(2)}) x ${quantity}\n`;
      }
    });
    message += `\nTotal Price: ₹${totalPrice.toFixed(2)}`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${RESTAURANT_WHATSAPP_NUMBER.replace(/\s+/g, '')}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  const categorizedItems = useMemo(() => {
    const items: Record<string, MenuItemType[]> = {};
    categories.forEach(cat => {
      items[cat] = [];
    });

    filteredItems.forEach(item => {
      if (items[item.category]) {
        items[item.category].push(item);
      }
    });
    return items;
  }, [filteredItems, categories]);
  
  const noItemsFound = filteredItems.length === 0 && searchQuery.trim() !== '';

  return (
    <>
      <div className="mb-6 md:mb-8 sticky top-16 md:top-20 z-30 bg-background/90 backdrop-blur-sm py-3 -mx-4 px-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Search menu items..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 pr-10 w-full bg-card border-border focus:ring-accent focus:border-accent text-sm md:text-base"
          />
          {searchQuery && (
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-2 top-1/2 -translate-y-1/2 h-7 w-7 text-muted-foreground hover:text-primary"
              onClick={() => setSearchQuery('')}
            >
              <XCircle className="h-4 w-4 md:h-5 md:w-5" />
              <span className="sr-only">Clear search</span>
            </Button>
          )}
        </div>
      </div>

      {noItemsFound ? (
        <div className="text-center py-10">
          <Search className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
          <p className="text-lg text-foreground/80">No items match your search for "{searchQuery}".</p>
          <p className="text-sm text-muted-foreground mt-2">Try a different keyword or clear the search.</p>
        </div>
      ) : (
        categories.map((category) => (
          categorizedItems[category] && categorizedItems[category].length > 0 && (
            <section key={category} id={category.toLowerCase().replace(/\s+/g, '-')} className="mb-10 md:mb-12">
              <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
                {React.cloneElement(categoryIcons[category], { className: cn(categoryIcons[category].props.className, "h-5 w-5 md:h-6 md:w-6") })}
                <h2 className="text-xl md:text-2xl font-semibold text-primary">{category}</h2>
              </div>
              <div className="space-y-3 md:space-y-4">
                {categorizedItems[category].map((item, index) => (
                  <div key={item.id}>
                    <MenuListItem
                      item={item}
                      quantityInCart={cartItems[item.id] || 0}
                      onUpdateQuantity={(newQuantity) => handleUpdateQuantity(item.id, newQuantity)}
                      onItemClick={() => handleOpenDialog(item)}
                    />
                    {index < categorizedItems[category].length - 1 && <Separator className="my-3 md:my-4"/>}
                  </div>
                ))}
              </div>
            </section>
          )
        ))
      )}

      {selectedItemForDialog && (
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogContent className="sm:max-w-[425px] md:max-w-[600px] lg:max-w-[700px] p-0 max-h-[90vh] flex flex-col">
            <MenuItemCard
              item={selectedItemForDialog}
              quantityInCart={cartItems[selectedItemForDialog.id] || 0}
              onUpdateQuantity={(newQuantity) => handleUpdateQuantity(selectedItemForDialog.id, newQuantity)}
            />
          </DialogContent>
        </Dialog>
      )}

      {isMounted && totalQuantityInCart > 0 && (
        <div className="fixed bottom-0 left-0 right-0 md:bottom-4 md:right-4 md:left-auto bg-card p-3 md:p-4 rounded-t-lg md:rounded-lg shadow-2xl border-t md:border border-primary z-40 max-w-full md:max-w-xs">
          <h3 className="text-lg font-semibold text-primary mb-2 text-center md:text-left">Your Order Summary</h3>
          <div className="flex justify-between items-center text-sm mb-1">
            <span className="text-foreground/80">Total Items:</span>
            <span className="font-medium text-foreground">{totalQuantityInCart}</span>
          </div>
          <div className="flex justify-between items-center text-sm mb-3">
            <span className="text-foreground/80">Total Price:</span>
            <span className="font-semibold text-accent">₹{totalPrice.toFixed(2)}</span>
          </div>
          <Button 
            onClick={handleOrderNow} 
            className="w-full bg-accent hover:bg-accent/90 text-accent-foreground text-sm md:text-base py-2.5"
            aria-label="Order on WhatsApp"
          >
            <MessageCircle className="mr-1.5 md:mr-2 h-4 w-4 md:h-5 md:w-5" /> Order on WhatsApp
          </Button>
        </div>
      )}
    </>
  );
}
