export default function Hero() {
  return (
    <section className="text-center max-w-4xl mx-auto flex flex-col items-center mb-24">
      <h1 className="hero-title-glow font-display text-4xl md:text-6xl font-bold tracking-tight uppercase leading-[1.25] mb-6">
        Fikirlerinizi Dehaya
        <br />
        <span className="inline-block mt-3">Dönüştürüyoruz.</span>
      </h1>

      <p className="text-sm md:text-base max-w-2xl leading-relaxed mb-10" style={{ color: "var(--c-muted)" }}>
        "Halinizden de anlıyoruz, projenizin derinliklerinden de!" Biz Deha
        Yazılım olarak, karmaşık kodları işletmeniz için basit, güçlü ve kazançlı
        çözümlere dönüştürüyoruz. Sizin dilinizden konuşuyor, neye ihtiyacınız
        olduğunu tam olarak biliyoruz. Çünkü biz,
        <span className="text-cyan font-semibold underline decoration-cyan/40">
          {" "}halden anlıyoruz.
        </span>
      </p>

      <button
        onClick={() =>
          document.getElementById("teklif-al")?.scrollIntoView({ behavior: "smooth" })
        }
        className="premium-btn text-black font-semibold text-sm px-8 py-3 rounded-md cursor-pointer"
      >
        Fiyat Al
      </button>
    </section>
  );
}