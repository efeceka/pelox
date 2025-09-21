"use client";
import Image from "next/image";

export default function AboutHero() {
  return (
    <section className="relative w-full h-[75vh] flex items-center justify-center">
      {/* Arka plan görseli */}
      <Image
        src="/images/hakkimizda2.webp"
        alt="Hakkımızda Arka Plan"
        fill
        priority
        className="object-cover"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* İçerik */}
      <div className="relative z-10 text-center text-white px-6">
        {/* Başlık */}
        <h1
          className="mx-auto text-3xl sm:text-4xl md:text-5xl font-extrabold 
                     drop-shadow-[0_4px_6px_rgba(0,0,0,0.8)] mb-6"
        >
          Hakkımızda
        </h1>

        {/* Alt açıklama */}
        <p
          className="max-w-[720px] mx-auto text-base sm:text-lg md:text-xl 
                     font-medium text-white/90 
                     drop-shadow-[0_3px_4px_rgba(0,0,0,0.7)]"
        >
          Pelox, paslanmaz çelik ve endüstriyel kimya alanında yenilikçi çözümler
          sunarak kaliteyi ve güveni ön planda tutan, sürdürülebilirliği ilke
          edinmiş bir markadır.
        </p>
      </div>
    </section>
  );
}