
import type { Metadata } from 'next';
import { menuData, categories } from '@/data/menuData';
import type { MenuItemType, DishCategory } from '@/types';
import { generateMenuDescription } from '@/ai/flows/generate-menu-descriptions';
import { Container } from '@/components/layout/Container';
import { 
  UtensilsCrossed, 
  CakeSlice, 
  Coffee,
  Soup,
  Sparkles,
  Salad,
  Wheat,
  CookingPot,
  IceCream2,
  WrapText,
  Vegan, 
  Beef, 
  Pizza,
  Sandwich as SandwichIcon, 
  GlassWater,
  IceCream,
  Blend 
} from 'lucide-react';
import type { ReactElement } from 'react';
import { MenuClientView } from '@/components/menu/MenuClientView';

export const metadata: Metadata = {
  title: 'Our Menu | Sandesh Food Hub',
  description: 'Explore the extensive and delicious pure vegetarian (no onion, no garlic) menu at Sandesh Food Hub. From tantalizing starters to hearty main courses and delightful desserts, find your new favorite dish.',
};

async function getMenuItemsWithDescriptions(): Promise<MenuItemType[]> {
  const processedMenuData = await Promise.all(
    menuData.map(async (item) => {
      if (!item.description) {
        // The generateMenuDescription flow now handles errors internally and provides a fallback
        const aiResponse = await generateMenuDescription({
          dishName: item.name,
          ingredients: item.ingredients.join(', '),
          cuisine: item.aiPromptDetails.cuisine,
          restaurantType: item.aiPromptDetails.restaurantType,
        });
        // aiResponse will always have a description, either AI-generated or a fallback from the flow.
        return { ...item, description: aiResponse.description };
      }
      return item; // Return item as is if description already exists
    })
  );
  return processedMenuData;
}

const categoryIcons: Record<DishCategory, ReactElement> = {
  'South Indian': <UtensilsCrossed className="h-5 w-5 md:h-6 md:w-6 text-primary" />,
  'Starters': <Sparkles className="h-5 w-5 md:h-6 md:w-6 text-primary" />,
  'Salad & Raita': <Salad className="h-5 w-5 md:h-6 md:w-6 text-primary" />,
  'Indian Breads': <Wheat className="h-5 w-5 md:h-6 md:w-6 text-primary" />,
  'Rice & Dal': <CookingPot className="h-5 w-5 md:h-6 md:w-6 text-primary" />,
  'Indian Gravy': <Soup className="h-5 w-5 md:h-6 md:w-6 text-primary" />,
  'Chaat': <IceCream2 className="h-5 w-5 md:h-6 md:w-6 text-primary" />, 
  'Momo & Roll': <WrapText className="h-5 w-5 md:h-6 md:w-6 text-primary" />,
  'Noodles': <Vegan className="h-5 w-5 md:h-6 md:w-6 text-primary" />, 
  'Burger': <Beef className="h-5 w-5 md:h-6 md:w-6 text-primary" />, 
  'Pizza': <Pizza className="h-5 w-5 md:h-6 md:w-6 text-primary" />,
  'Sandwich': <SandwichIcon className="h-5 w-5 md:h-6 md:w-6 text-primary" />,
  'Tea & Coffee': <Coffee className="h-5 w-5 md:h-6 md:w-6 text-primary" />,
  'Lassi': <GlassWater className="h-5 w-5 md:h-6 md:w-6 text-primary" />,
  'Ice Cream': <IceCream className="h-5 w-5 md:h-6 md:w-6 text-primary" />,
  'Shakes': <Blend className="h-5 w-5 md:h-6 md:w-6 text-primary" />, 
};

export default async function MenuPage() {
  const itemsWithDescriptions = await getMenuItemsWithDescriptions();

  return (
    <div className="bg-background py-8 md:py-12">
      <Container>
        <header className="text-center mb-4 md:mb-6 sticky top-16 md:top-20 z-30 bg-background/90 backdrop-blur-sm -mx-4 px-4 py-3">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-primary">
            Our Delicious Menu
          </h1>
          <p className="mt-2 md:mt-3 max-w-lg md:max-w-2xl mx-auto text-sm sm:text-base md:text-lg text-foreground/70">
            Explore a variety of pure vegetarian dishes (no onion, no garlic), crafted with passion and the freshest ingredients at Sandesh Food Hub.
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
