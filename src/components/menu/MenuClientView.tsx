
'use client';

import { useState } from 'react';
import type { MenuItemType, DishCategory } from '@/types';
import { MenuItemCard } from '@/components/menu/MenuItemCard';
import { MenuListItem } from '@/components/menu/MenuListItem'; // New import
import { Separator } from '@/components/ui/separator';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import type { ReactElement } from 'react';
import Image from 'next/image';

interface MenuClientViewProps {
  initialItems: MenuItemType[];
  categories: DishCategory[];
  categoryIcons: Record<DishCategory, ReactElement>;
}

export function MenuClientView({ initialItems, categories, categoryIcons }: MenuClientViewProps) {
  const [cartItems, setCartItems] = useState<Record<string, number>>({});
  const [selectedItemForDialog, setSelectedItemForDialog] = useState<MenuItemType | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

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

  const categorizedItems: Record<string, MenuItemType[]> = {};
  
  categories.forEach(cat => {
    categorizedItems[cat] = [];
  });

  initialItems.forEach(item => {
    if (categorizedItems[item.category]) {
        categorizedItems[item.category].push(item);
    } else {
        console.warn(`Item ${item.name} has category '${item.category}' not listed in main categories array.`);
    }
  });

  return (
    <>
      {categories.map((category) => (
        categorizedItems[category] && categorizedItems[category].length > 0 && (
          <section key={category} id={category.toLowerCase().replace(/\s+/g, '-')} className="mb-12">
            <div className="flex items-center gap-4 mb-6">
              {categoryIcons[category]}
              <h2 className="text-3xl font-bold text-primary">{category}</h2>
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
            {/* We render MenuItemCard directly here which includes its own padding and structure */}
             <MenuItemCard
                item={selectedItemForDialog}
                quantityInCart={cartItems[selectedItemForDialog.id] || 0}
                onUpdateQuantity={(newQuantity) => handleUpdateQuantity(selectedItemForDialog.id, newQuantity)}
              />
          </DialogContent>
        </Dialog>
      )}
    </>
  );
}
