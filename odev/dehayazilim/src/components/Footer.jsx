import React from "react";

export default function Footer({ setSelectedCategory }) {
  return (
    <footer className="footer">
      <div className="footer-grid">

        <div className="flex flex-col gap-2">
          <h3 className="text-white text-xs font-bold uppercase tracking-wider mb-2">DEHA YAZILIM</h3>
          <p className="text-xs text-muted leading-relaxed max-w-xs">
            Fikirlerinizi dinliyor, dijital dünyada rehberiniz oluyoruz.
            Samimi iletişim ve profesyonel çözümlerle her zaman yanınızdayız.
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="footer-title mb-2">HIZLI MENÜ</h3>
          <span className="footer-link text-xs py-0.5" onClick={() => setSelectedCategory("Anasayfa")}>Anasayfa</span>
          <span className="footer-link text-xs py-0.5" onClick={() => setSelectedCategory("Hakkımızda")}>Hakkımızda</span>
          <span className="footer-link text-xs py-0.5" onClick={() => setSelectedCategory("Hizmetlerimiz")}>Hizmetlerimiz</span>
          <span className="footer-link text-xs py-0.5" onClick={() => setSelectedCategory("SSS")}>SSS</span>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="footer-title mb-2">İLETİŞİM BİLGİLERİ</h3>
          <div className="text-xs text-muted flex items-center gap-2 py-0.5">
            <span>✉️</span> info@dehayazilim.com
          </div>
          <div className="text-xs text-muted flex items-center gap-2 py-0.5">
            <span>📞</span> +90 (555) 555 00 00
          </div>
          <div className="text-xs text-muted flex items-center gap-2 py-0.5">
            <span>📍</span> İstanbul Dünya Ticaret Merkezi, Bakırköy / İstanbul
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 Deha Yazılım - Tüm hakları saklıdır.</p>
      </div>
    </footer>
  );
}