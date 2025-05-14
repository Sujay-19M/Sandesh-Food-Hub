export type DishCategory = 'Appetizers' | 'Main Courses' | 'Desserts' | 'Beverages';

export interface MenuItemType {
  id: string;
  name: string;
  ingredients: string[];
  price: string;
  category: DishCategory;
  image: string;
  description?: string;
  aiPromptDetails: {
    cuisine: string;
    restaurantType: 'pure vegetarian' | 'vegan'; 
  };
  dataAiHint?: string;
}
