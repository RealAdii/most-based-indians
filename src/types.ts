export type Category = 'all' | 'developer' | 'designer' | 'growth';

export interface Builder {
  name: string;
  twitter: string;
  category: Exclude<Category, 'all'>;
}