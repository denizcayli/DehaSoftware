import React from "react";

export default function Navbar({
  categories,
  serviceMenu,
  selectedCategory,
  setSelectedCategory,
}) {
  return (
    <nav className="navbar-menu">
      {categories.map((cat) =>
        cat === "Hizmetlerimiz" ? (
          <div key={cat} className="dropdown group">
            <span
              onClick={() => setSelectedCategory(cat)}
              className={`navbar-link dropdown-trigger ${
                selectedCategory === cat ? "text-white" : ""
              }`}
            >
              {cat}
            </span>

            {/* HİZMETLER DROPDOWN MENÜSÜ
              - 'hidden': Varsayılan olarak menüyü gizler (Açık kalma sorununu çözer).
              - 'group-hover:flex': Sadece mouse üzerine gelindiğinde görünür yapar.
              - 'flex-col': İçindeki linkleri kesin olarak alt alta dizer.
            */}
            <div className="dropdown-menu hidden group-hover:flex flex-col gap-1">
              {serviceMenu.map((service) => (
                <span key={service.key} className="dropdown-item block">
                  {service.title}
                </span>
              ))}
            </div>
          </div>
        ) : (
          <span
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`navbar-link ${
              selectedCategory === cat ? "text-white" : ""
            }`}
          >
            {cat}
          </span>
        )
      )}
    </nav>
  );
}