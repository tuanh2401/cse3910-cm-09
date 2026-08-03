import Header from "./components/Header";
import CategoryList from "./components/CategoryList";
import ProductGrid from "./components/ProductGrid";
import Stats from "./components/Stats";
import { products } from "./data";

export default function App() {
  return (
    <>
      <Header />
      <main className="cm-main">
        {/* CM_EXPECT product_count=8 inventory_value=41380000 components=Header,CategoryList,ProductGrid,ProductCard,Stats */}
        <CategoryList />
        <ProductGrid products={products} />
        <Stats products={products} />
      </main>
    </>
  );
}
