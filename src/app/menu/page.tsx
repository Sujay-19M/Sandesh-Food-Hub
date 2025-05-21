
import type { Metadata } from 'next';
import { menuData, categories } from '@/data/menuData';
import type { MenuItemType, DishCategory } from '@/types';
import { generateMenuDescription } from '@/ai/flows/generate-menu-descriptions';
import { Container } from '@/components/layout/Container';
import { 
  Leaf, 
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
  Vegan, // Using Vegan for Noodles as a generic food icon
  Beef, // Changed from Burger to Beef to resolve import error
  Pizza,
  Sandwich as SandwichIcon, // Renaming to avoid conflict if any
  GlassWater,
  IceCream,
  Milkshake
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
          // Fallback description or leave as is
          return { ...item, description: `A delightful ${item.name.toLowerCase()} made with fresh, pure vegetarian ingredients (no onion, no garlic).` };
        }
      }
      return item;
    })
  );
  return processedMenuData;
}

const categoryIcons: Record<DishCategory, React.ReactElement> = {
  'South Indian': <UtensilsCrossed className="h-8 w-8 text-primary" />,
  'Starters': <Sparkles className="h-8 w-8 text-primary" />,
  'Salad & Raita': <Salad className="h-8 w-8 text-primary" />,
  'Indian Breads': <Wheat className="h-8 w-8 text-primary" />,
  'Rice & Dal': <CookingPot className="h-8 w-8 text-primary" />,
  'Indian Gravy': <Soup className="h-8 w-8 text-primary" />,
  'Chaat': <IceCream2 className="h-8 w-8 text-primary" />, // Changed from IceCream
  'Momo & Roll': <WrapText className="h-8 w-8 text-primary" />,
  'Noodles': <Vegan className="h-8 w-8 text-primary" />, // Using Vegan as a placeholder
  'Burger': <Beef className="h-8 w-8 text-primary" />, // Changed from Burger to Beef
  'Pizza': <Pizza className="h-8 w-8 text-primary" />,
  'Sandwich': <SandwichIcon className="h-8 w-8 text-primary" />,
  'Tea & Coffee': <Coffee className="h-8 w-8 text-primary" />,
  'Lassi': <GlassWater className="h-8 w-8 text-primary" />,
  'Ice Cream': <IceCream className="h-8 w-8 text-primary" />,
  'Shakes': <Milkshake className="h-8 w-8 text-primary" />,
   // Fallback for categories removed in the previous step, can be removed if not needed
  'Appetizers': <Leaf className="h-8 w-8 text-primary" />, // Kept for safety, though new categories should cover these
  'Main Courses': <UtensilsCrossed className="h-8 w-8 text-primary" />, // Kept for safety
  'Desserts': <CakeSlice className="h-8 w-8 text-primary" />, // Kept for safety
  'Beverages': <Coffee className="h-8 w-8 text-primary" />, // Kept for safety
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
