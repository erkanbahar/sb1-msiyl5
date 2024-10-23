import React from 'react';
import { MainCategory, Subcategory, MenuItem } from '../types';
import MenuItemComponent from './MenuItem';

interface MenuSectionProps {
  category: MainCategory;
  subcategories: Subcategory[];
  menuItems: MenuItem[];
}

export default function MenuSection({ category, subcategories, menuItems }: MenuSectionProps) {
  return (
    <section>
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">{category.name}</h2>
        <p className="text-gray-600">{category.description}</p>
      </div>

      <div className="space-y-10">
        {subcategories.map(subcategory => (
          <div key={subcategory.id}>
            <h3 className="text-xl font-semibold text-gray-700 mb-6 flex items-center gap-2">
              <img
                src={subcategory.image}
                alt={subcategory.name}
                className="w-8 h-8 rounded-full object-cover"
              />
              {subcategory.name}
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {menuItems
                .filter(item => item.subcategoryId === subcategory.id)
                .map(item => (
                  <MenuItemComponent key={item.id} {...item} />
                ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}