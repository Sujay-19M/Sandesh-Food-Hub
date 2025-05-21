
import type { MenuItemType, DishCategory } from '@/types';

export const categories: DishCategory[] = [
  'South Indian',
  'Starters',
  'Salad & Raita',
  'Indian Breads',
  'Rice & Dal',
  'Indian Gravy',
  'Chaat',
  'Momo & Roll',
  'Noodles',
  'Burger',
  'Pizza',
  'Sandwich',
  'Tea & Coffee',
  'Lassi',
  'Ice Cream',
  'Shakes',
];

export const menuData: MenuItemType[] = [
  // South Indian
  {
    id: 'south-indian-1',
    name: 'Medu Vada (2 pcs)',
    price: '₹50',
    category: 'South Indian',
    ingredients: ['Urad Dal', 'Spices', 'Coconut Chutney', 'Sambar'],
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'medu vada',
    aiPromptDetails: { cuisine: 'South Indian', restaurantType: 'pure vegetarian (no onion no garlic)' }
  },
  {
    id: 'south-indian-2',
    name: 'Upma',
    price: '₹50',
    category: 'South Indian',
    ingredients: ['Semolina', 'Vegetables', 'Spices'],
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'upma breakfast',
    aiPromptDetails: { cuisine: 'South Indian', restaurantType: 'pure vegetarian (no onion no garlic)' }
  },
  {
    id: 'south-indian-3',
    name: 'Idly (2 pcs)',
    price: '₹50',
    category: 'South Indian',
    ingredients: ['Rice Batter', 'Urad Dal', 'Sambar', 'Coconut Chutney'],
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'idli sambar',
    aiPromptDetails: { cuisine: 'South Indian', restaurantType: 'pure vegetarian (no onion no garlic)' }
  },
  {
    id: 'south-indian-4',
    name: 'Masala Uttapam',
    price: '₹80',
    category: 'South Indian',
    ingredients: ['Rice Batter', 'Vegetables', 'Spices'],
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'uttapam masala',
    aiPromptDetails: { cuisine: 'South Indian', restaurantType: 'pure vegetarian (no onion no garlic)' }
  },
  {
    id: 'south-indian-5',
    name: 'Special Uttapam',
    price: '₹120',
    category: 'South Indian',
    ingredients: ['Rice Batter', 'Special Toppings', 'Vegetables', 'Spices'],
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'special uttapam',
    aiPromptDetails: { cuisine: 'South Indian', restaurantType: 'pure vegetarian (no onion no garlic)' }
  },
  {
    id: 'south-indian-6',
    name: 'Plain Dosa',
    price: '₹60',
    category: 'South Indian',
    ingredients: ['Rice Batter', 'Urad Dal', 'Sambar', 'Coconut Chutney'],
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'plain dosa',
    aiPromptDetails: { cuisine: 'South Indian', restaurantType: 'pure vegetarian (no onion no garlic)' }
  },
  {
    id: 'south-indian-7',
    name: 'Masala Dosa',
    price: '₹80',
    category: 'South Indian',
    ingredients: ['Rice Batter', 'Potato Masala', 'Sambar', 'Coconut Chutney'],
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'masala dosa',
    aiPromptDetails: { cuisine: 'South Indian', restaurantType: 'pure vegetarian (no onion no garlic)' }
  },
  {
    id: 'south-indian-8',
    name: 'Paneer Cheese Dosa',
    price: '₹120',
    category: 'South Indian',
    ingredients: ['Rice Batter', 'Paneer', 'Cheese', 'Sambar', 'Coconut Chutney'],
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'paneer dosa',
    aiPromptDetails: { cuisine: 'South Indian', restaurantType: 'pure vegetarian (no onion no garlic)' }
  },
  {
    id: 'south-indian-9',
    name: 'Chilly Paneer Dosa',
    price: '₹150',
    category: 'South Indian',
    ingredients: ['Rice Batter', 'Chilly Paneer Filling', 'Sambar', 'Coconut Chutney'],
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'chilli paneer',
    aiPromptDetails: { cuisine: 'South Indian Fusion', restaurantType: 'pure vegetarian (no onion no garlic)' }
  },
  {
    id: 'south-indian-10',
    name: 'Chowmein Dosa',
    price: '₹120',
    category: 'South Indian',
    ingredients: ['Rice Batter', 'Vegetable Chowmein Filling', 'Sambar', 'Coconut Chutney'],
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'chowmein dosa',
    aiPromptDetails: { cuisine: 'South Indian Fusion', restaurantType: 'pure vegetarian (no onion no garlic)' }
  },
  {
    id: 'south-indian-11',
    name: 'Lemon Rice',
    price: '₹50',
    category: 'South Indian',
    ingredients: ['Rice', 'Lemon Juice', 'Peanuts', 'Spices'],
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'lemon rice',
    aiPromptDetails: { cuisine: 'South Indian', restaurantType: 'pure vegetarian (no onion no garlic)' }
  },
  {
    id: 'south-indian-12',
    name: 'Curd Rice',
    price: '₹50',
    category: 'South Indian',
    ingredients: ['Rice', 'Yogurt', 'Spices', 'Pomegranate'],
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'curd rice',
    aiPromptDetails: { cuisine: 'South Indian', restaurantType: 'pure vegetarian (no onion no garlic)' }
  },

  // Starters
  {
    id: 'starters-1',
    name: 'French Fries',
    price: '₹80',
    category: 'Starters',
    ingredients: ['Potato', 'Salt'],
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'french fries',
    aiPromptDetails: { cuisine: 'Continental', restaurantType: 'pure vegetarian (no onion no garlic)' }
  },
  {
    id: 'starters-2',
    name: 'Cheese French Fries',
    price: '₹120',
    category: 'Starters',
    ingredients: ['Potato', 'Cheese Sauce', 'Salt'],
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'cheese fries',
    aiPromptDetails: { cuisine: 'Continental', restaurantType: 'pure vegetarian (no onion no garlic)' }
  },
  {
    id: 'starters-3',
    name: 'Paneer Pakoda',
    price: '₹100',
    category: 'Starters',
    ingredients: ['Paneer', 'Gram Flour', 'Spices'],
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'paneer pakora',
    aiPromptDetails: { cuisine: 'Indian', restaurantType: 'pure vegetarian (no onion no garlic)' }
  },
  {
    id: 'starters-4',
    name: 'Paneer Popcorn',
    price: '₹80',
    category: 'Starters',
    ingredients: ['Paneer', 'Breadcrumbs', 'Spices'],
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'paneer popcorn',
    aiPromptDetails: { cuisine: 'Indian Fusion', restaurantType: 'pure vegetarian (no onion no garlic)' }
  },
  {
    id: 'starters-5',
    name: 'Veg Manchurian (Dry/Gravy)',
    price: '₹120',
    category: 'Starters',
    ingredients: ['Mixed Vegetables', 'Soy Sauce', 'Corn Flour', 'Spices'],
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'veg manchurian',
    aiPromptDetails: { cuisine: 'Indo-Chinese', restaurantType: 'pure vegetarian (no onion no garlic)' }
  },
  {
    id: 'starters-6',
    name: 'Crispy Chilly Babycorn',
    price: '₹120',
    category: 'Starters',
    ingredients: ['Babycorn', 'Bell Peppers', 'Soy Sauce', 'Chilli Sauce'],
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'chilli babycorn',
    aiPromptDetails: { cuisine: 'Indo-Chinese', restaurantType: 'pure vegetarian (no onion no garlic)' }
  },
  {
    id: 'starters-7',
    name: 'Chilly Paneer (Dry/Gravy)',
    price: '₹150',
    category: 'Starters',
    ingredients: ['Paneer', 'Bell Peppers', 'Soy Sauce', 'Chilli Sauce'],
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'chilli paneer',
    aiPromptDetails: { cuisine: 'Indo-Chinese', restaurantType: 'pure vegetarian (no onion no garlic)' }
  },
  {
    id: 'starters-8',
    name: 'Chilly Mushroom (Dry/Gravy)',
    price: '₹150',
    category: 'Starters',
    ingredients: ['Mushroom', 'Bell Peppers', 'Soy Sauce', 'Chilli Sauce'],
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'chilli mushroom',
    aiPromptDetails: { cuisine: 'Indo-Chinese', restaurantType: 'pure vegetarian (no onion no garlic)' }
  },

  // Salad & Raita
  {
    id: 'salad-raita-1',
    name: 'Green Salad',
    price: '₹40',
    category: 'Salad & Raita',
    ingredients: ['Cucumber', 'Tomato', 'Carrot', 'Lettuce', 'Lemon Dressing'],
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'green salad',
    aiPromptDetails: { cuisine: 'Healthy', restaurantType: 'pure vegetarian (no onion no garlic)' }
  },
  {
    id: 'salad-raita-2',
    name: 'Veg Raita',
    price: '₹60',
    category: 'Salad & Raita',
    ingredients: ['Yogurt', 'Cucumber', 'Tomato', 'Spices'],
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'veg raita',
    aiPromptDetails: { cuisine: 'Indian', restaurantType: 'pure vegetarian (no onion no garlic)' }
  },

  // Indian Breads
  {
    id: 'indian-breads-1',
    name: 'Roti',
    price: '₹5',
    category: 'Indian Breads',
    ingredients: ['Whole Wheat Flour'],
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'roti bread',
    aiPromptDetails: { cuisine: 'Indian', restaurantType: 'pure vegetarian (no onion no garlic)' }
  },
  {
    id: 'indian-breads-2',
    name: 'Butter Roti',
    price: '₹10',
    category: 'Indian Breads',
    ingredients: ['Whole Wheat Flour', 'Butter'],
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'butter roti',
    aiPromptDetails: { cuisine: 'Indian', restaurantType: 'pure vegetarian (no onion no garlic)' }
  },
  {
    id: 'indian-breads-3',
    name: 'Laccha Paratha',
    price: '₹30',
    category: 'Indian Breads',
    ingredients: ['Whole Wheat Flour', 'Ghee'],
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'lachha paratha',
    aiPromptDetails: { cuisine: 'Indian', restaurantType: 'pure vegetarian (no onion no garlic)' }
  },
  {
    id: 'indian-breads-4',
    name: 'Naan (Fried)',
    price: '₹25',
    category: 'Indian Breads',
    ingredients: ['Refined Flour', 'Yogurt'],
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'naan bread',
    aiPromptDetails: { cuisine: 'Indian', restaurantType: 'pure vegetarian (no onion no garlic)' }
  },
  {
    id: 'indian-breads-5',
    name: 'Aloo Paratha',
    price: '₹50',
    category: 'Indian Breads',
    ingredients: ['Whole Wheat Flour', 'Potato Stuffing', 'Spices'],
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'aloo paratha',
    aiPromptDetails: { cuisine: 'Indian', restaurantType: 'pure vegetarian (no onion no garlic)' }
  },
  {
    id: 'indian-breads-6',
    name: 'Aloo Cheese Paratha',
    price: '₹70',
    category: 'Indian Breads',
    ingredients: ['Whole Wheat Flour', 'Potato Stuffing', 'Cheese', 'Spices'],
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'cheese paratha',
    aiPromptDetails: { cuisine: 'Indian', restaurantType: 'pure vegetarian (no onion no garlic)' }
  },
  {
    id: 'indian-breads-7',
    name: 'Paneer Paratha',
    price: '₹70',
    category: 'Indian Breads',
    ingredients: ['Whole Wheat Flour', 'Paneer Stuffing', 'Spices'],
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'paneer paratha',
    aiPromptDetails: { cuisine: 'Indian', restaurantType: 'pure vegetarian (no onion no garlic)' }
  },
  {
    id: 'indian-breads-8',
    name: 'Mix Veg Paratha',
    price: '₹80',
    category: 'Indian Breads',
    ingredients: ['Whole Wheat Flour', 'Mixed Vegetable Stuffing', 'Spices'],
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'mix veg',
    aiPromptDetails: { cuisine: 'Indian', restaurantType: 'pure vegetarian (no onion no garlic)' }
  },
  {
    id: 'indian-breads-9',
    name: 'Chole Bhature',
    price: '₹80',
    category: 'Indian Breads',
    ingredients: ['Refined Flour', 'Chickpeas', 'Spices'],
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'chole bhature',
    aiPromptDetails: { cuisine: 'Indian', restaurantType: 'pure vegetarian (no onion no garlic)' }
  },

  // Rice & Dal
  {
    id: 'rice-dal-1',
    name: 'Plain Rice',
    price: '₹50',
    category: 'Rice & Dal',
    ingredients: ['Basmati Rice'],
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'plain rice',
    aiPromptDetails: { cuisine: 'Indian', restaurantType: 'pure vegetarian (no onion no garlic)' }
  },
  {
    id: 'rice-dal-2',
    name: 'Jeera Rice',
    price: '₹60',
    category: 'Rice & Dal',
    ingredients: ['Basmati Rice', 'Cumin Seeds', 'Ghee'],
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'jeera rice',
    aiPromptDetails: { cuisine: 'Indian', restaurantType: 'pure vegetarian (no onion no garlic)' }
  },
  {
    id: 'rice-dal-3',
    name: 'Fried Rice',
    price: '₹80',
    category: 'Rice & Dal',
    ingredients: ['Rice', 'Mixed Vegetables', 'Soy Sauce'],
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'fried rice',
    aiPromptDetails: { cuisine: 'Indo-Chinese', restaurantType: 'pure vegetarian (no onion no garlic)' }
  },
  {
    id: 'rice-dal-4',
    name: 'Pulao',
    price: '₹90',
    category: 'Rice & Dal',
    ingredients: ['Basmati Rice', 'Mixed Vegetables', 'Spices'],
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'veg pulao',
    aiPromptDetails: { cuisine: 'Indian', restaurantType: 'pure vegetarian (no onion no garlic)' }
  },
  {
    id: 'rice-dal-5',
    name: 'Biryani',
    price: '₹90',
    category: 'Rice & Dal',
    ingredients: ['Basmati Rice', 'Mixed Vegetables', 'Biryani Spices', 'Saffron'],
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'veg biryani',
    aiPromptDetails: { cuisine: 'Indian', restaurantType: 'pure vegetarian (no onion no garlic)' }
  },
  {
    id: 'rice-dal-6',
    name: 'Dal Fry',
    price: '₹70',
    category: 'Rice & Dal',
    ingredients: ['Yellow Lentils', 'Spices', 'Herbs'],
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'dal fry',
    aiPromptDetails: { cuisine: 'Indian', restaurantType: 'pure vegetarian (no onion no garlic)' }
  },
  {
    id: 'rice-dal-7',
    name: 'Punjabi Dal Tadka',
    price: '₹100',
    category: 'Rice & Dal',
    ingredients: ['Mixed Lentils', 'Spices', 'Ghee Tadka'],
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'dal tadka',
    aiPromptDetails: { cuisine: 'Indian', restaurantType: 'pure vegetarian (no onion no garlic)' }
  },
  {
    id: 'rice-dal-8',
    name: 'Dal Makhani',
    price: '₹150',
    category: 'Rice & Dal',
    ingredients: ['Black Lentils', 'Kidney Beans', 'Butter', 'Cream'],
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'dal makhani',
    aiPromptDetails: { cuisine: 'Indian', restaurantType: 'pure vegetarian (no onion no garlic)' }
  },

  // Indian Gravy
  {
    id: 'indian-gravy-1',
    name: 'Aloo Jeera',
    price: '₹60',
    category: 'Indian Gravy',
    ingredients: ['Potato', 'Cumin Seeds', 'Spices'],
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'aloo jeera',
    aiPromptDetails: { cuisine: 'Indian', restaurantType: 'pure vegetarian (no onion no garlic)' }
  },
  {
    id: 'indian-gravy-2',
    name: 'Chana Masala',
    price: '₹80',
    category: 'Indian Gravy',
    ingredients: ['Chickpeas', 'Tomato Gravy', 'Spices'],
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'chana masala',
    aiPromptDetails: { cuisine: 'Indian', restaurantType: 'pure vegetarian (no onion no garlic)' }
  },
  {
    id: 'indian-gravy-3',
    name: 'Aloo Dum',
    price: '₹90',
    category: 'Indian Gravy',
    ingredients: ['Potato', 'Tomato Gravy', 'Spices'],
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'aloo dum',
    aiPromptDetails: { cuisine: 'Indian', restaurantType: 'pure vegetarian (no onion no garlic)' }
  },
  {
    id: 'indian-gravy-4',
    name: 'Aloo Matar',
    price: '₹100',
    category: 'Indian Gravy',
    ingredients: ['Potato', 'Green Peas', 'Tomato Gravy', 'Spices'],
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'aloo matar',
    aiPromptDetails: { cuisine: 'Indian', restaurantType: 'pure vegetarian (no onion no garlic)' }
  },
  {
    id: 'indian-gravy-5',
    name: 'Mix Veg',
    price: '₹150',
    category: 'Indian Gravy',
    ingredients: ['Mixed Vegetables', 'Tomato Gravy', 'Spices'],
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'mix veg',
    aiPromptDetails: { cuisine: 'Indian', restaurantType: 'pure vegetarian (no onion no garlic)' }
  },
  {
    id: 'indian-gravy-6',
    name: 'Paneer Butter Masala',
    price: '₹160',
    category: 'Indian Gravy',
    ingredients: ['Paneer', 'Tomato Butter Gravy', 'Cream', 'Spices'],
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'paneer butter',
    aiPromptDetails: { cuisine: 'Indian', restaurantType: 'pure vegetarian (no onion no garlic)' }
  },
  {
    id: 'indian-gravy-7',
    name: 'Kadai Paneer',
    price: '₹170',
    category: 'Indian Gravy',
    ingredients: ['Paneer', 'Bell Peppers', 'Kadai Masala', 'Tomato Gravy'],
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'kadai paneer',
    aiPromptDetails: { cuisine: 'Indian', restaurantType: 'pure vegetarian (no onion no garlic)' }
  },
  {
    id: 'indian-gravy-8',
    name: 'Matar Paneer',
    price: '₹170',
    category: 'Indian Gravy',
    ingredients: ['Paneer', 'Green Peas', 'Tomato Gravy', 'Spices'],
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'matar paneer',
    aiPromptDetails: { cuisine: 'Indian', restaurantType: 'pure vegetarian (no onion no garlic)' }
  },
  {
    id: 'indian-gravy-9',
    name: 'Shahi Paneer',
    price: '₹180',
    category: 'Indian Gravy',
    ingredients: ['Paneer', 'Creamy Cashew Gravy', 'Saffron', 'Spices'],
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'shahi paneer',
    aiPromptDetails: { cuisine: 'Indian', restaurantType: 'pure vegetarian (no onion no garlic)' }
  },
  {
    id: 'indian-gravy-10',
    name: 'Balti Paneer',
    price: '₹180',
    category: 'Indian Gravy',
    ingredients: ['Paneer', 'Mixed Vegetables', 'Balti Spices', 'Tomato Gravy'],
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'balti paneer',
    aiPromptDetails: { cuisine: 'Indian', restaurantType: 'pure vegetarian (no onion no garlic)' }
  },

  // Chaat
  {
    id: 'chaat-1',
    name: 'Papri Chaat',
    price: '₹60',
    category: 'Chaat',
    ingredients: ['Crispy Papri', 'Potato', 'Chickpeas', 'Yogurt', 'Chutneys', 'Spices'],
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'papri chaat',
    aiPromptDetails: { cuisine: 'Indian Street Food', restaurantType: 'pure vegetarian (no onion no garlic)' }
  },
  {
    id: 'chaat-2',
    name: 'Basket Chaat',
    price: '₹60',
    category: 'Chaat',
    ingredients: ['Edible Basket', 'Mixed Sprouts', 'Potato', 'Yogurt', 'Chutneys', 'Spices'],
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'basket chaat',
    aiPromptDetails: { cuisine: 'Indian Street Food', restaurantType: 'pure vegetarian (no onion no garlic)' }
  },
  {
    id: 'chaat-3',
    name: 'Samosa Chaat',
    price: '₹60',
    category: 'Chaat',
    ingredients: ['Samosa', 'Chickpea Curry', 'Yogurt', 'Chutneys', 'Spices'],
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'samosa chaat',
    aiPromptDetails: { cuisine: 'Indian Street Food', restaurantType: 'pure vegetarian (no onion no garlic)' }
  },
  {
    id: 'chaat-4',
    name: 'Dahi Vada',
    price: '₹60',
    category: 'Chaat',
    ingredients: ['Lentil Fritters', 'Yogurt', 'Chutneys', 'Spices'],
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'dahi vada',
    aiPromptDetails: { cuisine: 'Indian Street Food', restaurantType: 'pure vegetarian (no onion no garlic)' }
  },
  {
    id: 'chaat-5',
    name: 'Pav Bhaji',
    price: '₹60',
    category: 'Chaat',
    ingredients: ['Mixed Vegetable Curry', 'Butter', 'Pav (Bread Rolls)'],
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'pav bhaji',
    aiPromptDetails: { cuisine: 'Indian Street Food', restaurantType: 'pure vegetarian (no onion no garlic)' }
  },

  // Momo & Roll
  {
    id: 'momo-roll-1',
    name: 'Momo',
    price: '₹60',
    category: 'Momo & Roll',
    ingredients: ['Vegetable Filling', 'Dough', 'Spicy Dip'],
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'veg momos',
    aiPromptDetails: { cuisine: 'Indo-Tibetan', restaurantType: 'pure vegetarian (no onion no garlic)' }
  },
  {
    id: 'momo-roll-2',
    name: 'Paneer Roll',
    price: '₹60',
    category: 'Momo & Roll',
    ingredients: ['Paneer Filling', 'Wrap', 'Sauces', 'Vegetables'],
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'paneer roll',
    aiPromptDetails: { cuisine: 'Indian Street Food', restaurantType: 'pure vegetarian (no onion no garlic)' }
  },

  // Noodles
  {
    id: 'noodles-1',
    name: 'Veg Noodles',
    price: '₹80',
    category: 'Noodles',
    ingredients: ['Noodles', 'Mixed Vegetables', 'Soy Sauce', 'Spices'],
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'veg noodles',
    aiPromptDetails: { cuisine: 'Indo-Chinese', restaurantType: 'pure vegetarian (no onion no garlic)' }
  },
  {
    id: 'noodles-2',
    name: 'Special Noodles',
    price: '₹120',
    category: 'Noodles',
    ingredients: ['Noodles', 'Mixed Vegetables', 'Paneer', 'Mushroom', 'Special Sauce'],
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'special noodles',
    aiPromptDetails: { cuisine: 'Indo-Chinese', restaurantType: 'pure vegetarian (no onion no garlic)' }
  },

  // Burger
  {
    id: 'burger-1',
    name: 'Veg Cheese Burger',
    price: '₹60',
    category: 'Burger',
    ingredients: ['Vegetable Patty', 'Cheese Slice', 'Bun', 'Lettuce', 'Tomato', 'Sauces'],
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'veg burger',
    aiPromptDetails: { cuisine: 'Fast Food', restaurantType: 'pure vegetarian (no onion no garlic)' }
  },
  {
    id: 'burger-2',
    name: 'Paneer Burger',
    price: '₹80',
    category: 'Burger',
    ingredients: ['Paneer Patty', 'Bun', 'Lettuce', 'Tomato', 'Sauces'],
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'paneer burger',
    aiPromptDetails: { cuisine: 'Fast Food', restaurantType: 'pure vegetarian (no onion no garlic)' }
  },

  // Pizza
  {
    id: 'pizza-1',
    name: 'Margherita Pizza',
    price: '₹150',
    category: 'Pizza',
    ingredients: ['Pizza Base', 'Tomato Sauce', 'Mozzarella Cheese', 'Basil'],
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'margherita pizza',
    aiPromptDetails: { cuisine: 'Italian', restaurantType: 'pure vegetarian (no onion no garlic)' }
  },
  {
    id: 'pizza-2',
    name: 'Veg Pizza',
    price: '₹160',
    category: 'Pizza',
    ingredients: ['Pizza Base', 'Tomato Sauce', 'Mixed Vegetables', 'Mozzarella Cheese'],
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'veg pizza',
    aiPromptDetails: { cuisine: 'Italian', restaurantType: 'pure vegetarian (no onion no garlic)' }
  },
  {
    id: 'pizza-3',
    name: 'Paneer Barbeque Pizza',
    price: '₹170',
    category: 'Pizza',
    ingredients: ['Pizza Base', 'Barbeque Sauce', 'Paneer Tikka', 'Bell Peppers', 'Mozzarella Cheese'],
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'paneer pizza',
    aiPromptDetails: { cuisine: 'Italian Fusion', restaurantType: 'pure vegetarian (no onion no garlic)' }
  },

  // Sandwich
  {
    id: 'sandwich-1',
    name: 'Veg Sandwich',
    price: '₹40',
    category: 'Sandwich',
    ingredients: ['Bread', 'Cucumber', 'Tomato', 'Lettuce', 'Chutney'],
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'veg sandwich',
    aiPromptDetails: { cuisine: 'Cafe', restaurantType: 'pure vegetarian (no onion no garlic)' }
  },
  {
    id: 'sandwich-2',
    name: 'Veg Cheese Sandwich',
    price: '₹80',
    category: 'Sandwich',
    ingredients: ['Bread', 'Cucumber', 'Tomato', 'Cheese Slice', 'Chutney'],
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'cheese sandwich',
    aiPromptDetails: { cuisine: 'Cafe', restaurantType: 'pure vegetarian (no onion no garlic)' }
  },
  {
    id: 'sandwich-3',
    name: 'Paneer Cheese Sandwich',
    price: '₹120',
    category: 'Sandwich',
    ingredients: ['Bread', 'Paneer Filling', 'Cheese Slice', 'Vegetables'],
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'paneer sandwich',
    aiPromptDetails: { cuisine: 'Cafe', restaurantType: 'pure vegetarian (no onion no garlic)' }
  },

  // Tea & Coffee
  {
    id: 'tea-coffee-1',
    name: 'Black Tea',
    price: '₹20',
    category: 'Tea & Coffee',
    ingredients: ['Tea Leaves', 'Hot Water'],
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'black tea',
    aiPromptDetails: { cuisine: 'Beverage', restaurantType: 'pure vegetarian (no onion no garlic)' }
  },
  {
    id: 'tea-coffee-2',
    name: 'Milk Tea',
    price: '₹30',
    category: 'Tea & Coffee',
    ingredients: ['Tea Leaves', 'Milk', 'Sugar'],
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'milk tea',
    aiPromptDetails: { cuisine: 'Beverage', restaurantType: 'pure vegetarian (no onion no garlic)' }
  },
  {
    id: 'tea-coffee-3',
    name: 'Black Coffee',
    price: '₹30',
    category: 'Tea & Coffee',
    ingredients: ['Coffee Powder', 'Hot Water'],
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'black coffee',
    aiPromptDetails: { cuisine: 'Beverage', restaurantType: 'pure vegetarian (no onion no garlic)' }
  },
  {
    id: 'tea-coffee-4',
    name: 'Milk Coffee',
    price: '₹40',
    category: 'Tea & Coffee',
    ingredients: ['Coffee Powder', 'Milk', 'Sugar'],
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'milk coffee',
    aiPromptDetails: { cuisine: 'Beverage', restaurantType: 'pure vegetarian (no onion no garlic)' }
  },
  {
    id: 'tea-coffee-5',
    name: 'Cold Coffee',
    price: '₹110',
    category: 'Tea & Coffee',
    ingredients: ['Coffee', 'Milk', 'Sugar', 'Ice Cream', 'Chocolate Syrup'],
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'cold coffee',
    aiPromptDetails: { cuisine: 'Beverage', restaurantType: 'pure vegetarian (no onion no garlic)' }
  },

  // Lassi
  {
    id: 'lassi-1',
    name: 'Lassi',
    price: '₹50',
    category: 'Lassi',
    ingredients: ['Yogurt', 'Sugar', 'Cardamom'],
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'sweet lassi',
    aiPromptDetails: { cuisine: 'Indian Beverage', restaurantType: 'pure vegetarian (no onion no garlic)' }
  },
  {
    id: 'lassi-2',
    name: 'Special Lassi',
    price: '₹100',
    category: 'Lassi',
    ingredients: ['Yogurt', 'Sugar', 'Malai', 'Dry Fruits', 'Rose Syrup'],
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'special lassi',
    aiPromptDetails: { cuisine: 'Indian Beverage', restaurantType: 'pure vegetarian (no onion no garlic)' }
  },
  {
    id: 'lassi-3',
    name: 'Fresh Lemon Soda',
    price: '₹40',
    category: 'Lassi', // Often grouped with Lassi or general beverages
    ingredients: ['Lemon Juice', 'Soda Water', 'Sugar', 'Salt'],
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'lemon soda',
    aiPromptDetails: { cuisine: 'Beverage', restaurantType: 'pure vegetarian (no onion no garlic)' }
  },

  // Ice Cream
  {
    id: 'ice-cream-1',
    name: 'Vanilla',
    price: '₹50',
    category: 'Ice Cream',
    ingredients: ['Milk', 'Cream', 'Sugar', 'Vanilla Extract'],
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'vanilla icecream',
    aiPromptDetails: { cuisine: 'Dessert', restaurantType: 'pure vegetarian (no onion no garlic)' }
  },
  {
    id: 'ice-cream-2',
    name: 'Mango',
    price: '₹70',
    category: 'Ice Cream',
    ingredients: ['Milk', 'Cream', 'Sugar', 'Mango Pulp'],
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'mango icecream',
    aiPromptDetails: { cuisine: 'Dessert', restaurantType: 'pure vegetarian (no onion no garlic)' }
  },
  {
    id: 'ice-cream-3',
    name: 'Chocolate',
    price: '₹70',
    category: 'Ice Cream',
    ingredients: ['Milk', 'Cream', 'Sugar', 'Cocoa Powder'],
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'chocolate icecream',
    aiPromptDetails: { cuisine: 'Dessert', restaurantType: 'pure vegetarian (no onion no garlic)' }
  },
  {
    id: 'ice-cream-4',
    name: 'Butterscotch',
    price: '₹70',
    category: 'Ice Cream',
    ingredients: ['Milk', 'Cream', 'Sugar', 'Butterscotch Essence', 'Praline'],
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'butterscotch icecream',
    aiPromptDetails: { cuisine: 'Dessert', restaurantType: 'pure vegetarian (no onion no garlic)' }
  },

  // Shakes
  {
    id: 'shakes-1',
    name: 'Classic Vanilla Shake',
    price: '₹80',
    category: 'Shakes',
    ingredients: ['Vanilla Ice Cream', 'Milk', 'Sugar'],
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'vanilla milkshake',
    aiPromptDetails: { cuisine: 'Beverage', restaurantType: 'pure vegetarian (no onion no garlic)' }
  },
  {
    id: 'shakes-2',
    name: 'Chocolate Shake',
    price: '₹100',
    category: 'Shakes',
    ingredients: ['Chocolate Ice Cream', 'Milk', 'Chocolate Syrup'],
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'chocolate milkshake',
    aiPromptDetails: { cuisine: 'Beverage', restaurantType: 'pure vegetarian (no onion no garlic)' }
  },
  {
    id: 'shakes-3',
    name: 'Mango Shake',
    price: '₹100',
    category: 'Shakes',
    ingredients: ['Mango Pulp', 'Milk', 'Sugar', 'Ice Cream'],
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'mango shake',
    aiPromptDetails: { cuisine: 'Beverage', restaurantType: 'pure vegetarian (no onion no garlic)' }
  },
  {
    id: 'shakes-4',
    name: 'Butterscotch Shake',
    price: '₹100',
    category: 'Shakes',
    ingredients: ['Butterscotch Ice Cream', 'Milk', 'Butterscotch Syrup'],
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'butterscotch shake',
    aiPromptDetails: { cuisine: 'Beverage', restaurantType: 'pure vegetarian (no onion no garlic)' }
  },
  {
    id: 'shakes-5',
    name: 'Oreo Milk Shake',
    price: '₹120',
    category: 'Shakes',
    ingredients: ['Oreo Cookies', 'Vanilla Ice Cream', 'Milk', 'Chocolate Syrup'],
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'oreo shake',
    aiPromptDetails: { cuisine: 'Beverage', restaurantType: 'pure vegetarian (no onion no garlic)' }
  },
];
