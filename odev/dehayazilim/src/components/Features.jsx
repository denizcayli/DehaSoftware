export default function Features({ features, theme }) {
  // Koyu temada açık ikon (light), açık temada koyu ikon (dark)
  const iconPrefix = theme === "light" ? "dark" : "light";

  return (
    <section
      id="ozellikler"
      className="w-full max-w-5xl py-16 border-t border-white/[0.06]"
    >
      <div className="text-center mb-12">
        <span className="text-xs font-bold tracking-widest text-cyan uppercase">
          Neden Deha?
        </span>
        <h2 className="section-title">Bizi Farklı Kılan Şeyler</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-12">
        {features.map((f, i) => (
          <div key={i} className="flex flex-col items-center text-center px-4">
            <img
              src={`/icons/${iconPrefix}${i + 1}.png`}
              alt={f.title}
              className="feature-icon w-16 h-16 mb-5 object-contain"
            />
            <h3 className="feature-title font-display text-lg font-semibold mb-2">
              {f.title}
            </h3>
            <p className="feature-desc text-sm leading-relaxed max-w-xs">
              {f.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}