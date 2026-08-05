export default function FilterBar({
  categoryId,
  keyword,
  sortAsc,
  onCategoryChange,
  onKeywordChange,
  onSortChange,
  visibleCount
}) {
  return (
    <div className="cm-filter-bar" style={{ display: 'flex', gap: '1rem', alignItems: 'center', margin: '1rem 0', flexWrap: 'wrap' }}>
      <select
        data-testid="cm-filter-category"
        value={categoryId}
        onChange={(e) => onCategoryChange(e.target.value)}
      >
        <option value="all">Tat ca</option>
        <option value="1">Ban phim</option>
        <option value="2">Chuot</option>
        <option value="3">Man hinh</option>
      </select>

      <input
        type="search"
        data-testid="cm-search"
        placeholder="Tim theo ten..."
        value={keyword}
        onChange={(e) => onKeywordChange(e.target.value)}
      />

      <button
        type="button"
        data-testid="cm-sort-price"
        onClick={onSortChange}
        style={{ fontWeight: sortAsc ? 'bold' : 'normal' }}
      >
        Gia tang dan
      </button>

      {visibleCount !== undefined && (
        <p data-testid="cm-visible-count">Hien thi: {visibleCount} san pham</p>
      )}
    </div>
  );
}
