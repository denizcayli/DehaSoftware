import { useState } from "react";

export default function Form({ services }) {

  const [formData, setFormData] = useState({
    ad: "",
    email: "",
    telefon: "",
    hizmet: "",
    mesaj: "",
  });

  const [gonderildi, setGonderildi] = useState(false);
  const [siparisNo, setSiparisNo] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.ad.trim() || !formData.email.trim()) {
      alert("Lütfen en azından ad ve e-posta alanlarını doldurun.");
      return;
    }

    const rnd = Math.floor(100000 + Math.random() * 900000);
    setSiparisNo(`#DEHA-${rnd}`);
    setGonderildi(true);
  };

  return (
    <section id="teklif-al" className="w-full max-w-lg py-16">
      {!gonderildi ? (

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
              <option value="mobil">Mobil Uygulama</option>
              <option value="yapayzeka">Yapay Zeka</option>
              <option value="veri">Veri Analitiği</option>
              <option value="siber">Siber Güvenlik</option>
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