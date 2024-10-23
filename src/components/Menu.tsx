import React, { useRef } from 'react';
import { ArrowLeft, Utensils } from 'lucide-react';
import { Branch } from '../types';
import { MAIN_CATEGORIES, SUBCATEGORIES, MENU_ITEMS } from '../data/menuData';
import CategoryNav from './CategoryNav';
import MenuSection from './MenuSection';

interface MenuProps {
  branch: Branch;
  onBack: () => void;
}

export default function Menu({ branch, onBack }: MenuProps) {
  const sectionRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  const scrollToSection = (categoryId: number) => {
    sectionRefs.current[categoryId]?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-5xl mx-auto px-4 py-4">
          <div className="flex items-center gap-3 mb-4">
            <button
              onClick={onBack}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <ArrowLeft className="w-6 h-6 text-gray-600" />
            </button>
            <Utensils className="w-8 h-8 text-emerald-600" />
            <div>
              <h1 className="text-xl font-bold text-gray-800">Menü</h1>
              <p className="text-sm text-gray-600">{branch.name}</p>
            </div>
          </div>
          
          <CategoryNav 
            categories={MAIN_CATEGORIES} 
            onCategoryClick={scrollToSection}
          />
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-6">
        <div className="space-y-12">
          {MAIN_CATEGORIES.map(category => (
            <div
              key={category.id}
              ref={el => sectionRefs.current[category.id] = el}
              className="scroll-mt-40"
            >
              <MenuSection
                category={category}
                subcategories={SUBCATEGORIES.filter(sub => sub.mainCategoryId === category.id)}
                menuItems={MENU_ITEMS}
              />
            </div>
          ))}
        </div>
      </main>

      <footer className="bg-white border-t mt-auto">
        <div className="max-w-5xl mx-auto px-4 py-6">
          <p className="text-center text-gray-600">
            Sipariş ve rezervasyon için: (0212) 555 55 55
          </p>
        </div>
      </footer>
    </div>
  );
}