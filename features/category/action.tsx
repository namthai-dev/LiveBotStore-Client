import { Category } from '@/types';

const URL = `${process.env.NEXT_PUBLIC_DASHBOARD_URL}/${process.env.NEXT_PUBLIC_STORE_ID}/categories`;

export const getCategory = async (id: string): Promise<Category> => {
  const res = await fetch(`${URL}/${id}`);

  return res.json();
};

export const getCategories = async (): Promise<Category[]> => {
  console.log(URL);
  const res = await fetch(URL);

  return res.json();
};
