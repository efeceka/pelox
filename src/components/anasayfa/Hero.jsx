"use client";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative w-full">
      {/* Arka plan görseli */}
      <div className="relative h-[100vh] w-full overflow-hidden">
        <Image
          src="/images/hero.webp"
          alt="Pelox hero background"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>

      {/* İçerik */}
      <div className="absolute inset-0 z-10 flex items-center justify-center">
        <div className="mx-auto max-w-[960px] px-6 text-center">
          {/* Logo */}
          <div className="mx-auto mb-10 inline-flex items-center justify-center">
            <div className="rounded-xl bg-white/20 backdrop-blur-sm px-6 py-4 shadow-lg">
              <Image
                src="/images/logo2.png"
                alt="Pelox Logo"
                width={220}
                height={64}
                className="h-auto w-[250px] sm:w-[270px] md:w-[400px]" 
                priority
              />
            </div>
          </div>

          {/* Başlık */}
          <h1 className="mx-auto max-w-[820px] text-white 
                         text-3xl sm:text-4xl md:text-5xl font-extrabold 
                         leading-tight drop-shadow-[0_4px_6px_rgba(0,0,0,0.8)]">
            Paslanmaz Çelikte Yenilikçi Kimya
          </h1>

          {/* Alt açıklama */}
          <p className="mx-auto mt-4 max-w-[760px] text-white 
                        text-base sm:text-lg md:text-xl font-medium 
                        drop-shadow-[0_3px_4px_rgba(0,0,0,0.7)]">
            Kurulduğumuz günden bu yana müşteri memnuniyetini ilke edinerek, 
            paslanmaz çelik ve endüstriyel kimyasallar alanında yenilikçi, 
            kaliteli ve sürdürülebilir çözümler sunuyoruz.
          </p>

          {/* CTA */}
          <div className="mt-10">
            <Link
              href="/urunler"
              className="inline-flex items-center justify-center rounded-lg px-6 py-3 
                         text-lg sm:text-xl font-semibold
                         bg-[#2BA84A] text-white hover:bg-[#24913F] 
                         transition-colors shadow-md"
            >
              Ürünleri Keşfet
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}