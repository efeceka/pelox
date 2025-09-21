"use client";
import Image from "next/image";

export default function ContactHero() {
  return (
    <section className="relative w-full h-[60vh] flex items-center justify-center">
      {/* Arka plan görseli */}
      <Image
        src="/images/iletisim.webp" // public/images içine iletişim/harita/ofis temalı bir görsel koy
        alt="İletişim Arka Plan"
        fill
        priority
        className="object-cover"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* İçerik */}
      <div className="relative z-10 text-center text-white px-6">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold drop-shadow-lg">
          İletişim
        </h1>
        <div className="mx-auto mt-3 mb-6 h-[3px] w-20 rounded bg-gradient-to-r from-[#2BA84A] to-[#0056A3]" />
        <p className="max-w-[720px] mx-auto text-base sm:text-lg md:text-xl text-white/90 drop-shadow">
          Sorularınız ve teklifleriniz için bizimle iletişime geçin. En kısa sürede dönüş yapıyoruz.
        </p>
      </div>
    </section>
  );
}