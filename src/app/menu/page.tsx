
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
        try {
          // The AI flow itself now handles API errors and returns a default output
          const aiResponse = await generateMenuDescription({
            dishName: item.name,
            ingredients: item.ingredients.join(', '),
            cuisine: item.aiPromptDetails.cuisine,
            restaurantType: item.aiPromptDetails.restaurantType,
          });
          // Ensure aiResponse and aiResponse.description exist
          const description = aiResponse?.description || `A delightful ${item.name.toLowerCase()} made with fresh, pure vegetarian ingredients (no onion, no garlic). Explore more about this dish!`;
          return { ...item, description: description };
        } catch (pageLevelError) {
          // This catch is an additional safety net if generateMenuDescription itself throws an unexpected error
          console.error(`Critical error processing AI description for ${item.name} on menu page (falling back):`, pageLevelError);
          return { 
            ...item, 
            description: `A delightful ${item.name.toLowerCase()} made with fresh, pure vegetarian ingredients (no onion, no garlic). Explore more about this dish!` 
          };
        }
      }
      return item;
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
        <header className="text-center mb-8 md:mb-12">
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
