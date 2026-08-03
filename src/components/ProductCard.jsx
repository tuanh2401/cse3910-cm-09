import { categoryName } from "../data";

export default function ProductCard({ product }) {
  return (
    <article className="cm-card" data-sku={product.sku}>
      <h3 className="cm-card-title">{product.name}</h3>
      <p className="cm-card-category">{categoryName(product.category_id)}</p>
      <p className="cm-card-price">{product.price}</p>
      <p>So luong: {product.qty}</p>
    </article>
  );
}
