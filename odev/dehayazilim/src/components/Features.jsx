export default function Features({ features, theme }) {
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

        <div className="flex flex-col items-center text-center px-4">
          <img
            src={theme === "light" ? "/icons/dark1.png" : "/icons/light1.png"}
            alt={features[0].title}
            className="feature-icon w-16 h-16 mb-5 object-contain"
         />
          <h3 className="feature-title font-display text-lg font-semibold mb-2">
            {features[0].title}
          </h3>
          <p className="feature-desc text-sm leading-relaxed max-w-xs">
            {features[0].desc}
          </p>
        </div>

        <div className="flex flex-col items-center text-center px-4">
          <img
            src={theme === "light" ? "/icons/dark2.png" : "/icons/light2.png"}
            alt={features[1].title}
            className="feature-icon w-16 h-16 mb-5 object-contain"
          />
          <h3 className="feature-title font-display text-lg font-semibold mb-2">
            {features[1].title}
          </h3>
          <p className="feature-desc text-sm leading-relaxed max-w-xs">
            {features[1].desc}
          </p>
        </div>

        <div className="flex flex-col items-center text-center px-4">
          <img
            src={theme === "light" ? "/icons/dark3.png" : "/icons/light3.png"}
            alt={features[2].title}
            className="feature-icon w-16 h-16 mb-5 object-contain"
          />
          <h3 className="feature-title font-display text-lg font-semibold mb-2">
            {features[2].title}
          </h3>
          <p className="feature-desc text-sm leading-relaxed max-w-xs">
            {features[2].desc}
          </p>
        </div>

        <div className="flex flex-col items-center text-center px-4">
          <img
            src={theme === "light" ? "/icons/dark4.png" : "/icons/light4.png"}
            alt={features[3].title}
            className="feature-icon w-16 h-16 mb-5 object-contain"
          />
          <h3 className="feature-title font-display text-lg font-semibold mb-2">
            {features[3].title}
          </h3>
          <p className="feature-desc text-sm leading-relaxed max-w-xs">
            {features[3].desc}
          </p>
        </div>

        <div className="flex flex-col items-center text-center px-4">
          <img
            src={theme === "light" ? "/icons/dark5.png" : "/icons/light5.png"}
            alt={features[4].title}
            className="feature-icon w-16 h-16 mb-5 object-contain"
          />
          <h3 className="feature-title font-display text-lg font-semibold mb-2">
            {features[4].title}
          </h3>
          <p className="feature-desc text-sm leading-relaxed max-w-xs">
            {features[4].desc}
          </p>
        </div>

        <div className="flex flex-col items-center text-center px-4">
          <img
            src={theme === "light" ? "/icons/dark6.png" : "/icons/light6.png"}
            alt={features[5].title}
            className="feature-icon w-16 h-16 mb-5 object-contain"
          />
          <h3 className="feature-title font-display text-lg font-semibold mb-2">
            {features[5].title}
          </h3>
          <p className="feature-desc text-sm leading-relaxed max-w-xs">
            {features[5].desc}
          </p>
        </div>

      </div>
    </section>
  );
}