export interface Branch {
  id: number;
  name: string;
  address: string;
  image: string;
}

export interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  subcategoryId: number;
}

export interface Subcategory {
  id: number;
  name: string;
  mainCategoryId: number;
  image: string;
}

export interface MainCategory {
  id: number;
  name: string;
  description: string;
  image: string;
}