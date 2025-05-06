
import React from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import Icon from "@/components/ui/icon";

interface MenuFiltersProps {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
  dietaryFilter: string | null;
  setDietaryFilter: (value: string | null) => void;
  sortOption: string;
  setSortOption: (value: string) => void;
}

const MenuFilters: React.FC<MenuFiltersProps> = ({
  searchTerm,
  setSearchTerm,
  dietaryFilter,
  setDietaryFilter,
  sortOption,
  setSortOption
}) => {
  return (
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
  );
};

export default MenuFilters;
