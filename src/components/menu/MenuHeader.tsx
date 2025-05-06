
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const MenuHeader = () => {
  return (
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
  );
};

export default MenuHeader;
