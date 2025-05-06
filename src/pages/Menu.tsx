import React, { useState, useEffect } from "react";
import MenuHeader from "@/components/menu/MenuHeader";
import MenuFooter from "@/components/menu/MenuFooter";
import MenuFilters from "@/components/menu/MenuFilters";
import MenuCategories from "@/components/menu/MenuCategories";
import DishCard from "@/components/menu/DishCard";
import PopularDishCard from "@/components/menu/PopularDishCard";
import EmptyResults from "@/components/menu/EmptyResults";
import SearchResults from "@/components/menu/SearchResults";
import { categories, dishes } from "@/data/dishes";
import { Dish } from "@/types/dish";

const Menu = () => {
  // Состояния для фильтров и поиска
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [dietaryFilter, setDietaryFilter] = useState<string | null>(null);
  const [sortOption, setSortOption] = useState("popular");
  const [filteredDishes, setFilteredDishes] = useState<Dish[]>([]);
  
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

  # Обработчик сброса всех фильтров
  const handleResetFilters = () => {
    setSearchTerm("");
    setSelectedCategory("all");
    setDietaryFilter(null);
    setSortOption("popular");
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <MenuHeader />

      <main className="flex-1 container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-center">Наше меню</h1>
        
        {/* Поиск и фильтры */}
        <MenuFilters 
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          dietaryFilter={dietaryFilter}
          setDietaryFilter={setDietaryFilter}
          sortOption={sortOption}
          setSortOption={setSortOption}
        />
        
        {/* Категории блюд */}
        <MenuCategories 
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />
        
        {/* Результаты поиска */}
        <SearchResults 
          count={filteredDishes.length}
          searchTerm={searchTerm}
          onClearSearch={() => setSearchTerm("")}
        />
        
        {/* Список блюд */}
        {filteredDishes.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {filteredDishes.map((dish) => (
              <DishCard 
                key={dish.id} 
                dish={dish} 
                onAddToCart={handleAddToCart}
              />
            ))}
          </div>
        ) : (
          <EmptyResults onResetFilters={handleResetFilters} />
        )}
        
        {/* Популярные блюда */}
        {selectedCategory === "all" && !searchTerm && !dietaryFilter && (
          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-6">Рекомендуем попробовать</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {dishes.filter(dish => dish.popular).map(dish => (
                <PopularDishCard 
                  key={`popular-${dish.id}`} 
                  dish={dish} 
                  onAddToCart={handleAddToCart}
                />
              ))}
            </div>
          </div>
        )}
      </main>

      <MenuFooter />
    </div>
  );
};

export default Menu;