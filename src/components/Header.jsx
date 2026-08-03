export default function Header() {
  return (
    <header className="cm-header">
      <h1 data-testid="cm-brand">CampusMart</h1>
      <nav className="cm-nav">
        <ul>
          <li><a href="#">Trang chu</a></li>
          <li><a href="#">San pham</a></li>
          <li><a href="#">Gioi thieu</a></li>
        </ul>
      </nav>
    </header>
  );
}
