import Link from 'next/link';
import { getCategories } from '@/features/category/action';
import NavMain from './nav-main';
import NavAction from './nav-action';

const Navbar = async () => {
  const categories = await getCategories();

  return (
    <div className="border-b">
      <div className="relative flex h-16 items-center px-4 sm:px-6 lg:px-8">
        <Link href="/" className="ml-4 flex gap-x-2 lg:ml-0">
          <p className="text-xl font-bold">STORE</p>
        </Link>
        <NavMain data={categories} />
        <NavAction />
      </div>
    </div>
  );
};

export default Navbar;
