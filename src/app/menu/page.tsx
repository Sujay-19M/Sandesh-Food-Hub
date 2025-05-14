import type { Metadata } from 'next';
import { menuData, categories } from '@/data/menuData';
import type { MenuItemType, DishCategory } from '@/types';
import { generateMenuDescription } from '@/ai/flows/generate-menu-descriptions';
import { Container } from '@/components/layout/Container';
import { Leaf, UtensilsCrossed, CakeSlice, Coffee } from 'lucide-react';
import { MenuClientView } from '@/components/menu/MenuClientView'; // New import

export const metadata: Metadata = {
  title: 'Our Menu | Sandesh Food Hub',
  description: 'Explore the extensive and delicious pure vegetarian menu at Sandesh Food Hub. From tantalizing appetizers to hearty main courses and delightful desserts, find your new favorite dish.',
};

async function getMenuItemsWithDescriptions(): Promise<MenuItemType[]> {
  const processedMenuData = await Promise.all(
    menuData.map(async (item) => {
      if (!item.description) {
        try {
          const aiResponse = await generateMenuDescription({
            dishName: item.name,
            ingredients: item.ingredients.join(', '),
            cuisine: item.aiPromptDetails.cuisine,
            restaurantType: item.aiPromptDetails.restaurantType,
          });
          return { ...item, description: aiResponse.description };
        } catch (error) {
          console.error(`Failed to generate description for ${item.name}:`, error);
          // Fallback description or leave as is
          return { ...item, description: `A delightful ${item.name.toLowerCase()} made with fresh ingredients.` };
        }
      }
      return item;
    })
  );
  return processedMenuData;
}

const categoryIcons: Record<DishCategory, React.ReactElement> = {
  'Appetizers': <Leaf className="h-8 w-8 text-primary" />,
  'Main Courses': <UtensilsCrossed className="h-8 w-8 text-primary" />,
  'Desserts': <CakeSlice className="h-8 w-8 text-primary" />,
  'Beverages': <Coffee className="h-8 w-8 text-primary" />,
};

export default async function MenuPage() {
  const itemsWithDescriptions = await getMenuItemsWithDescriptions();

  return (
    <div className="bg-background py-12">
      <Container>
        <header className="text-center mb-12">
          <h1 className="text-4xl font-extrabold tracking-tight text-primary sm:text-5xl">
            Our Delicious Menu
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/70">
            Explore a variety of pure vegetarian dishes, crafted with passion and the freshest ingredients at Sandesh Food Hub.
          </p>
        </header>

        <MenuClientView 
          initialItems={itemsWithDescriptions} 
          categories={categories}
          categoryIcons={categoryIcons}
        />

      </Container>
    </div>
  );
}
