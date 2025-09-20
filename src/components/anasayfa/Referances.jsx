"use client";
import Image from "next/image";
import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function References() {
  const scrollRef = useRef(null);

  const scroll = (dir) => {
    if (scrollRef.current) {
      const amount = 300; // her tıklamada kayma miktarı (px)
      scrollRef.current.scrollBy({
        left: dir === "left" ? -amount : amount,
        behavior: "smooth",
      });
    }
  };

  const logos = [
    "/images/referans/pasder.png",
    "/images/referans/seker.png",
    "/images/referans/tcdd.png",
    "/images/referans/traktor.png",
    "/images/referans/adramed.png",
    "/images/referans/aselsan.jpg",
    "/images/referans/efes.jpeg",
  ];

  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-[1280px] mx-auto px-6">
        {/* Başlık */}
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0056A3]">
            Bize Güvenen Firmalar
          </h2>
          <p className="mt-3 text-gray-600">
            Türkiye ve dünyadan birçok kurumsal firma Pelox çözümlerini tercih ediyor.
          </p>
        </div>

        {/* Scroll alanı + butonlar */}
        <div className="relative">
          {/* Scrollable container */}
          <div
            ref={scrollRef}
            className="flex gap-8 overflow-x-auto scroll-hidden scroll-smooth px-2 sm:px-6 md:px-10"
          >
            {logos.map((logo, idx) => (
              <div
                key={idx}
                className="flex-shrink-0 aspect-[4/3] max-w-[200px] flex items-center justify-center rounded-lg bg-gray-50 border p-4"
              >
                <Image
                  src={logo}
                  alt={`Referans ${idx + 1}`}
                  width={180}
                  height={135}
                  className="object-contain w-full h-full"
                />
              </div>
            ))}
          </div>

          {/* Sol buton */}
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow hover:bg-white"
          >
            <ChevronLeft className="w-6 h-6 text-[#0056A3]" />
          </button>

          {/* Sağ buton */}
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow hover:bg-white"
          >
            <ChevronRight className="w-6 h-6 text-[#0056A3]" />
          </button>
        </div>
      </div>
    </section>
  );
}