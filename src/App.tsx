import React, { useState } from 'react';
import BranchSelection from './components/BranchSelection';
import Menu from './components/Menu';
import { Branch } from './types';

const BRANCHES: Branch[] = [
  {
    id: 1,
    name: 'Kadıköy Şubesi',
    address: 'Caferağa Mah. Moda Cad. No:123, Kadıköy/İstanbul',
    image: 'https://images.unsplash.com/photo-1537047902294-62a40c20a6ae?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 2,
    name: 'Beşiktaş Şubesi',
    address: 'Sinanpaşa Mah. Ortabahçe Cad. No:456, Beşiktaş/İstanbul',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 3,
    name: 'Bakırköy Şubesi',
    address: 'Cevizlik Mah. İstanbul Cad. No:789, Bakırköy/İstanbul',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 4,
    name: 'Nişantaşı Şubesi',
    address: 'Teşvikiye Mah. Vali Konağı Cad. No:321, Şişli/İstanbul',
    image: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 5,
    name: 'Ataşehir Şubesi',
    address: 'Atatürk Mah. Meriç Cad. No:654, Ataşehir/İstanbul',
    image: 'https://images.unsplash.com/photo-1559329007-40df8a9345d8?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 6,
    name: 'Levent Şubesi',
    address: 'Levent Mah. Büyükdere Cad. No:987, Beşiktaş/İstanbul',
    image: 'https://images.unsplash.com/photo-1578474846511-04ba529f0b88?auto=format&fit=crop&q=80&w=800'
  }
];

export default function App() {
  const [selectedBranch, setSelectedBranch] = useState<Branch | null>(null);

  if (!selectedBranch) {
    return (
      <BranchSelection
        branches={BRANCHES}
        onSelectBranch={setSelectedBranch}
      />
    );
  }

  return (
    <Menu
      branch={selectedBranch}
      onBack={() => setSelectedBranch(null)}
    />
  );
}