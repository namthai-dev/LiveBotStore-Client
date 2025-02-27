import { Billboard } from '@/types';

const URL = `${process.env.NEXT_PUBLIC_DASHBOARD_URL}/${process.env.NEXT_PUBLIC_STORE_ID}/billboards`;

const getBillboard = async (): Promise<Billboard[]> => {
  const res = await fetch(URL);
  return res.json();
};

export default getBillboard;
