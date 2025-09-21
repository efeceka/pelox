import Link from "next/link";
import Image from "next/image";

export default function AboutPreview() {
  return (
    <section className="w-full bg-gray-50 py-16">
      <div className="max-w-[1280px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Sol: Yazı Alanı */}
        <div className="text-left">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0056A3]">
            Pelox Hakkında
          </h2>
          <p className="mt-4 max-w-[600px] text-gray-600 text-base sm:text-lg">
            Pelox, kurulduğu günden bu yana paslanmaz çelik ve endüstriyel kimyasallar
            alanındaki gelişmeleri yakından takip ederek müşteri odaklı çözümler
            sunmaktadır. Tecrübemizi ve teknolojiyi birleştirerek kalite ve güven
            ilkelerinden ödün vermeden, hizmet öncesi ve sonrası her aşamada yanınızdayız.
            Misyonumuz, paslanmaz çelik alanında müşterilerimizin her türlü ihtiyacına
            <span className="font-semibold"> çözüm ortağı olmak</span>; vizyonumuz ise
            yenilikçi, güvenilir ve küresel standartlarda üretim anlayışıyla sektörün
            <span className="font-semibold"> öncü firmalarından biri</span> olmaktır.
            </p>
          <div className="mt-6">
            <Link
              href="/hakkimizda"
              className="inline-flex items-center justify-center rounded-lg px-6 py-3
                         bg-[#0056A3] text-white font-medium hover:bg-[#2BA84A] transition-colors"
            >
              Daha Fazla Bilgi
            </Link>
          </div>
        </div>

        {/* Sağ: Görsel */}
        <div className="flex justify-center">
          <Image
            src="/images/about.webp" // /public/images içine görsel koy
            alt="Pelox Hakkında"
            width={500}
            height={350}
            className="rounded-xl shadow-md object-cover"
          />
        </div>
      </div>
    </section>
  );
}