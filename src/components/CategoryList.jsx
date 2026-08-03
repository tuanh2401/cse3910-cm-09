import { categories as defaultCategories } from "../data";

export default function CategoryList({ categories = defaultCategories }) {
  return (
    <ul data-testid="cm-category-list">
      {categories.map((c) => (
        <li key={c.id}>{c.name}</li>
      ))}
    </ul>
  );
}
