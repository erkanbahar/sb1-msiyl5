import React from 'react';
import { MapPin, Clock, Phone, Navigation } from 'lucide-react';

interface Branch {
  id: number;
  name: string;
  address: string;
  image: string;
}

interface BranchSelectionProps {
  branches: Branch[];
  onSelectBranch: (branch: Branch) => void;
}

export default function BranchSelection({ branches, onSelectBranch }: BranchSelectionProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-3">Lezzet Durağı</h1>
          <p className="text-xl text-gray-600 mb-6">Eşsiz lezzetlerimizi keşfedin</p>
          <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
            <Clock className="w-4 h-4" />
            <span>Her gün 09:00 - 23:00</span>
            <span className="mx-2">•</span>
            <Phone className="w-4 h-4" />
            <span>(0212) 555 55 55</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {branches.map((branch) => (
            <button
              key={branch.id}
              onClick={() => onSelectBranch(branch)}
              className="group bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className="relative h-48">
                <img
                  src={branch.image}
                  alt={branch.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-emerald-600 transition-colors">
                  {branch.name}
                </h3>
                
                <div className="space-y-3">
                  <div className="flex items-start gap-2 text-gray-600">
                    <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                    <p className="text-sm leading-tight">{branch.address}</p>
                  </div>
                  
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-emerald-600 font-medium">Şimdi Açık</span>
                    <div className="flex items-center gap-1 text-gray-500 group-hover:text-emerald-600 transition-colors">
                      <span>Yol Tarifi</span>
                      <Navigation className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-500 text-sm">
            * Menü fiyatları şubelere göre değişiklik gösterebilir.
          </p>
        </div>
      </div>
    </div>
  );
}