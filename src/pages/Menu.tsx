
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Icon from "@/components/ui/icon";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";

// Типы данных для блюд и категорий
interface DietaryInfo {
  vegetarian?: boolean;
  vegan?: boolean;
  glutenFree?: boolean;
  spicy?: boolean;
}

interface Dish {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  dietary: DietaryInfo;
  rating: number;
  calories: number;
  popular?: boolean;
  discount?: number;
  ingredients: string[];
}

const Menu = () => {
  // Состояния для фильтров и поиска
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [dietaryFilter, setDietaryFilter] = useState<string | null>(null);
  const [sortOption, setSortOption] = useState("popular");
  const [filteredDishes, setFilteredDishes] = useState<Dish[]>([]);
  
  // Имитация загрузки данных с сервера
  const dishes: Dish[] = [
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

  // Категории блюд
  const categories = [
    { id: "all", name: "Все блюда" },
    { id: "pizza", name: "Пицца" },
    { id: "salads", name: "Салаты" },
    { id: "soups", name: "Супы" },
    { id: "main", name: "Горячие блюда" },
    { id: "desserts", name: "Десерты" },
    { id: "drinks", name: "Напитки" }
  ];

  // Фильтрация блюд при изменении фильтров
  useEffect(() => {
    let result = [...dishes];
    
    // Фильтр по поиску
    if (searchTerm) {
      result = result.filter(dish => 
        dish.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
        dish.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        dish.ingredients.some(ingredient => 
          ingredient.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    }
    
    // Фильтр по категории
    if (selectedCategory !== "all") {
      result = result.filter(dish => dish.category === selectedCategory);
    }
    
    // Фильтр по диетическому типу
    if (dietaryFilter) {
      result = result.filter(dish => {
        if (dietaryFilter === "vegetarian") return dish.dietary.vegetarian;
        if (dietaryFilter === "vegan") return dish.dietary.vegan;
        if (dietaryFilter === "glutenFree") return dish.dietary.glutenFree;
        if (dietaryFilter === "spicy") return dish.dietary.spicy;
        return true;
      });
    }
    
    // Сортировка
    if (sortOption === "priceAsc") {
      result.sort((a, b) => a.price - b.price);
    } else if (sortOption === "priceDesc") {
      result.sort((a, b) => b.price - a.price);
    } else if (sortOption === "popular") {
      result.sort((a, b) => (b.popular ? 1 : 0) - (a.popular ? 1 : 0));
    } else if (sortOption === "rating") {
      result.sort((a, b) => b.rating - a.rating);
    }
    
    setFilteredDishes(result);
  }, [searchTerm, selectedCategory, dietaryFilter, sortOption]);

  // Обработчик добавления в корзину
  const handleAddToCart = (dish: Dish) => {
    // Здесь будет логика добавления в корзину
    console.log(`Добавлено в корзину: ${dish.name}`);
    // В реальном приложении тут должен быть вызов API или обновление состояния Redux
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Шапка */}
      <header className="sticky top-0 z-10 bg-white shadow-sm">
        <div className="container mx-auto py-4 px-4 flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold mr-2">🍽️</span>
              <span className="text-2xl font-bold text-orange-600">FoodDelivery</span>
            </Link>
          </div>
          
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-gray-800 hover:text-orange-600 font-medium">Главная</Link>
            <Link to="/menu" className="text-orange-600 font-medium">Меню</Link>
            <Link to="/about" className="text-gray-800 hover:text-orange-600 font-medium">О нас</Link>
            <Link to="/contacts" className="text-gray-800 hover:text-orange-600 font-medium">Контакты</Link>
          </nav>
          
          <div className="flex items-center space-x-4">
            <Button className="bg-orange-600 hover:bg-orange-700">
              <Icon name="ShoppingCart" className="mr-2" size={18} />
              <span>Корзина</span>
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1 container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-center">Наше меню</h1>
        
        {/* Поиск и фильтры */}
        <div className="mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div className="relative">
              <Input 
                type="text" 
                placeholder="Поиск блюд..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pr-10"
              />
              <Button 
                variant="ghost" 
                className="absolute right-0 top-0 h-10 w-10"
              >
                <Icon name="Search" size={18} />
              </Button>
            </div>
            
            <Select value={dietaryFilter || ""} onValueChange={value => setDietaryFilter(value || null)}>
              <SelectTrigger>
                <SelectValue placeholder="Диетические предпочтения" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">Все блюда</SelectItem>
                <SelectItem value="vegetarian">Вегетарианские</SelectItem>
                <SelectItem value="vegan">Веганские</SelectItem>
                <SelectItem value="glutenFree">Без глютена</SelectItem>
                <SelectItem value="spicy">Острые</SelectItem>
              </SelectContent>
            </Select>
            
            <Select value={sortOption} onValueChange={setSortOption}>
              <SelectTrigger>
                <SelectValue placeholder="Сортировка" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="popular">По популярности</SelectItem>
                <SelectItem value="rating">По рейтингу</SelectItem>
                <SelectItem value="priceAsc">Цена: сначала дешевле</SelectItem>
                <SelectItem value="priceDesc">Цена: сначала дороже</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        
        {/* Категории блюд */}
        <Tabs defaultValue="all" className="mb-8" value={selectedCategory} onValueChange={setSelectedCategory}>
          <TabsList className="flex flex-wrap justify-center mb-4 bg-gray-100 p-1 rounded-lg">
            {categories.map(category => (
              <TabsTrigger 
                key={category.id} 
                value={category.id}
                className="px-5 py-2.5"
              >
                {category.name}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
        
        {/* Результаты поиска */}
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-xl font-semibold">
            {filteredDishes.length} {filteredDishes.length === 1 ? 'блюдо' : 
             (filteredDishes.length >= 2 && filteredDishes.length <= 4) ? 'блюда' : 'блюд'}
          </h2>
          {searchTerm && (
            <Badge variant="outline" className="flex items-center">
              Поиск: {searchTerm}
              <button onClick={() => setSearchTerm("")} className="ml-2">
                <Icon name="X" size={14} />
              </button>
            </Badge>
          )}
        </div>
        
        {/* Список блюд */}
        {filteredDishes.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {filteredDishes.map((dish) => (
              <Card key={dish.id} className="overflow-hidden relative group">
                {dish.discount && (
                  <div className="absolute top-3 right-3 bg-red-600 text-white text-sm font-bold py-1 px-3 rounded-full z-10">
                    -{dish.discount}%
                  </div>
                )}
                {dish.popular && !dish.discount && (
                  <div className="absolute top-3 right-3 bg-orange-600 text-white text-sm font-bold py-1 px-3 rounded-full z-10">
                    Популярное
                  </div>
                )}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={dish.image} 
                    alt={dish.name} 
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" 
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Button variant="secondary" className="text-xs">
                      Подробнее
                    </Button>
                  </div>
                </div>
                <CardContent className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-lg">{dish.name}</h3>
                    <div className="flex items-center text-sm text-yellow-500">
                      <Icon name="Star" size={16} />
                      <span className="ml-1">{dish.rating}</span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-1 mb-3">
                    {dish.dietary.vegetarian && (
                      <Badge variant="outline" className="text-green-600 border-green-600">Вегетарианское</Badge>
                    )}
                    {dish.dietary.vegan && (
                      <Badge variant="outline" className="text-green-700 border-green-700">Веганское</Badge>
                    )}
                    {dish.dietary.glutenFree && (
                      <Badge variant="outline" className="text-blue-600 border-blue-600">Без глютена</Badge>
                    )}
                    {dish.dietary.spicy && (
                      <Badge variant="outline" className="text-red-600 border-red-600">Острое</Badge>
                    )}
                  </div>
                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">{dish.description}</p>
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <Icon name="Flame" size={16} className="mr-1 text-orange-500" />
                    {dish.calories} ккал
                  </div>
                  <Separator className="mb-4" />
                  <div className="flex justify-between items-center">
                    <div className="text-lg font-bold">
                      {dish.discount ? (
                        <div className="flex items-center">
                          <span className="text-gray-400 line-through text-sm mr-2">{dish.price} ₽</span>
                          <span className="text-red-600">{Math.round(dish.price * (1 - dish.discount / 100))} ₽</span>
                        </div>
                      ) : (
                        <span>{dish.price} ₽</span>
                      )}
                    </div>
                    <Button 
                      className="bg-orange-600 hover:bg-orange-700"
                      onClick={() => handleAddToCart(dish)}
                    >
                      В корзину
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <Icon name="Search" size={48} className="mx-auto mb-4 text-gray-300" />
            <h3 className="text-xl font-medium mb-2">Блюда не найдены</h3>
            <p className="text-gray-500 mb-4">Попробуйте изменить параметры поиска или фильтры</p>
            <Button 
              variant="outline" 
              onClick={() => {
                setSearchTerm("");
                setSelectedCategory("all");
                setDietaryFilter(null);
                setSortOption("popular");
              }}
            >
              Сбросить все фильтры
            </Button>
          </div>
        )}
        
        {/* Популярные блюда */}
        {selectedCategory === "all" && !searchTerm && !dietaryFilter && (
          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-6">Рекомендуем попробовать</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {dishes.filter(dish => dish.popular).map(dish => (
                <Card key={`popular-${dish.id}`} className="flex flex-col">
                  <div className="relative h-40">
                    <img src={dish.image} alt={dish.name} className="w-full h-full object-cover" />
                    {dish.discount && (
                      <div className="absolute top-2 right-2 bg-red-600 text-white text-xs font-bold py-0.5 px-2 rounded-full">
                        -{dish.discount}%
                      </div>
                    )}
                  </div>
                  <CardContent className="p-3 flex-1 flex flex-col">
                    <h3 className="font-medium text-base mb-1">{dish.name}</h3>
                    <p className="text-gray-600 text-xs mb-2 line-clamp-2 flex-1">{dish.description}</p>
                    <div className="flex justify-between items-center mt-auto">
                      <div className="font-bold">
                        {dish.discount ? (
                          <div className="flex items-center">
                            <span className="text-gray-400 line-through text-xs mr-1">{dish.price} ₽</span>
                            <span className="text-red-600 text-sm">{Math.round(dish.price * (1 - dish.discount / 100))} ₽</span>
                          </div>
                        ) : (
                          <span className="text-sm">{dish.price} ₽</span>
                        )}
                      </div>
                      <Button 
                        size="sm" 
                        className="bg-orange-600 hover:bg-orange-700 h-7 text-xs"
                        onClick={() => handleAddToCart(dish)}
                      >
                        +&nbsp;В&nbsp;корзину
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}
      </main>

      {/* Подвал */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">FoodDelivery</h3>
              <p className="text-gray-300 mb-4">Быстрая доставка вкусной еды по всему городу</p>
              <div className="flex space-x-4">
                <a href="#" className="text-white hover:text-orange-400"><Icon name="Facebook" /></a>
                <a href="#" className="text-white hover:text-orange-400"><Icon name="Instagram" /></a>
                <a href="#" className="text-white hover:text-orange-400"><Icon name="Twitter" /></a>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Меню</h3>
              <ul className="space-y-2">
                <li><Link to="/menu/pizza" className="text-gray-300 hover:text-white">Пицца</Link></li>
                <li><Link to="/menu/salads" className="text-gray-300 hover:text-white">Салаты</Link></li>
                <li><Link to="/menu/soups" className="text-gray-300 hover:text-white">Супы</Link></li>
                <li><Link to="/menu/drinks" className="text-gray-300 hover:text-white">Напитки</Link></li>
                <li><Link to="/menu/desserts" className="text-gray-300 hover:text-white">Десерты</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Информация</h3>
              <ul className="space-y-2">
                <li><Link to="/about" className="text-gray-300 hover:text-white">О нас</Link></li>
                <li><Link to="/contacts" className="text-gray-300 hover:text-white">Контакты</Link></li>
                <li><Link to="/delivery" className="text-gray-300 hover:text-white">Доставка</Link></li>
                <li><Link to="/faq" className="text-gray-300 hover:text-white">Вопросы и ответы</Link></li>
                <li><Link to="/policy" className="text-gray-300 hover:text-white">Политика конфиденциальности</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Контакты</h3>
              <address className="text-gray-300 not-italic">
                <div className="mb-2 flex items-center">
                  <Icon name="MapPin" className="mr-2" /> ул. Пушкина, 10
                </div>
                <div className="mb-2 flex items-center">
                  <Icon name="Phone" className="mr-2" /> +7 (800) 123-45-67
                </div>
                <div className="mb-2 flex items-center">
                  <Icon name="Mail" className="mr-2" /> info@fooddelivery.ru
                </div>
                <div className="flex items-center">
                  <Icon name="Clock" className="mr-2" /> 10:00 - 22:00, ежедневно
                </div>
              </address>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
            <p>© 2025 FoodDelivery. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Menu;
