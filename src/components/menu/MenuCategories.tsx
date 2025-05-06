
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface Category {
  id: string;
  name: string;
}

interface MenuCategoriesProps {
  categories: Category[];
  selectedCategory: string;
  onCategoryChange: (value: string) => void;
}

const MenuCategories: React.FC<MenuCategoriesProps> = ({ 
  categories, 
  selectedCategory, 
  onCategoryChange 
}) => {
  return (
    <Tabs 
      defaultValue="all" 
      className="mb-8" 
      value={selectedCategory} 
      onValueChange={onCategoryChange}
    >
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
  );
};

export default MenuCategories;
