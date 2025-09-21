"use client";

import ProductsHero from "@/components/urunler/Hero";
import ProductCard from "@/components/urunler/ProductCard";
import { products } from "@/app/data/products";
import { useState, useMemo } from "react";


const FILTERS = [
  { key: "all", label: "Tüm Ürünler" },
  { key: "kimya", label: "Paslanmazlık Kimyasalları" },
  { key: "diger", label: "Diğer Ürünler" },
];

export default function ProductsPage() {
  const [active, setActive] = useState("all");

  const filtered = useMemo(() => {
    if (active === "all") return products;
    return products.filter(p => p.category === active);
  }, [active]);

  return (
    <>
      <ProductsHero />

      <section className="w-full bg-white py-14">
        <div className="max-w-[1280px] mx-auto px-6">
          {/* Başlık + açıklama */}
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0056A3]">
              Ürün Kataloğu
            </h2>
            <p className="mt-3 text-gray-600 max-w-[820px] mx-auto">
              Paslanmaz çelik ve endüstriyel kimya için yüksek performanslı
              çözüm ürünlerimizi keşfedin.
            </p>
            <div className="mx-auto mt-3 h-[3px] w-20 rounded bg-gradient-to-r from-[#2BA84A] to-[#0056A3]" />
          </div>

          {/* Filtre butonları */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
            {FILTERS.map(f => {
              const isActive = active === f.key;
              return (
                <button
                  key={f.key}
                  onClick={() => setActive(f.key)}
                  className={[
                    "px-4 py-2 rounded-lg border transition",
                    isActive
                      ? "bg-[#0056A3] text-white border-[#0056A3]"
                      : "bg-white text-[#0056A3] border-[#0056A3] hover:bg-[#0056A3] hover:text-white",
                  ].join(" ")}
                  aria-pressed={isActive}
                >
                  {f.label}
                </button>
              );
            })}
          </div>

          {/* Ürün grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
  {filtered.map(p => <ProductCard key={p.id} item={p} />)}
</div>
        </div>
      </section>
    </>
  );
}