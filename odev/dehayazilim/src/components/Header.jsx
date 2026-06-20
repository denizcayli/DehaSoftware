import Navbar from "./Navbar";
import Toggle from "./Toggle";

export default function Header({
  categories,
  serviceMenu,
  selectedCategory,
  setSelectedCategory,
  setActiveService,
  theme,
  setTheme,
}) {
  return (
    <header className="navbar-wrap">
      <div className="navbar">
        <div className="navbar-logo" onClick={() => setSelectedCategory("Anasayfa")}>
          DEHA<span className="text-cyan">&nbsp;YAZILIM</span>
        </div>

        <Navbar
          categories={categories}
          serviceMenu={serviceMenu}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          setActiveService={setActiveService}
        />

        <div className="flex items-center gap-3">
          <Toggle theme={theme} setTheme={setTheme} />
          <a href="#teklif-al" className="navbar-cta">
            Fiyat Al
          </a>
        </div>
      </div>
    </header>
  );
}