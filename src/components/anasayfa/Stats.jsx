// src/components/Stats.jsx
import { Factory, FlaskConical, ShieldCheck, Users } from "lucide-react";

export default function Stats({
  items = [
    { icon: <Factory className="w-6 h-6" />, value: "10+", label: "Yıl Tecrübe" },
    { icon: <FlaskConical className="w-6 h-6" />, value: "50+", label: "Ürün Çeşidi" },
    { icon: <Users className="w-6 h-6" />, value: "100+", label: "Tedarik Edilen Firma" },
    { icon: <ShieldCheck className="w-6 h-6" />, value: "99%", label: "Müşteri Memnuniyeti" }
  ],
  title = "Güven Veren Rakamlar",
  subtitle = "Endüstriyel temizlik ve yüzey kimyasallarında sürdürülebilir, güvenilir çözümler."
}) {
  return (
    <section className="relative w-full py-16">
      {/* Arkaplan görsel */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/stats.jpg')" }}
      />
      {/* Koyu overlay okunabilirlik için */}
      <div className="absolute inset-0 bg-black/50" />

      {/* İçerik */}
      <div className="relative max-w-[1280px] mx-auto px-6 text-white">
        {/* Başlık */}
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold">{title}</h2>
          <p className="mt-3 max-w-[820px] mx-auto">{subtitle}</p>
        </div>

        {/* Kartlar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {items.map((it, i) => (
            <div
              key={i}
              className="rounded-xl bg-white/10 backdrop-blur-sm shadow-sm hover:shadow-md transition p-5 flex items-center gap-4"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-white/20 text-white">
                {it.icon}
              </div>
              <div>
                <div className="text-2xl font-bold leading-none">{it.value}</div>
                <div className="text-sm">{it.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}