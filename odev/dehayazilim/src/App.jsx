import { useState, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About_Us from "./components/About_Us";
import Services from "./components/Services";
import Features from "./components/Features";
import HelpCenter from "./components/HelpCenter";
import Form from "./components/Form";
import Footer from "./components/Footer";

import { categories, services, faqData, features, serviceMenu } from "./mockData";
import "./App.css";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("Anasayfa");
  const [theme, setTheme] = useState("dark");
  const [activeFaq, setActiveFaq] = useState(null);
  const [activeService, setActiveService] = useState("web");

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === "light") {
      root.classList.add("light");
    } else {
      root.classList.remove("light");
    }
  }, [theme]);

  const handleNavigation = (category) => {
    setSelectedCategory(category);

    if (category === "Anasayfa") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      let targetId = "";
      if (category === "Hakkımızda") targetId = "hakkimizda";
      if (category === "Hizmetlerimiz") targetId = "hizmetler";
      if (category === "SSS") targetId = "sss";
      if (category === "İletişim") targetId = "teklif-al";

      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      <div className="ray-field">
        <div className="ray-lines"></div>
      </div>

     <Header
        theme={theme}
        setTheme={setTheme}
        categories={categories}
        serviceMenu={serviceMenu}
        selectedCategory={selectedCategory}
        setSelectedCategory={handleNavigation}
        setActiveService={setActiveService}
      />

      <main className="relative z-10 flex flex-col items-center pt-40 md:pt-48 px-4">
        <Hero />
        <About_Us />
        <Services
          activeService={activeService}
          setActiveService={setActiveService}
          services={services}
        />
        <Features features={features} theme={theme} />
        <HelpCenter
          faqData={faqData}
          activeFaq={activeFaq}
          setActiveFaq={setActiveFaq}
        />
        <Form services={services} />
      </main>

      <Footer setSelectedCategory={handleNavigation} />
    </div>
  );
}

export default App;