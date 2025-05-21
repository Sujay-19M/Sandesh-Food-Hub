
'use client';

import { useState, useMemo, type ReactElement } from 'react';
import type { MenuItemType, DishCategory } from '@/types';
import { MenuItemCard } from '@/components/menu/MenuItemCard';
import { MenuListItem } from '@/components/menu/MenuListItem';
import { Separator } from '@/components/ui/separator';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { MessageCircle, ShoppingCart } from 'lucide-react';

interface MenuClientViewProps {
  initialItems: MenuItemType[];
  categories: DishCategory[];
  categoryIcons: Record<DishCategory, ReactElement>;
}

// Ensure this matches the number in UniversalHeader.tsx or is sourced from .env
const RESTAURANT_WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '919332353778';


const parsePrice = (priceStr: string): number => {
  if (!priceStr) return 0;
  return parseFloat(priceStr.replace('₹', '').trim());
};

export function MenuClientView({ initialItems, categories, categoryIcons }: MenuClientViewProps) {
  const [cartItems, setCartItems] = useState<Record<string, number>>({});
  const [selectedItemForDialog, setSelectedItemForDialog] = useState<MenuItemType | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleUpdateQuantity = (itemId: string, newQuantity: number) => {
    setCartItems(prev => {
      const updatedCart = { ...prev };
      if (newQuantity <= 0) {
        delete updatedCart[itemId];
      } else if (newQuantity > 100) { // Max quantity 100
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
    return Object.values(cartItems).reduce((sum, quantity) => sum + quantity, 0);
  }, [cartItems]);

  const totalPrice = useMemo(() => {
    return Object.entries(cartItems).reduce((acc, [itemId, quantity]) => {
      const item = initialItems.find(i => i.id === itemId);
      if (item) {
        return acc + (parsePrice(item.price) * quantity);
      }
      return acc;
    }, 0);
  }, [cartItems, initialItems]);

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

  const categorizedItems: Record<string, MenuItemType[]> = {};
  categories.forEach(cat => {
    categorizedItems[cat] = [];
  });

  initialItems.forEach(item => {
    if (categorizedItems[item.category]) {
      categorizedItems[item.category].push(item);
    } else {
      console.warn(`Item ${item.name} has category '${item.category}' not listed in main categories array.`);
      // Optionally add to a default category or handle as needed
      // if (!categorizedItems['Others']) categorizedItems['Others'] = [];
      // categorizedItems['Others'].push(item);
    }
  });

  return (
    <>
      {categories.map((category) => (
        categorizedItems[category] && categorizedItems[category].length > 0 && (
          <section key={category} id={category.toLowerCase().replace(/\s+/g, '-')} className="mb-12">
            <div className="flex items-center gap-3 md:gap-4 mb-6">
              {categoryIcons[category] || <ShoppingCart className="h-6 w-6 md:h-8 md:w-8 text-primary" /> }
              <h2 className="text-2xl md:text-3xl font-bold text-primary">{category}</h2>
            </div>
            <div className="space-y-4">
              {categorizedItems[category].map((item, index) => (
                <div key={item.id}>
                  <MenuListItem
                    item={item}
                    quantityInCart={cartItems[item.id] || 0}
                    onUpdateQuantity={(newQuantity) => handleUpdateQuantity(item.id, newQuantity)}
                    onItemClick={() => handleOpenDialog(item)}
                  />
                  {index < categorizedItems[category].length - 1 && <Separator className="my-4"/>}
                </div>
              ))}
            </div>
          </section>
        )
      ))}

      {selectedItemForDialog && (
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogContent className="sm:max-w-[425px] md:max-w-[600px] lg:max-w-[800px] p-0 max-h-[90vh] flex flex-col">
            <MenuItemCard
              item={selectedItemForDialog}
              quantityInCart={cartItems[selectedItemForDialog.id] || 0}
              onUpdateQuantity={(newQuantity) => handleUpdateQuantity(selectedItemForDialog.id, newQuantity)}
            />
          </DialogContent>
        </Dialog>
      )}

      {totalQuantityInCart > 0 && (
        <div className="fixed bottom-0 left-0 right-0 md:bottom-4 md:right-4 md:left-auto bg-card p-3 md:p-4 rounded-t-lg md:rounded-lg shadow-2xl border-t md:border border-primary z-40 max-w-full md:max-w-sm">
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
          >
            <MessageCircle className="mr-2 h-4 w-4 md:h-5 md:w-5" /> Order on WhatsApp
          </Button>
        </div>
      )}
    </>
  );
}
