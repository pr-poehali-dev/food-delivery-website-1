
import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

const MenuFooter = () => {
  return (
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
  );
};

export default MenuFooter;
