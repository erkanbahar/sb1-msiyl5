import React from 'react';
import { ChevronRight } from 'lucide-react';
import { Subcategory } from '../types';

interface SubcategoryCardProps {
  subcategory: Subcategory;
  onClick: (subcategory: Subcategory) => void;
}

export default function SubcategoryCard({ subcategory, onClick }: SubcategoryCardProps) {
  return (
    <button
      onClick={() => onClick(subcategory)}
      className="bg-white rounded-lg shadow-md overflow-hidden flex items-center"
    >
      <div className="w-24 h-24 flex-shrink-0">
        <img
          src={subcategory.image}
          alt={subcategory.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-grow p-4 flex items-center justify-between">
        <h3 className="text-lg font-semibold text-gray-800">{subcategory.name}</h3>
        <ChevronRight className="w-5 h-5 text-gray-400" />
      </div>
    </button>
  );
}