
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
import { MenuClientView } from '@/components/menu/MenuClientView';

export const metadata: Metadata = {
  title: 'Our Menu | Sandesh Food Hub',
  description: 'Explore the extensive and delicious pure vegetarian (no onion, no garlic) menu at Sandesh Food Hub. From tantalizing starters to hearty main courses and delightful desserts, find your new favorite dish.',
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
          return { ...item, description: `A delightful ${item.name.toLowerCase()} made with fresh, pure vegetarian ingredients (no onion, no garlic).` };
        }
      }
      return item;
    })
  );
  return processedMenuData;
}

const categoryIcons: Record<DishCategory, ReactElement> = {
  'South Indian': <UtensilsCrossed className="h-6 w-6 md:h-8 md:w-8 text-primary" />,
  'Starters': <Sparkles className="h-6 w-6 md:h-8 md:w-8 text-primary" />,
  'Salad & Raita': <Salad className="h-6 w-6 md:h-8 md:w-8 text-primary" />,
  'Indian Breads': <Wheat className="h-6 w-6 md:h-8 md:w-8 text-primary" />,
  'Rice & Dal': <CookingPot className="h-6 w-6 md:h-8 md:w-8 text-primary" />,
  'Indian Gravy': <Soup className="h-6 w-6 md:h-8 md:w-8 text-primary" />,
  'Chaat': <IceCream2 className="h-6 w-6 md:h-8 md:w-8 text-primary" />, 
  'Momo & Roll': <WrapText className="h-6 w-6 md:h-8 md:w-8 text-primary" />,
  'Noodles': <Vegan className="h-6 w-6 md:h-8 md:w-8 text-primary" />, 
  'Burger': <Beef className="h-6 w-6 md:h-8 md:w-8 text-primary" />, 
  'Pizza': <Pizza className="h-6 w-6 md:h-8 md:w-8 text-primary" />,
  'Sandwich': <SandwichIcon className="h-6 w-6 md:h-8 md:w-8 text-primary" />,
  'Tea & Coffee': <Coffee className="h-6 w-6 md:h-8 md:w-8 text-primary" />,
  'Lassi': <GlassWater className="h-6 w-6 md:h-8 md:w-8 text-primary" />,
  'Ice Cream': <IceCream className="h-6 w-6 md:h-8 md:w-8 text-primary" />,
  'Shakes': <Blend className="h-6 w-6 md:h-8 md:w-8 text-primary" />, 
};

export default async function MenuPage() {
  const itemsWithDescriptions = await getMenuItemsWithDescriptions();

  return (
    <div className="bg-background py-8 md:py-12">
      <Container>
        <header className="text-center mb-4 md:mb-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-primary">
            Our Delicious Menu
          </h1>
          <p className="mt-3 md:mt-4 max-w-lg md:max-w-2xl mx-auto text-sm sm:text-base md:text-lg text-foreground/70">
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
