export type CategoryId = 'formatters' | 'minifiers' | 'encoders' | 'generators' | 'utilities';

export interface Category {
  id: CategoryId;
  name: string;
}

export interface Tool {
  id: string;
  category: CategoryId;
  name: string;
  desc: string;
}
