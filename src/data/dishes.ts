
import { Dish, Category } from '@/types/dish';

// Категории блюд
export const categories: Category[] = [
  { id: "all", name: "Все блюда" },
  { id: "pizza", name: "Пицца" },
  { id: "salads", name: "Салаты" },
  { id: "soups", name: "Супы" },
  { id: "main", name: "Горячие блюда" },
  { id: "desserts", name: "Десерты" },
  { id: "drinks", name: "Напитки" }
];

// Список блюд
export const dishes: Dish[] = [
  {
    id: 1,
    name: "Маргарита",
    description: "Классическая итальянская пицца с томатным соусом, моцареллой и свежим базиликом",
    price: 450,
    image: "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?q=80",
    category: "pizza",
    dietary: { vegetarian: true },
    rating: 4.8,
    calories: 850,
    popular: true,
    ingredients: ["Тесто", "Томатный соус", "Сыр моцарелла", "Свежий базилик", "Оливковое масло"]
  },
  {
    id: 2,
    name: "Цезарь с курицей",
    description: "Свежий салат с куриной грудкой, сыром пармезан, гренками и фирменным соусом",
    price: 380,
    image: "https://images.unsplash.com/photo-1512852939750-1305098529bf?q=80",
    category: "salads",
    dietary: {},
    rating: 4.5,
    calories: 420,
    ingredients: ["Листья салата", "Куриная грудка", "Сыр пармезан", "Гренки", "Соус Цезарь"]
  },
  {
    id: 3,
    name: "Грибной крем-суп",
    description: "Нежный крем-суп из свежих шампиньонов со сливками и трюфельным маслом",
    price: 320,
    image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?q=80",
    category: "soups",
    dietary: { vegetarian: true },
    rating: 4.6,
    calories: 380,
    ingredients: ["Шампиньоны", "Лук", "Сливки", "Трюфельное масло", "Зелень"]
  },
  {
    id: 4,
    name: "Тирамису",
    description: "Классический итальянский десерт с маскарпоне, кофе и какао",
    price: 290,
    image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?q=80",
    category: "desserts",
    dietary: { vegetarian: true },
    rating: 4.9,
    calories: 450,
    popular: true,
    ingredients: ["Маскарпоне", "Печенье савоярди", "Кофе", "Какао", "Яйца"]
  },
  {
    id: 5,
    name: "Латте",
    description: "Кофейный напиток с эспрессо и молоком",
    price: 180,
    image: "https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80",
    category: "drinks",
    dietary: { vegetarian: true },
    rating: 4.4,
    calories: 150,
    ingredients: ["Эспрессо", "Молоко"]
  },
  {
    id: 6,
    name: "Карбонара",
    description: "Итальянская паста с беконом, яйцом и сыром пармезан",
    price: 420,
    image: "https://images.unsplash.com/photo-1612874742237-6526221588e3?q=80",
    category: "main",
    dietary: {},
    rating: 4.7,
    calories: 780,
    popular: true,
    ingredients: ["Паста", "Бекон", "Яйцо", "Сыр пармезан", "Чёрный перец"]
  },
  {
    id: 7,
    name: "Греческий салат",
    description: "Традиционный салат с оливками, сыром фета и овощами",
    price: 350,
    image: "https://images.unsplash.com/photo-1522251234667-e22bf6a33fb5?q=80",
    category: "salads",
    dietary: { vegetarian: true },
    rating: 4.3,
    calories: 320,
    ingredients: ["Огурцы", "Помидоры", "Сыр фета", "Оливки", "Оливковое масло"]
  },
  {
    id: 8,
    name: "Борщ",
    description: "Традиционный славянский суп со свеклой, капустой и говядиной",
    price: 340,
    image: "https://images.unsplash.com/photo-1550367363-ea12860cc124?q=80",
    category: "soups",
    dietary: {},
    rating: 4.8,
    calories: 410,
    ingredients: ["Говядина", "Свекла", "Капуста", "Морковь", "Картофель"]
  },
  {
    id: 9,
    name: "Чизкейк",
    description: "Нежный десерт из сливочного сыра на песочной основе",
    price: 310,
    image: "https://images.unsplash.com/photo-1567327613485-fbc7bf196198?q=80",
    category: "desserts",
    dietary: { vegetarian: true },
    rating: 4.7,
    calories: 520,
    discount: 10,
    ingredients: ["Сливочный сыр", "Песочное тесто", "Яйца", "Сахар", "Ягоды"]
  },
  {
    id: 10,
    name: "Фреш апельсиновый",
    description: "Свежевыжатый сок из сочных апельсинов",
    price: 220,
    image: "https://images.unsplash.com/photo-1550038302-933341d1a4f3?q=80",
    category: "drinks",
    dietary: { vegetarian: true, vegan: true, glutenFree: true },
    rating: 4.5,
    calories: 90,
    ingredients: ["Апельсин"]
  },
  {
    id: 11,
    name: "Стейк рибай",
    description: "Сочный стейк из мраморной говядины средней прожарки",
    price: 950,
    image: "https://images.unsplash.com/photo-1558030006-450675393462?q=80",
    category: "main",
    dietary: { spicy: true },
    rating: 4.9,
    calories: 850,
    popular: true,
    ingredients: ["Говядина рибай", "Специи", "Масло", "Розмарин", "Чеснок"]
  },
  {
    id: 12,
    name: "Пепперони",
    description: "Пицца с томатным соусом, моцареллой и пикантной колбасой пепперони",
    price: 490,
    image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?q=80",
    category: "pizza",
    dietary: { spicy: true },
    rating: 4.6,
    calories: 920,
    discount: 15,
    ingredients: ["Тесто", "Томатный соус", "Сыр моцарелла", "Пепперони"]
  }
];
