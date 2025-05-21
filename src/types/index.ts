
export type DishCategory =
  | 'South Indian'
  | 'Starters'
  | 'Salad & Raita'
  | 'Indian Breads'
  | 'Rice & Dal'
  | 'Indian Gravy'
  | 'Chaat'
  | 'Momo & Roll'
  | 'Noodles'
  | 'Burger'
  | 'Pizza'
  | 'Sandwich'
  | 'Tea & Coffee'
  | 'Lassi'
  | 'Ice Cream'
  | 'Shakes';

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
    restaurantType: 'pure vegetarian (no onion no garlic)';
  };
  dataAiHint?: string;
}
