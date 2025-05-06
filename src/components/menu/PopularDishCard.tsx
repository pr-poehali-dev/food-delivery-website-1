
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dish } from '@/types/dish';

interface PopularDishCardProps {
  dish: Dish;
  onAddToCart: (dish: Dish) => void;
}

const PopularDishCard: React.FC<PopularDishCardProps> = ({ dish, onAddToCart }) => {
  return (
    <Card className="flex flex-col">
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
            onClick={() => onAddToCart(dish)}
          >
            +&nbsp;В&nbsp;корзину
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default PopularDishCard;
