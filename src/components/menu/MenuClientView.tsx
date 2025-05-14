'use client';

import { useState } from 'react';
import type { MenuItemType, DishCategory } from '@/types';
import { MenuItemCard } from '@/components/menu/MenuItemCard';
import { Separator } from '@/components/ui/separator';
import type { ReactElement } from 'react';


interface MenuClientViewProps {
  initialItems: MenuItemType[];
  categories: DishCategory[];
  categoryIcons: Record<DishCategory, ReactElement>;
}

export function MenuClientView({ initialItems, categories, categoryIcons }: MenuClientViewProps) {
  const [cartItems, setCartItems] = useState<Record<string, number>>({});

  const handleUpdateQuantity = (itemId: string, newQuantity: number) => {
    setCartItems(prev => {
      const updatedCart = { ...prev };
      if (newQuantity <= 0) {
        delete updatedCart[itemId];
        return updatedCart;
      }
      if (newQuantity > 100) {
        updatedCart[itemId] = 100;
      } else {
        updatedCart[itemId] = newQuantity;
      }
      return updatedCart;
    });
  };

  const categorizedItems: Record<string, MenuItemType[]> = {};
  
  categories.forEach(cat => {
    categorizedItems[cat] = [];
  });

  initialItems.forEach(item => {
    if (categorizedItems[item.category]) {
        categorizedItems[item.category].push(item);
    } else {
        // Optionally handle items with categories not in the main `categories` list
        // For now, they might not be displayed if not in `categories`
        console.warn(`Item ${item.name} has category '${item.category}' not listed in main categories array.`);
        // To ensure they are displayed even if not in `categories` prop:
        // if (!categorizedItems[item.category]) categorizedItems[item.category] = [];
        // categorizedItems[item.category].push(item);
    }
  });

  return (
    <>
      {categories.map((category) => (
        categorizedItems[category] && categorizedItems[category].length > 0 && (
          <section key={category} id={category.toLowerCase().replace(/\s+/g, '-')} className="mb-16">
            <div className="flex items-center gap-4 mb-8">
              {categoryIcons[category]}
              <h2 className="text-3xl font-bold text-primary">{category}</h2>
            </div>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {categorizedItems[category].map((item) => (
                <MenuItemCard
                  key={item.id}
                  item={item}
                  quantityInCart={cartItems[item.id] || 0}
                  onUpdateQuantity={(newQuantity) => handleUpdateQuantity(item.id, newQuantity)}
                />
              ))}
            </div>
            {categories.indexOf(category) < categories.length - 1 && 
             categorizedItems[categories[categories.indexOf(category) + 1]]?.length > 0 && (
              <Separator className="my-12" />
            )}
          </section>
        )
      ))}
    </>
  );
}
