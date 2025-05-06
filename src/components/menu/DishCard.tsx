
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";
import { DietaryInfo, Dish } from '@/types/dish';

interface DishCardProps {
  dish: Dish;
  onAddToCart: (dish: Dish) => void;
}

const DishCard: React.FC<DishCardProps> = ({ dish, onAddToCart }) => {
  return (
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
        <DietaryBadges dietary={dish.dietary} />
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">{dish.description}</p>
        <div className="flex items-center text-sm text-gray-500 mb-4">
          <Icon name="Flame" size={16} className="mr-1 text-orange-500" />
          {dish.calories} ккал
        </div>
        <Separator className="mb-4" />
        <div className="flex justify-between items-center">
          <Price price={dish.price} discount={dish.discount} />
          <Button 
            className="bg-orange-600 hover:bg-orange-700"
            onClick={() => onAddToCart(dish)}
          >
            В корзину
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

const DietaryBadges: React.FC<{ dietary: DietaryInfo }> = ({ dietary }) => {
  return (
    <div className="flex flex-wrap gap-1 mb-3">
      {dietary.vegetarian && (
        <Badge variant="outline" className="text-green-600 border-green-600">Вегетарианское</Badge>
      )}
      {dietary.vegan && (
        <Badge variant="outline" className="text-green-700 border-green-700">Веганское</Badge>
      )}
      {dietary.glutenFree && (
        <Badge variant="outline" className="text-blue-600 border-blue-600">Без глютена</Badge>
      )}
      {dietary.spicy && (
        <Badge variant="outline" className="text-red-600 border-red-600">Острое</Badge>
      )}
    </div>
  );
};

const Price: React.FC<{ price: number; discount?: number }> = ({ price, discount }) => {
  if (discount) {
    return (
      <div className="flex items-center">
        <span className="text-gray-400 line-through text-sm mr-2">{price} ₽</span>
        <span className="text-red-600 text-lg font-bold">
          {Math.round(price * (1 - discount / 100))} ₽
        </span>
      </div>
    );
  }
  
  return <span className="text-lg font-bold">{price} ₽</span>;
};

export default DishCard;
