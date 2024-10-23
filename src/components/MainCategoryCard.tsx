import React from 'react';
import { ChevronRight } from 'lucide-react';
import { MainCategory } from '../types';

interface MainCategoryCardProps {
  category: MainCategory;
  onClick: (category: MainCategory) => void;
}

export default function MainCategoryCard({ category, onClick }: MainCategoryCardProps) {
  return (
    <button
      onClick={() => onClick(category)}
      className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-[1.02]"
    >
      <div className="relative h-48">
        <img
          src={category.image}
          alt={category.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
          <h3 className="text-xl font-bold mb-1">{category.name}</h3>
          <p className="text-sm text-white/90">{category.description}</p>
        </div>
        <div className="absolute top-4 right-4">
          <ChevronRight className="w-6 h-6 text-white" />
        </div>
      </div>
    </button>
  );
}