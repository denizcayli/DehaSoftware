export default function AboutUs() {
  return (
    <section
      id="hakkimizda"
      className="w-full max-w-4xl py-16 border-t border-white/[0.06]"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <span className="text-xs font-bold tracking-widest text-cyan uppercase">
            Biz Kimiz?
          </span>

          <h2 className="font-display text-2xl font-bold text-white mt-1">
            Deha Hikayesi
          </h2>
        </div>

        <div className="md:col-span-2 text-muted text-sm leading-relaxed space-y-4">
          <div>
            Deha Yazılım, iki bilgisayar programcısının teknolojiye ve üretime
            olan tutkusuyla kurulmuş yenilikçi bir yazılım ajansıdır.
            Sektördeki en büyük açığın "iletişimsizlik" ve "anlaşılmamak"
            olduğunu gördük.
          </div>

            <div>
            Müşterilerimizin ne istediğini dinliyor, teknik terimlerin arkasına
            saklanmadan en doğru çözümü en samimi yaklaşımla sunuyoruz.
            Hale ve Deniz olarak fikirlerinizi tasarımdan yayına kadar
            titizlikle işliyor, sadece bir web sitesi değil yaşayan bir dijital
            kimlik inşa ediyoruz. Bizimle çalışan herkes bilir ki; biz gerçekten
            hâlden anlıyoruz.
          </div>
        </div>
      </div>
    </section>
  )
}