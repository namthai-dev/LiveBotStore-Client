import Billboard from '@/components/billboard';
import ProductList from '@/components/product-list';
import getBillboard from '@/features/billboard/action';
import { getProducts } from '@/features/product/action';

export default async function Page() {
  const billboard = await getBillboard();
  const products = await getProducts({ isFeatured: true });

  return (
    <div className="h-full w-full">
      <Billboard data={billboard} />
      <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
        <ProductList title="Featured Products" items={products} />
      </div>
    </div>
  );
}
