import React from 'react';
import { Info } from 'lucide-react';

interface MenuItemProps {
  name: string;
  description: string;
  price: number;
  image: string;
}

export default function MenuItem({ name, description, price, image }: MenuItemProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-[1.02]">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover"
        />
        <div className="absolute top-2 right-2">
          <button className="p-1 bg-white/90 rounded-full hover:bg-white">
            <Info className="w-5 h-5 text-gray-700" />
          </button>
        </div>
      </div>
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
          <span className="text-lg font-bold text-emerald-600">₺{price}</span>
        </div>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </div>
  );
}