"use client";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative w-full">
      {/* Arka plan görseli */}
      <div className="relative h-[100vh] w-full overflow-hidden">
        <Image
          src="/images/hero.jpg" // /public/images içine hero görselini koy
          alt="Pelox hero background"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        {/* Okunabilirlik için overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/35 to-black/50" />
      </div>

      {/* İçerik */}
      <div className="absolute inset-0 z-10 flex items-center justify-center">
  <div className="mx-auto max-w-[960px] px-6 text-center">
    {/* Logo bloğu: drop-shadow + opsiyonel cam panel */}
    <div className="mx-auto mb-6 inline-flex items-center justify-center">
      {/* İsteğe bağlı cam panel için bu wrapper'ı aç:
      <div className="rounded-xl bg-white/10 backdrop-blur-sm px-4 py-3">
      */}
        <Image
          src="/images/image.png"
          alt="Pelox Logo"
          width={220}
          height={64}
          className="h-auto w-[250px] sm:w-[270px] md:w-[280px]" 
          priority
        />
          </div>

          {/* Slogan */}
          <h1 className="mx-auto max-w-[820px] text-white/95 text-2xl sm:text-3xl md:text-4xl font-semibold leading-tight">
            Endüstriyel Temizlik ve Yüzey Çözümleri
          </h1>

          {/* Alt açıklama */}
          <p className="mx-auto mt-3 max-w-[760px] text-white/80 text-sm sm:text-base">
            Pas ve kireç sökücü kimyasallarda güvenilir, çevreye duyarlı ve yüksek performanslı çözümler.
          </p>

          {/* CTA */}
          <div className="mt-6">
            <Link
              href="/yapim-asamasinda"
              className="inline-flex items-center justify-center rounded-lg px-5 py-3 text-base sm:text-lg font-medium
                         bg-[#2BA84A] text-white hover:bg-[#24913F] transition-colors shadow-md"
            >
              Ürünleri Keşfet
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}