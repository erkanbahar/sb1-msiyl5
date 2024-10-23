import { MainCategory, Subcategory, MenuItem } from '../types';

export const MAIN_CATEGORIES: MainCategory[] = [
  {
    id: 1,
    name: 'Sıcak Başlangıçlar',
    description: 'Enfes sıcak başlangıçlarımız ile menünüze başlayın',
    image: 'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?auto=format&fit=crop&q=80&w=600',
  },
  {
    id: 2,
    name: 'Ana Yemekler',
    description: 'Özenle hazırlanan ana yemeklerimiz',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=600',
  },
  {
    id: 3,
    name: 'Tatlılar',
    description: 'Vazgeçilmez tatlı lezzetlerimiz',
    image: 'https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&q=80&w=600',
  },
];

export const SUBCATEGORIES: Subcategory[] = [
  {
    id: 1,
    name: 'Çorbalar',
    mainCategoryId: 1,
    image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&q=80&w=600',
  },
  {
    id: 2,
    name: 'Ara Sıcaklar',
    mainCategoryId: 1,
    image: 'https://images.unsplash.com/photo-1541014741259-de529411b96a?auto=format&fit=crop&q=80&w=600',
  },
  {
    id: 3,
    name: 'Izgaralar',
    mainCategoryId: 2,
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80&w=600',
  },
  {
    id: 4,
    name: 'Kebaplar',
    mainCategoryId: 2,
    image: 'https://images.unsplash.com/photo-1644364935906-792b2245a2c0?auto=format&fit=crop&q=80&w=600',
  },
  {
    id: 5,
    name: 'Sütlü Tatlılar',
    mainCategoryId: 3,
    image: 'https://images.unsplash.com/photo-1621303837174-89787a7d4729?auto=format&fit=crop&q=80&w=600',
  },
  {
    id: 6,
    name: 'Şerbetli Tatlılar',
    mainCategoryId: 3,
    image: 'https://images.unsplash.com/photo-1576867757603-05b134ebc379?auto=format&fit=crop&q=80&w=600',
  },
];

export const MENU_ITEMS: MenuItem[] = [
  {
    id: 1,
    name: 'Mercimek Çorbası',
    description: 'Geleneksel tarif ile hazırlanan mercimek çorbası',
    price: 45,
    subcategoryId: 1,
    image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&q=80&w=600',
  },
  {
    id: 2,
    name: 'İşkembe Çorbası',
    description: 'Özel baharatlar ile servis edilen işkembe çorbası',
    price: 50,
    subcategoryId: 1,
    image: 'https://images.unsplash.com/photo-1583592643761-bf2ecd0e6f84?auto=format&fit=crop&q=80&w=600',
  },
  {
    id: 3,
    name: 'Paçanga Böreği',
    description: 'El açması yufka ile pastırmalı paçanga böreği',
    price: 75,
    subcategoryId: 2,
    image: 'https://images.unsplash.com/photo-1631451095765-2c91616fc9e6?auto=format&fit=crop&q=80&w=600',
  },
  {
    id: 4,
    name: 'Kuzu Pirzola',
    description: 'Özel marine edilmiş kuzu pirzola',
    price: 220,
    subcategoryId: 3,
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=600',
  },
  {
    id: 5,
    name: 'Adana Kebap',
    description: 'El yapımı zırh kıyma ile hazırlanan Adana kebap',
    price: 160,
    subcategoryId: 4,
    image: 'https://images.unsplash.com/photo-1644364935906-792b2245a2c0?auto=format&fit=crop&q=80&w=600',
  },
  {
    id: 6,
    name: 'Kazandibi',
    description: 'Geleneksel tarif ile hazırlanan kazandibi',
    price: 65,
    subcategoryId: 5,
    image: 'https://images.unsplash.com/photo-1621303837174-89787a7d4729?auto=format&fit=crop&q=80&w=600',
  },
];