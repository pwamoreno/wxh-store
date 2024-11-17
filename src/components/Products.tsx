import { getProducts } from "@/lib/actions/action";
import ProductCard from "./ProductCard";

const Products = async () => {
  const products = await getProducts();
  return (
    <div className="flex flex-col items-center gap-10 py-8 px-5">
      <p className="text-heading1-bold max-sm:text-heading3-bold">Featured Merch</p>
      <div>
        {!products || products.length === 0 ? (
          <p className="text-body-bold">No Merch to see yet</p>
        ) : (
          <div className="flex flex-wrap mx-auto gap-16 max-sm:justify-center">
            {products.map((product: ProductType) => (
              <ProductCard key={product._id} product={product}/>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;

export const dynamic = "force-dynamic"
