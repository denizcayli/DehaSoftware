// src/mockData.js

// 1. Menü Elemanları
export const categories = ["Anasayfa", "Hakkımızda", "Hizmetlerimiz", "SSS", "İletişim"];

// 2. Hizmet Açıklamaları
export const services = {
  web:
    "İşletmenizin dijital dünyadaki vitrini olacak, modern, hızlı ve mobil uyumlu web siteleri tasarlıyor ve kodluyoruz.",

  eticaret:
    "Ürünlerinizi internet üzerinden güvenle satabilmeniz için güçlü, ölçeklenebilir ve kullanıcı dostu e-ticaret çözümleri geliştiriyoruz.",

  ozel:
    "Şirketinizin ihtiyaçlarına özel yönetim panelleri, CRM sistemleri ve web uygulamaları geliştiriyoruz.",

  destek:
    "Web sitenizin güvenli, güncel ve hızlı kalması için bakım, güncelleme ve teknik destek hizmetleri sunuyoruz.",

  mobil:
    "iOS ve Android platformları için modern, hızlı ve kullanıcı dostu mobil uygulamalar geliştiriyoruz.",

  yapayzeka:
    "Yapay zeka destekli çözümler, chatbot sistemleri, görüntü işleme ve makine öğrenmesi projeleri geliştiriyoruz.",

  veri:
    "Verilerinizi analiz ederek işletmeniz için anlamlı raporlar, dashboardlar ve karar destek sistemleri oluşturuyoruz.",

  siber:
    "Siber güvenlik danışmanlığı, güvenlik testleri ve sistem koruma çözümleriyle dijital varlıklarınızı güvence altına alıyoruz.",
};

// 3. SSS Verileri (question / answer)
export const faqData = [
  {
    question: "Bir projenin tamamlanması ne kadar sürer?",
    answer: "Projenin büyüklüğüne göre değişir. Kurumsal bir web sitesi 1-2 hafta sürerken, kapsamlı e-ticaret veya özel uygulamalar 3-6 hafta arası sürebilir.",
  },
  {
    question: "Süreç boyunca projenin durumunu nasıl takip edebilirim?",
    answer: "Biz 'hâlden anlayan' bir ekibiz. Projenin her aşamasında (tasarım, kodlama, test) sizinle düzenli iletişimde kalıyor ve ilerlemeyi canlı aşamalarla paylaşıyoruz.",
  },
  {
    question: "Web sitesi bittikten sonra güncellemeleri kendim yapabilir miyim?",
    answer: "Evet. Geliştirdiğimiz sitelerde kullanımı kolay bir panel hazırlıyoruz. Vereceğimiz kısa eğitimle içeriklerinizi veya ürünlerinizi hiç zorlanmadan güncelleyebilirsiniz.",
  },
  {
    question: "Hazır şablon mu kullanıyorsunuz yoksa özel kodlama mı?",
    answer: "Performans, hız ve özgünlük isteyen projelerimizde en güncel altyapılarla sıfırdan, tamamen markanıza özel tasarımlar ve temiz kodlama yapıyoruz.",
  },
  {
    question: "Fiyatlandırmayı neye göre belirliyorsunuz?",
    answer: "Projenin sayfa sayısı, istenecek özel fonksiyonlar, e-ticaret entegrasyonları ve tasarımın karmaşıklığı gibi kriterleri inceleyerek tamamen adil bir bütçe çıkarıyoruz.",
  },
  {
    question: "Mobil uyumluluk ve SEO desteği fiyata dahil mi?",
    answer: "Kesinlikle! Yaptığımız tüm web siteleri mobil/tablet uyumlu (responsive) ve Google standartlarına uygun arama motoru optimizasyonu (SEO) yapılmış olarak teslim edilir.",
  },
  {
    question: "Proje tesliminden sonra teknik destek veriyor musunuz?",
    answer: "Evet, teslimat sonrasında da yalnız değilsiniz. Sitenizin güvenliği, yedeklenmesi ve güncel kalması için aylık veya yıllık bakım destek paketleri sunuyoruz.",
  },
  {
    question: "Var olan eski web sitemizi yenileyebilir misiniz?",
    answer: "Tabii ki. Eski sitenizin verilerini ve içeriğini kaybetmeden, modern teknolojilerle baştan tasarlıyor, hızlandırıyor ve günümüz trendlerine uygun hale getiriyoruz.",
  },
];

// 4. Özellikler (Neden Deha?) — ikon adını Features.jsx temaya göre kendisi üretir
export const features = [
  {
    title: "Yenilikçi Teknoloji",
    desc: "Sektörün öncüsü teknolojilerle iş süreçlerinizi optimize edin.",
  },
  {
    title: "Güçlü Bilgi Güvenliği",
    desc: "Verileriniz bizimle güvende, yüksek bilgi güvenliği standartlarında koruma.",
  },
  {
    title: "Müşteri Odaklı Çözümler",
    desc: "Her kullanıcımız özeldir, ihtiyaçlarınıza özel çözümler için çalışıyoruz.",
  },
  {
    title: "Esnek ve Ölçeklenebilir Yazılımlar",
    desc: "Siz işinizi büyütün, yazılımlarımız işinize her zaman uyum sağlayacaktır.",
  },
  {
    title: "Uzman Kadro ve Deneyim",
    desc: "Alanında uzman ekibimizle her zaman yanınızdayız, işletmenize değer katmak istiyoruz.",
  },
  {
    title: "İleri Düzey Raporlama ve Analiz",
    desc: "Stratejik raporlarınız hazır. Verilerin gücüyle, işinizi daha iyi yönetin.",
  },
];

// 5. Hizmet menüsü (Services sekmeleri + dropdown için)
export const serviceMenu = [
  { key: "web", title: "Web Tasarım" },
  { key: "eticaret", title: "E-Ticaret" },
  { key: "ozel", title: "Özel Uygulamalar" },
  { key: "mobil", title: "Mobil Uygulama" },
  { key: "yapayzeka", title: "Yapay Zeka" },
  { key: "veri", title: "Veri Analitiği" },
  { key: "siber", title: "Siber Güvenlik" },
  { key: "destek", title: "Teknik Destek" },
];