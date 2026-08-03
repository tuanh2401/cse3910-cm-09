import ProductCard from "./ProductCard";
import { products as defaultProducts } from "../data";

export default function ProductGrid({ products = defaultProducts }) {
  return (
    <div className="cm-grid" data-testid="cm-product-table">
      {products.map((p) => (
        <ProductCard key={p.sku} product={p} />
      ))}
    </div>
  );
}
