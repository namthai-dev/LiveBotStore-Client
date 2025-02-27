import ProductList from '@/components/product-list';
import Gallery from '@/components/gallery';
import Info from '@/components/info';
import { getProduct, getProducts } from '@/features/product/action';

interface ProductPageProps {
  params: Promise<{
    productId: string;
  }>;
}

const ProductPage: React.FC<ProductPageProps> = async ({ params }) => {
  const { productId } = await params;

  const product = await getProduct(productId);
  const suggestedProducts = await getProducts({
    categoryId: product?.category?.id,
  });

  if (!product) {
    return null;
  }

  return (
    <div className="bg-white">
      <div className="px-4 py-10 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
          <Gallery images={product.images} />
          <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
            <Info data={product} />
          </div>
        </div>
        <hr className="my-10" />
        <ProductList title="Related Items" items={suggestedProducts} />
      </div>
    </div>
  );
};

export default ProductPage;
