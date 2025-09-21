import Image from "next/image";
import Link from "next/link";
import { products } from "@/app/data/products";

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.id }));
}

export async function generateMetadata({ params }) {
  const prod = products.find((p) => p.id === params.slug);
  return { title: `${prod?.name ?? "Ürün"} | PELOX` };
}

export default function ProductDetail({ params }) {
  const prod = products.find((p) => p.id === params.slug);
  if (!prod) {
    return (
      <section className="max-w-[1280px] mx-auto px-6 py-20">
        <p>Ürün bulunamadı.</p>
      </section>
    );
  }

  return (
    <>
      {/* Sabit hero */}
      <section className="relative w-full h-[50vh] flex items-center justify-center">
        <Image
          src="/images/hakkimizda.webp"
          alt="Ürünler Hero"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center text-white px-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold drop-shadow-lg">
            Ürün Özellikleri
          </h1>
          <div className="mx-auto mt-3 h-[3px] w-20 rounded bg-gradient-to-r from-[#2BA84A] to-[#0056A3]" />
        </div>
      </section>

      {/* İçerik */}
      <section className="w-full bg-white py-16">
        <div className="max-w-[1280px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          {/* Sol: Ürün görseli */}
          {/* Sol: Ürün görseli (sticky) */}
<div className="md:sticky md:top-24">
  <div className="relative w-full h-[350px] md:h-[400px] rounded-xl overflow-hidden">
    <Image
      src={prod.image}
      alt={prod.name}
      fill
      className="object-contain"
    />
  </div>
</div>

          {/* Sağ: Başlık, içerik, en altta butonlar */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0056A3]">
              {prod.name}
            </h2>

            {/* İçerik */}
            {prod.content && (
              <article className="mt-6 text-gray-700 text-base leading-relaxed space-y-4">
                {prod.content.split("\n").map(
                  (line, i) =>
                    line.trim() && (
                      <p key={i} className="text-sm sm:text-base">
                        {line.trim()}
                      </p>
                    )
                )}
              </article>
            )}

            {/* Butonlar */}
            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                href="/urunler"
                className="rounded-lg px-5 py-3 border border-gray-300 hover:bg-gray-50 transition"
              >
                Ürünlere Geri Dön
              </Link>
              <Link
                href="/iletisim"
                className="rounded-lg px-5 py-3 bg-[#0056A3] text-white hover:bg-[#2BA84A] transition"
              >
                Teklif Al
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}