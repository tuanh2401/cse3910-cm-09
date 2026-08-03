import { inventoryValue, products as defaultProducts } from "../data";

export default function Stats({ products = defaultProducts }) {
  return (
    <section data-testid="cm-inventory-total">
      <p>So san pham = {products.length}</p>
      <p>Tong gia tri kho = {inventoryValue(products)}</p>
    </section>
  );
}
