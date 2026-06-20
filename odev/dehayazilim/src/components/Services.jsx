export default function Services({ activeService, setActiveService, services }) {
  return (
    <section
      id="hizmetler"
      className="w-full max-w-4xl py-16 border-t border-white/[0.06]"
    >
      <div className="text-center mb-10">
        <span className="text-xs font-bold tracking-widest text-cyan uppercase">
          Hizmet Alanlarımız
        </span>

        <h2 className="font-display text-2xl font-bold text-white mt-1">
          Neler Yapıyoruz?
        </h2>
      </div>

      <div className="w-full bg-[#0b0b0f] border border-white/[0.06] rounded-xl overflow-hidden shadow-2xl">
        <div className="border-b border-white/[0.06] p-4 grid grid-cols-2 md:grid-cols-4 gap-2 text-center text-xs font-medium">
          
          <button
            onClick={() => setActiveService("web")}
            className={`py-2 rounded cursor-pointer transition-colors ${
              activeService === "web"
                ? "bg-white/10 text-white"
                : "text-muted hover:text-white"
            }`}
          >
            Web Tasarım
          </button>

          <button
            onClick={() => setActiveService("eticaret")}
            className={`py-2 rounded cursor-pointer transition-colors ${
              activeService === "eticaret"
                ? "bg-white/10 text-white"
                : "text-muted hover:text-white"
            }`}
          >
            E-Ticaret
          </button>

          <button
            onClick={() => setActiveService("ozel")}
            className={`py-2 rounded cursor-pointer transition-colors ${
              activeService === "ozel"
                ? "bg-white/10 text-white"
                : "text-muted hover:text-white"
            }`}
          >
            Özel Uygulamalar
          </button>

          <button
            onClick={() => setActiveService("mobil")}
            className={`py-2 rounded cursor-pointer transition-colors ${
              activeService === "mobil"
                ? "bg-white/10 text-white"
                : "text-muted hover:text-white"
            }`}
          >
            Mobil Uygulama
          </button>

          <button
            onClick={() => setActiveService("yapayzeka")}
            className={`py-2 rounded cursor-pointer transition-colors ${
              activeService === "yapayzeka"
                ? "bg-white/10 text-white"
                : "text-muted hover:text-white"
            }`}
          >
            Yapay Zeka
          </button>

          <button
            onClick={() => setActiveService("veri")}
            className={`py-2 rounded cursor-pointer transition-colors ${
              activeService === "veri"
                ? "bg-white/10 text-white"
                : "text-muted hover:text-white"
            }`}
          >
            Veri Analitiği
          </button>

          <button
            onClick={() => setActiveService("siber")}
            className={`py-2 rounded cursor-pointer transition-colors ${
              activeService === "siber"
                ? "bg-white/10 text-white"
                : "text-muted hover:text-white"
            }`}
          >
            Siber Güvenlik
          </button>

          <button
            onClick={() => setActiveService("destek")}
            className={`py-2 rounded cursor-pointer transition-colors ${
              activeService === "destek"
                ? "bg-white/10 text-white"
                : "text-muted hover:text-white"
            }`}
          >
            Teknik Destek
          </button>

        </div>

        <div className="p-8 min-h-[160px] flex items-center justify-center text-center">
          <p className="text-muted text-sm md:text-base max-w-2xl leading-relaxed">
            {services[activeService]}
          </p>
        </div>
      </div>
    </section>
  );
}