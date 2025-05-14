import type { MenuItemType, DishCategory } from '@/types';

export const menuData: MenuItemType[] = [
  {
    id: 'app1',
    name: 'Crispy Spring Rolls',
    ingredients: ['Cabbage', 'Carrot', 'Bell Pepper', 'Spring Onion', 'Noodles', 'Sweet Chilli Sauce'],
    price: '₹280',
    category: 'Appetizers',
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'spring rolls asian',
    aiPromptDetails: { cuisine: 'Indo-Chinese', restaurantType: 'pure vegetarian' }
  },
  {
    id: 'app2',
    name: 'Paneer Tikka Shashlik',
    ingredients: ['Paneer', 'Capsicum', 'Onion', 'Tomato', 'Yogurt', 'Spices'],
    price: '₹350',
    category: 'Appetizers',
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'paneer tikka indian',
    aiPromptDetails: { cuisine: 'Indian', restaurantType: 'pure vegetarian' }
  },
  {
    id: 'main1',
    name: 'Dal Makhani',
    ingredients: ['Black Lentils', 'Kidney Beans', 'Butter', 'Cream', 'Tomato Puree', 'Spices'],
    price: '₹420',
    category: 'Main Courses',
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'dal makhani indian',
    aiPromptDetails: { cuisine: 'Indian', restaurantType: 'pure vegetarian' }
  },
  {
    id: 'main2',
    name: 'Palak Paneer',
    ingredients: ['Spinach', 'Paneer', 'Onion', 'Tomato', 'Garlic', 'Ginger', 'Spices'],
    price: '₹400',
    category: 'Main Courses',
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'palak paneer indian',
    aiPromptDetails: { cuisine: 'Indian', restaurantType: 'pure vegetarian' }
  },
  {
    id: 'main3',
    name: 'Vegetable Biryani',
    ingredients: ['Basmati Rice', 'Mixed Vegetables', 'Yogurt', 'Saffron', 'Mint', 'Coriander', 'Spices'],
    price: '₹450',
    category: 'Main Courses',
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'veg biryani indian',
    aiPromptDetails: { cuisine: 'Indian', restaurantType: 'pure vegetarian' }
  },
  {
    id: 'dessert1',
    name: 'Gulab Jamun',
    ingredients: ['Milk Solids (Khoya)', 'Sugar Syrup', 'Cardamom', 'Rose Water'],
    price: '₹180',
    category: 'Desserts',
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'gulab jamun indian',
    aiPromptDetails: { cuisine: 'Indian', restaurantType: 'pure vegetarian' }
  },
  {
    id: 'dessert2',
    name: 'Chocolate Lava Cake',
    ingredients: ['Dark Chocolate', 'Butter', 'Eggs', 'Sugar', 'Flour'],
    price: '₹220',
    category: 'Desserts',
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'chocolate cake dessert',
    aiPromptDetails: { cuisine: 'Continental', restaurantType: 'pure vegetarian' }
  },
  {
    id: 'bev1',
    name: 'Masala Chai',
    ingredients: ['Black Tea', 'Milk', 'Sugar', 'Ginger', 'Cardamom', 'Cloves'],
    price: '₹120',
    category: 'Beverages',
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'masala chai tea',
    aiPromptDetails: { cuisine: 'Indian', restaurantType: 'pure vegetarian' }
  },
  {
    id: 'bev2',
    name: 'Fresh Lime Soda',
    ingredients: ['Lime Juice', 'Soda Water', 'Sugar', 'Salt', 'Mint Leaves'],
    price: '₹150',
    category: 'Beverages',
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'lime soda drink',
    aiPromptDetails: { cuisine: 'Universal', restaurantType: 'pure vegetarian' }
  }
];

export const categories: DishCategory[] = ['Appetizers', 'Main Courses', 'Desserts', 'Beverages'];
