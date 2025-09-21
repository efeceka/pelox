"use client";
import Link from "next/link";
import { useState, useMemo, useRef } from "react";
import { Menu, X, ChevronDown, ChevronRight, FlaskConical, Boxes } from "lucide-react";
import { products } from "@/app/data/products";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const [mobileKimyaOpen, setMobileKimyaOpen] = useState(false);
  const [mobileDigerOpen, setMobileDigerOpen] = useState(false);

  // hover gecikmesi için timer
  const closeTimer = useRef(null);

  // Ürünleri kategorilere ayır
  const { kimya, diger } = useMemo(() => {
    const kimya = products.filter((p) => p.category === "kimya");
    const diger = products.filter((p) => p.category === "diger");
    return { kimya, diger };
  }, []);

  // Hover aç/kapat (gecikmeli kapanma)
  const openProducts = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setIsProductsOpen(true);
  };
  const closeProducts = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setIsProductsOpen(false), 180); // 180ms buffer
  };

  return (
    <header
      className="fixed top-0 left-0 w-full z-50 
      bg-white/60 supports-[backdrop-filter]:bg-white/60 
      backdrop-blur-md border-b border-white/20 shadow-sm overflow-x-clip"
    >
      <div className="max-w-[1280px] mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <img src="/images/logo2.png" alt="Pelox Logo" className="h-12 w-auto" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8 items-center font-medium text-lg relative">
          <Link href="/" className="text-[#0056A3] hover:text-[#2BA84A] transition-colors">
            Anasayfa
          </Link>
          <Link href="/hakkimizda" className="text-[#0056A3] hover:text-[#2BA84A] transition-colors">
            Hakkımızda
          </Link>

          {/* Ürünler - Mega Menü */}
          <div
            className="relative"
            onMouseEnter={openProducts}
            onMouseLeave={closeProducts}
          >
           <Link
                href="/urunler"
                className="flex items-center gap-1 text-[#0056A3] hover:text-[#2BA84A] transition-colors"
            >
                Ürünler <ChevronDown size={18} className="mt-[2px]" />
            </Link>


            {isProductsOpen && (
              <div
                className="
                  absolute left-1/2 -translate-x-1/2 top-full
                  mt-0 /* gap yok, hemen butonun altında */
                  w-[min(860px,calc(100vw-2rem))]
                  bg-white border shadow-xl rounded-2xl p-6 z-50
                  overflow-x-hidden
                "
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  {/* Paslanmazlık Kimyasalları */}
                  <div>
                    <div className="flex items-center gap-2 text-[#0056A3]">
                      <FlaskConical size={18} />
                      <h3 className="text-sm font-semibold">Paslanmazlık Kimyasalları</h3>
                    </div>
                    <div className="h-[2px] w-12 bg-gradient-to-r from-[#2BA84A] to-[#0056A3] rounded mt-2 mb-3" />
                    <ul className="space-y-1.5 text-sm">
                      {kimya.map((p) => (
                        <li key={p.id} className="break-words">
                          <Link
                            href={`/urunler/${p.id}`}
                            className="group flex items-center gap-2 text-gray-700 hover:text-[#0056A3] transition-colors"
                          >
                            <ChevronRight
                              size={16}
                              className="shrink-0 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 transition-transform"
                            />
                            <span className="leading-snug">{p.name}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Diğer Ürünler */}
                  <div>
                    <div className="flex items-center gap-2 text-[#0056A3]">
                      <Boxes size={18} />
                      <h3 className="text-sm font-semibold">Diğer Ürünler</h3>
                    </div>
                    <div className="h-[2px] w-12 bg-gradient-to-r from-[#2BA84A] to-[#0056A3] rounded mt-2 mb-3" />
                    <ul className="space-y-1.5 text-sm">
                      {diger.map((p) => (
                        <li key={p.id} className="break-words">
                          <Link
                            href={`/urunler/${p.id}`}
                            className="group flex items-center gap-2 text-gray-700 hover:text-[#0056A3] transition-colors"
                          >
                            <ChevronRight
                              size={16}
                              className="shrink-0 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 transition-transform"
                            />
                            <span className="leading-snug">{p.name}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>

          <Link
            href="/iletisim"
            className="text-[#0056A3] hover:text-[#2BA84A] transition-colors"
          >
            İletişim
          </Link>

          {/* Dil butonu */}
          <button className="ml-2 border border-[#0056A3] text-[#0056A3] px-3 py-1 rounded hover:bg-[#0056A3] hover:text-white transition">
            TR / EN
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-[#0056A3]"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md max-h-[85vh] overflow-y-auto">
          <nav className="flex flex-col gap-4 p-6 font-medium text-lg">
            <Link href="/" onClick={() => setIsOpen(false)} className="text-[#0056A3] hover:text-[#2BA84A]">
              Anasayfa
            </Link>
            <Link href="/hakkimizda" onClick={() => setIsOpen(false)} className="text-[#0056A3] hover:text-[#2BA84A]">
              Hakkımızda
            </Link>

            {/* Ürünler - mobil açılır */}
            <button
              onClick={() => setMobileProductsOpen((v) => !v)}
              className="flex items-center justify-between text-left text-[#0056A3] hover:text-[#2BA84A]"
            >
              <span>Ürünler</span>
              <ChevronDown size={18} className={`transition ${mobileProductsOpen ? "rotate-180" : ""}`} />
            </button>

            {mobileProductsOpen && (
              <div className="pl-2 space-y-4">
                {/* Kimya */}
                <button
                  onClick={() => setMobileKimyaOpen((v) => !v)}
                  className="flex items-center justify-between w-full text-sm font-semibold text-[#0056A3]"
                >
                  Paslanmazlık Kimyasalları
                  <ChevronDown size={16} className={`transition ${mobileKimyaOpen ? "rotate-180" : ""}`} />
                </button>
                {mobileKimyaOpen && (
                  <ul className="mt-2 space-y-2 text-sm pl-3">
                    {kimya.map((p) => (
                      <li key={p.id}>
                        <Link
                          href={`/urunler/${p.id}`}
                          onClick={() => setIsOpen(false)}
                          className="text-gray-700"
                        >
                          {p.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}

                {/* Diğer */}
                <button
                  onClick={() => setMobileDigerOpen((v) => !v)}
                  className="flex items-center justify-between w-full text-sm font-semibold text-[#0056A3]"
                >
                  Diğer Ürünler
                  <ChevronDown size={16} className={`transition ${mobileDigerOpen ? "rotate-180" : ""}`} />
                </button>
                {mobileDigerOpen && (
                  <ul className="mt-2 space-y-2 text-sm pl-3">
                    {diger.map((p) => (
                      <li key={p.id}>
                        <Link
                          href={`/urunler/${p.id}`}
                          onClick={() => setIsOpen(false)}
                          className="text-gray-700"
                        >
                          {p.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            )}

            <Link href="/yapim-asamasinda" onClick={() => setIsOpen(false)} className="text-[#0056A3] hover:text-[#2BA84A]">
              İletişim
            </Link>
            <button className="border border-[#0056A3] text-[#0056A3] px-3 py-1 rounded hover:bg-[#0056A3] hover:text-white transition">
              TR / EN
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}