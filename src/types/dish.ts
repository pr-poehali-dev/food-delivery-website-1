
export interface DietaryInfo {
  vegetarian?: boolean;
  vegan?: boolean;
  glutenFree?: boolean;
  spicy?: boolean;
}

export interface Dish {
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

export interface Category {
  id: string;
  name: string;
}
