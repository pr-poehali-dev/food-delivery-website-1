
import React from 'react';
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

interface EmptyResultsProps {
  onResetFilters: () => void;
}

const EmptyResults: React.FC<EmptyResultsProps> = ({ onResetFilters }) => {
  return (
    <div className="text-center py-12">
      <Icon name="Search" size={48} className="mx-auto mb-4 text-gray-300" />
      <h3 className="text-xl font-medium mb-2">Блюда не найдены</h3>
      <p className="text-gray-500 mb-4">Попробуйте изменить параметры поиска или фильтры</p>
      <Button 
        variant="outline" 
        onClick={onResetFilters}
      >
        Сбросить все фильтры
      </Button>
    </div>
  );
};

export default EmptyResults;
