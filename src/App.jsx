import { useState } from "react";
import Header from "./components/Header";
import FilterBar from "./components/FilterBar";
import ProductGrid from "./components/ProductGrid";
import Stats from "./components/Stats";
import { products } from "./data";

export default function App() {
  const [categoryId, setCategoryId] = useState("all");
  const [keyword, setKeyword] = useState("");
  const [sortAsc, setSortAsc] = useState(false);

  let visible = products.filter((p) => {
    const matchCategory =
      categoryId === "all" || p.category_id === Number(categoryId);
    const matchKeyword = p.name
      .toLowerCase()
      .includes(keyword.toLowerCase());
    return matchCategory && matchKeyword;
  });

  if (sortAsc) {
    visible = [...visible].sort((a, b) => a.price - b.price);
  }

  return (
    <>
      <Header />
      <main className="cm-main">
        {/* CM_EXPECT filter_counts=8,3,3,2 search_ra=2 first_sorted_sku=MS-03 */}
        <FilterBar
          categoryId={categoryId}
          keyword={keyword}
          sortAsc={sortAsc}
          onCategoryChange={setCategoryId}
          onKeywordChange={setKeyword}
          onSortChange={() => setSortAsc((prev) => !prev)}
          visibleCount={visible.length}
        />
        <Stats products={products} />
        <ProductGrid products={visible} />
      </main>
    </>
  );
}
