export type Category = 'Fahrzeuge' | 'Musik' | 'Sport' | 'Bücher' | 'Elektronik';

export interface Item {
  id: string;
  title: string;
  subtitle?: string;
  image: string;
  isFavorite: boolean;
  category: Category;
  type: 'verleihen' | 'verschenken';
}

export type FilterType = {
  applied: boolean;
  count: number;
};
