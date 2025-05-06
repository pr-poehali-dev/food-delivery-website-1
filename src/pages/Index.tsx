
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Icon from "@/components/ui/icon";

const Index = () => {
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
          
          {/* Меню навигации */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-gray-800 hover:text-orange-600 font-medium">Главная</Link>
            <Link to="/menu" className="text-gray-800 hover:text-orange-600 font-medium">Меню</Link>
            <Link to="/about" className="text-gray-800 hover:text-orange-600 font-medium">О нас</Link>
            <Link to="/contacts" className="text-gray-800 hover:text-orange-600 font-medium">Контакты</Link>
          </nav>
          
          <div className="flex items-center space-x-4">
            <div className="hidden md:block">
              <Button variant="outline" className="flex items-center gap-2">
                <Icon name="Search" size={18} />
                <span>Поиск</span>
              </Button>
            </div>
            <Button className="bg-orange-600 hover:bg-orange-700">
              <Icon name="ShoppingCart" className="mr-2" size={18} />
              <span>Корзина</span>
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Баннер с акциями */}
        <section className="bg-gradient-to-r from-orange-600 to-orange-400 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <h1 className="text-4xl font-bold mb-4">Быстрая доставка вкусной еды</h1>
                <p className="text-xl mb-6">Скидка 20% на первый заказ по промокоду WELCOME</p>
                <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100">
                  Заказать сейчас
                </Button>
              </div>
              <div className="md:w-1/2 flex justify-center">
                <img src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80" alt="Еда" className="rounded-lg w-full max-w-md" />
              </div>
            </div>
          </div>
        </section>

        {/* Форма поиска (мобильная версия) */}
        <div className="md:hidden container mx-auto px-4 py-4">
          <div className="relative">
            <Input 
              type="text" 
              placeholder="Поиск блюд..." 
              className="pr-10"
            />
            <Button 
              variant="ghost" 
              className="absolute right-0 top-0 h-10 w-10"
            >
              <Icon name="Search" size={18} />
            </Button>
          </div>
        </div>

        {/* Популярные категории */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Популярные категории</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <CategoryCard 
                icon="Pizza" 
                title="Пицца" 
                bgColor="bg-red-100" 
                iconColor="text-red-600" 
              />
              <CategoryCard 
                icon="Salad" 
                title="Салаты" 
                bgColor="bg-green-100" 
                iconColor="text-green-600" 
              />
              <CategoryCard 
                icon="Coffee" 
                title="Напитки" 
                bgColor="bg-yellow-100" 
                iconColor="text-yellow-600" 
              />
              <CategoryCard 
                icon="Cake" 
                title="Десерты" 
                bgColor="bg-purple-100" 
                iconColor="text-purple-600" 
              />
            </div>
          </div>
        </section>

        {/* Быстрый заказ */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Популярные блюда</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <FoodCard 
                name="Маргарита" 
                description="Классическая пицца с томатным соусом и моцареллой" 
                price={399} 
                image="https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?q=80" 
                category="Пицца"
              />
              <FoodCard 
                name="Цезарь с курицей" 
                description="Свежий салат с куриной грудкой, сыром пармезан и соусом" 
                price={350} 
                image="https://images.unsplash.com/photo-1512852939750-1305098529bf?q=80" 
                category="Салаты"
              />
              <FoodCard 
                name="Паста Карбонара" 
                description="Классическая итальянская паста с беконом и сливочным соусом" 
                price={450} 
                image="https://images.unsplash.com/photo-1608219992759-8d74ed8d76eb?q=80" 
                category="Горячее"
              />
            </div>
            <div className="text-center mt-8">
              <Button size="lg" className="bg-orange-600 hover:bg-orange-700">
                Смотреть все меню
              </Button>
            </div>
          </div>
        </section>

        {/* Информация о доставке */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Как это работает</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <DeliveryInfoCard 
                icon="Utensils" 
                title="Выберите блюда" 
                description="Выбирайте из широкого ассортимента блюд различных кухонь мира"
              />
              <DeliveryInfoCard 
                icon="CreditCard" 
                title="Оплатите заказ" 
                description="Оплатите заказ удобным для вас способом: картой или наличными"
              />
              <DeliveryInfoCard 
                icon="Truck" 
                title="Получите доставку" 
                description="Мы доставим ваш заказ в течение 30-60 минут, в зависимости от района"
              />
            </div>
          </div>
        </section>

        {/* Отзывы клиентов */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Отзывы клиентов</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <TestimonialCard
                name="Елена"
                text="Очень быстрая доставка и вкусная еда. Особенно понравилась пицца 'Четыре сыра'!"
                rating={5}
              />
              <TestimonialCard
                name="Александр"
                text="Приятно удивлен качеством обслуживания и пунктуальностью курьеров. Всегда все горячее и свежее."
                rating={4}
              />
              <TestimonialCard
                name="Мария"
                text="Заказываю не первый раз, всегда все на высоте. Рекомендую салаты и десерты, они просто восхитительны!"
                rating={5}
              />
            </div>
          </div>
        </section>
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

// Компонент карточки категории
const CategoryCard = ({ icon, title, bgColor, iconColor }) => {
  return (
    <Link to={`/menu/${title.toLowerCase()}`} className="group">
      <div className={`${bgColor} rounded-lg p-6 flex flex-col items-center transition-transform group-hover:scale-105`}>
        <div className={`${iconColor} mb-4`}>
          <Icon name={icon} size={40} />
        </div>
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
      </div>
    </Link>
  );
};

// Компонент карточки блюда
const FoodCard = ({ name, description, price, image, category }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:shadow-lg hover:-translate-y-1">
      <img src={image} alt={name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <span className="text-xs text-gray-500 uppercase font-semibold">{category}</span>
        <h3 className="font-bold text-xl mb-2">{name}</h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{description}</p>
        <div className="flex justify-between items-center">
          <span className="font-bold text-lg">{price} ₽</span>
          <Button className="bg-orange-600 hover:bg-orange-700">
            <Icon name="Plus" size={16} className="mr-1" />
            В корзину
          </Button>
        </div>
      </div>
    </div>
  );
};

// Компонент информации о доставке
const DeliveryInfoCard = ({ icon, title, description }) => {
  return (
    <div className="text-center">
      <div className="bg-orange-100 text-orange-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
        <Icon name={icon} size={30} />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

// Компонент отзыва
const TestimonialCard = ({ name, text, rating }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center mb-4">
        {[...Array(5)].map((_, i) => (
          <Icon 
            key={i}
            name="Star" 
            size={18} 
            className={i < rating ? "text-yellow-400" : "text-gray-300"} 
          />
        ))}
      </div>
      <p className="text-gray-600 mb-4 italic">"{text}"</p>
      <div className="font-semibold">— {name}</div>
    </div>
  );
};

export default Index;
