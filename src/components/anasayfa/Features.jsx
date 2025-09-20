// src/components/Features.jsx
import { CheckCircle2, Stars, Wallet, Recycle } from "lucide-react";

export default function Features() {
  const items = [
    {
      icon: <CheckCircle2 className="w-7 h-7 text-[#2BA84A]" />,
      title: "Çözüm Üretmek",
      desc: "Teknolojik gelişmeleri takip ederek kendimizi ve ürünlerimizi sürekli geliştiriyoruz.",
    },
    {
      icon: <Stars className="w-7 h-7 text-[#0056A3]" />,
      title: "Tecrübe",
      desc: "Uzman kadromuz ile her zaman en iyi sonuçları verecek ürünler için çalışıyoruz.",
    },
    {
      icon: <Wallet className="w-7 h-7 text-[#2BA84A]" />,
      title: "Ekonomik",
      desc: "Kalite–fiyat dengesinden ödün vermeden akılcı çözümler üretiyoruz.",
    },
    {
      icon: <Recycle className="w-7 h-7 text-gray-900" />,
      title: "Geniş Ürün Yelpazesi",
      desc: "Müşterilerimizin tüm ihtiyaçlarına çözüm oluşturacak çok sayıda ürün geliştiriyoruz.",
    },
  ];

  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-[1280px] mx-auto px-6">
        {/* Başlık + Açıklama */}
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0056A3]">
            Neden Pelox?
          </h2>
          <p className="mt-3 text-gray-600 max-w-[800px] mx-auto">
            Kalite, güven ve yenilikçi çözümlerle endüstriyel kimya sektöründe
            müşterilerimizin ihtiyaçlarına en uygun hizmeti sunuyoruz.
          </p>
        </div>

        {/* Özellik Kartları */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {items.map((it, i) => (
            <div
              key={i}
              className="rounded-2xl bg-white/90 border border-gray-100 shadow-sm hover:shadow-md transition p-6 flex items-start gap-4"
            >
              <div className="shrink-0 rounded-full bg-gray-50 p-3">
                {it.icon}
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900">
                  {it.title}
                </h3>
                <p className="mt-2 text-gray-600">{it.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}