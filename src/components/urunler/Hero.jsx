"use client";
import Image from "next/image";

export default function ProductsHero() {
  return (
    <section className="relative w-full h-[75vh] flex items-center justify-center">
      {/* Arka plan görseli */}
      <Image
        src="/images/hakkimizda.webp" // public/images içine uygun bir görsel koy
        alt="Ürünler Arka Plan"
        fill
        priority
        className="object-cover"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30" />

      {/* İçerik */}
      <div className="relative z-10 text-center text-white px-6">
        {/* Başlık */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold drop-shadow-lg">
          Ürünlerimiz
        </h1>

        {/* Çizgi */}
        <div className="mx-auto mt-3 mb-6 h-[3px] w-20 rounded bg-gradient-to-r from-[#2BA84A] to-[#0056A3]" />

        {/* Alt açıklama */}
        <p className="max-w-[720px] mx-auto text-base sm:text-lg md:text-xl text-white/90 drop-shadow">
          Paslanmaz çelik ve endüstriyel kimya alanında yüksek performanslı,
          güvenilir ve çevreye duyarlı çözümler sunuyoruz.
        </p>
      </div>
    </section>
  );
}