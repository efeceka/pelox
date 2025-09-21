import Image from "next/image";
import Link from "next/link";

export default function ProductsPreview() {
  return (
    <section className="w-full bg-gray-50 py-16">
      <div className="max-w-[1280px] mx-auto px-6 text-center">
        {/* Başlık */}
        <h2 className="text-2xl sm:text-3xl font-bold text-[#0056A3] mb-10">
          Ürünlerimiz
        </h2>

        {/* Kartlar */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Ürün 1 */}
          <div className="rounded-xl overflow-hidden shadow-md hover:shadow-lg transition">
            <Image
              src="/images/mobilya.webp"
              alt="Mobilya Tutkalı"
              width={400}
              height={250}
              className="object-cover w-full h-[200px]"
            />
            <div className="p-5 text-left">
              <h3 className="text-lg font-semibold text-[#0056A3] mb-2">
              PELOX Mobilya Tutkalı Solventi
              </h3>
              <p className="text-gray-600 text-sm mb-4">
              Ahşap ve mobilya uygulamalarında yüksek yapışma gücü sağlayan, dayanıklı ve uzun ömürlü kullanım için geliştirilmiş tutkal.
              </p>
              <Link
                href="/yapim-asamasinda"
                className="text-[#2BA84A] hover:underline font-medium"
              >
                İncele →
              </Link>
            </div>
          </div>

          {/* Ürün 2 */}
          <div className="rounded-xl overflow-hidden shadow-md hover:shadow-lg transition">
            <Image
              src="/images/pas.webp"
              alt="Pas Sökücü"
              width={400}
              height={250}
              className="object-cover w-full h-[200px]"
            />
            <div className="p-5 text-left">
              <h3 className="text-lg font-semibold text-[#0056A3] mb-2">
              PELOX Pas Temizlik Kimyasalı
              </h3>
              <p className="text-gray-600 text-sm mb-4">
              Demir yüzeylerdeki pas lekelerini saniyeler içinde temizler, metal koruyucu formülüyle hızlı ve etkili sonuç sağlar.
              </p>
              <Link
                href="/yapim-asamasinda"
                className="text-[#2BA84A] hover:underline font-medium"
              >
                İncele →
              </Link>
            </div>
          </div>

          {/* Ürün 3 */}
          <div className="rounded-xl overflow-hidden shadow-md hover:shadow-lg transition">
            <Image
              src="/images/kaynak.png"
              alt="Kaynak Temizleme Makinesi"
              width={400}
              height={250}
              className="object-cover w-full h-[200px]"
            />
            <div className="p-5 text-left">
              <h3 className="text-lg font-semibold text-[#0056A3] mb-2">
              PELOX Kaynak Temizleme Cihazı Digital
              </h3>
              <p className="text-gray-600 text-sm mb-4">
              “Fırçalı elektrot sistemiyle en zor köşelere ulaşır, kaynak lekelerini temizler, pasivasyon yapar ve metal yüzeyine zarar vermez.
              </p>
              <Link
                href="/yapim-asamasinda"
                className="text-[#2BA84A] hover:underline font-medium"
              >
                İncele →
              </Link>
            </div>
          </div>
        </div>

        {/* Tüm ürünler butonu */}
        <div className="mt-10">
          <Link
            href="/yapim-asamasinda"
            className="inline-flex items-center justify-center rounded-lg px-6 py-3
                       bg-[#0056A3] text-white font-medium hover:bg-[#2BA84A] transition-colors"
          >
            Tüm Ürünler
          </Link>
        </div>
      </div>
    </section>
  );
}