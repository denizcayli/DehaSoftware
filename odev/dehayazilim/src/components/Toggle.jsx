import React from "react";

export default function Toggle({ theme, setTheme }) {
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <button
      onClick={toggleTheme}
      className="cursor-pointer text-lg px-2 transition-transform hover:scale-110"
      title="Temayı değiştir"
    >
      {theme === "light" ? "🌙" : "☀️"}
    </button>
  );
}