export type ProductOption = {
  id: string;
  title: string;
};

export type Product = {
  id: number;
  title: string;
  slug: string;
  description: string;
  reviews: number;
  price: number;
  discountedPrice: number;
  category: string;
  brand?: string;
  material?: string;
  colors?: string[];
  setOptions?: ProductOption[];
  specs?: Record<string, string>;
  imgs?: {
    thumbnails: string[];
    previews: string[];
  };
};
