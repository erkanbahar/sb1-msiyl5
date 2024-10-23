import React from 'react';
import { MainCategory } from '../types';

interface CategoryNavProps {
  categories: MainCategory[];
  onCategoryClick: (categoryId: number) => void;
}

export default function CategoryNav({ categories, onCategoryClick }: CategoryNavProps) {
  return (
    <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => onCategoryClick(category.id)}
          className="px-4 py-2 rounded-full whitespace-nowrap bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors"
        >
          {category.name}
        </button>
      ))}
    </div>
  );
}