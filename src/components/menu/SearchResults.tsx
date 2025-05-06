
import React from 'react';
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

interface SearchResultsProps {
  count: number;
  searchTerm: string;
  onClearSearch: () => void;
}

const SearchResults: React.FC<SearchResultsProps> = ({ count, searchTerm, onClearSearch }) => {
  // Функция для правильного склонения слова "блюдо"
  const getDishCountText = (count: number): string => {
    if (count === 1) return 'блюдо';
    if (count >= 2 && count <= 4) return 'блюда';
    return 'блюд';
  };

  return (
    <div className="mb-6 flex items-center justify-between">
      <h2 className="text-xl font-semibold">
        {count} {getDishCountText(count)}
      </h2>
      {searchTerm && (
        <Badge variant="outline" className="flex items-center">
          Поиск: {searchTerm}
          <button onClick={onClearSearch} className="ml-2">
            <Icon name="X" size={14} />
          </button>
        </Badge>
      )}
    </div>
  );
};

export default SearchResults;
