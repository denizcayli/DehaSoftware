import { useState } from "react";

export default function Form({ services }) {
  // Form alanlarının state'i
  const [formData, setFormData] = useState({
    ad: "",
    email: "",
    telefon: "",
    hizmet: "",
    mesaj: "",
  });

  // Gönderildi mi? + sipariş no
  const [gonderildi, setGonderildi] = useState(false);
  const [siparisNo, setSiparisNo] = useState("");

  // Her input değişince state'i güncelle
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Gönderince
  const handleSubmit = (e) => {
    e.preventDefault();
    // En azından ad ve e-posta dolu olsun
    if (!formData.ad.trim() || !formData.email.trim()) {
      alert("Lütfen en azından ad ve e-posta alanlarını doldurun.");
      return;
    }
    // Rastgele 6 haneli sipariş no
    const rnd = Math.floor(100000 + Math.random() * 900000);
    setSiparisNo(`#DEHA-${rnd}`);
    setGonderildi(true);
  };

  return (
    <section id="teklif-al" className="w-full max-w-lg py-16">
      {!gonderildi ? (
        // ---- FORM HALİ ----
        <div className="form-box">
          <h2 className="form-title">Projenizi Deha ile Başlatın</h2>

          <form className="form-stack" onSubmit={handleSubmit}>
            <input
              className="form-input"
              type="text"
              name="ad"
              placeholder="Ad Soyad"
              value={formData.ad}
              onChange={handleChange}
            />

            <input
              className="form-input"
              type="email"
              name="email"
              placeholder="E-posta Adresi"
              value={formData.email}
              onChange={handleChange}
            />

            <input
              className="form-input"
              type="tel"
              name="telefon"
              placeholder="Telefon Numarası"
              value={formData.telefon}
              onChange={handleChange}
            />

            <select
              className="form-select"
              name="hizmet"
              value={formData.hizmet}
              onChange={handleChange}
            >
              <option value="" disabled>
                Hizmet Türü Seçiniz
              </option>
              <option value="web">Web Tasarım & Geliştirme</option>
              <option value="eticaret">E-Ticaret Çözümleri</option>
              <option value="ozel">Özel Web Uygulamaları</option>
              <option value="destek">Bakım & Teknik Destek</option>
            </select>

            <textarea
              className="form-textarea"
              name="mesaj"
              rows="4"
              placeholder="Bize projenizden kısaca bahsedin..."
              value={formData.mesaj}
              onChange={handleChange}
            ></textarea>

            <button
              type="submit"
              className="premium-btn text-black font-semibold text-sm w-full py-3 rounded-lg"
            >
              Fiyat Al
            </button>
          </form>
        </div>
      ) : (
        // ---- ONAY HALİ ----
        <div className="form-success animate-fadeIn">
          <div className="success-check">✓</div>
          <h2 className="success-title">Talebiniz Başarıyla Alınmıştır!</h2>
          <span className="success-code">{siparisNo}</span>
          <p className="success-text">
            En kısa sürede projenizi inceleyip sizinle iletişime geçeceğiz.
            Hâlden anladığımızı kanıtlamak için sabırsızlanıyoruz!
          </p>
        </div>
      )}
    </section>
  );
}