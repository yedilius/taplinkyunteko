import { ProductCatalog } from "@/components/product-catalog";
import { products } from "@/data/products";

export default function Home() {
  return <ProductCatalog products={products} />;
}
