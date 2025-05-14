import type { Metadata } from 'next';
import { menuData, categories } from '@/data/menuData';
import type { MenuItemType, DishCategory } from '@/types';
import { generateMenuDescription } from '@/ai/flows/generate-menu-descriptions';
import { MenuItemCard } from '@/components/menu/MenuItemCard';
import { Container } from '@/components/layout/Container';
import { Separator } from '@/components/ui/separator';
import { Leaf, UtensilsCrossed, CakeSlice, Coffee } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Our Menu | Veggie Delights',
  description: 'Explore the extensive and delicious pure vegetarian menu at Veggie Delights. From tantalizing appetizers to hearty main courses and delightful desserts, find your new favorite dish.',
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

  const categorizedItems: Record<DishCategory, MenuItemType[]> = {
    'Appetizers': [],
    'Main Courses': [],
    'Desserts': [],
    'Beverages': [],
  };

  itemsWithDescriptions.forEach(item => {
    categorizedItems[item.category].push(item);
  });

  return (
    <div className="bg-background py-12">
      <Container>
        <header className="text-center mb-12">
          <h1 className="text-4xl font-extrabold tracking-tight text-primary sm:text-5xl">
            Our Delicious Menu
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/70">
            Explore a variety of pure vegetarian dishes, crafted with passion and the freshest ingredients.
          </p>
        </header>

        {categories.map((category) => (
          categorizedItems[category].length > 0 && (
            <section key={category} id={category.toLowerCase().replace(' ', '-')} className="mb-16">
              <div className="flex items-center gap-4 mb-8">
                {categoryIcons[category]}
                <h2 className="text-3xl font-bold text-primary">{category}</h2>
              </div>
              <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {categorizedItems[category].map((item) => (
                  <MenuItemCard key={item.id} item={item} />
                ))}
              </div>
              {categories.indexOf(category) < categories.length -1 && <Separator className="my-12" />}
            </section>
          )
        ))}
      </Container>
    </div>
  );
}
