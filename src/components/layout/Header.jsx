"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // Burger menü ikonları

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50
    bg-white/60 supports-[backdrop-filter]:bg-white/60
    backdrop-blur-md border-b border-white/20 shadow-sm">
  <div className="max-w-[1280px] mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <img
            src="/images/image.png"
            alt="Pelox Logo"
            className="h-12 w-auto"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8 items-center font-medium text-lg">
          <Link href="/" className="text-[#0056A3] hover:text-[#2BA84A] transition-colors">
            Anasayfa
          </Link>
          <Link href="/yapim-asamasinda" className="text-[#0056A3] hover:text-[#2BA84A] transition-colors">
            Hakkımızda
          </Link>
          <Link href="/yapim-asamasinda" className="text-[#0056A3] hover:text-[#2BA84A] transition-colors">
            Ürünler
          </Link>
          <Link href="/yapim-asamasinda" className="text-[#0056A3] hover:text-[#2BA84A] transition-colors">
            İletişim
          </Link>
          {/* Dil butonu */}
          <button className="ml-4 border border-[#0056A3] text-[#0056A3] px-3 py-1 rounded hover:bg-[#0056A3] hover:text-white transition">
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
        <div className="md:hidden bg-white shadow-md">
          <nav className="flex flex-col gap-4 p-6 font-medium text-lg">
            <Link href="/" onClick={() => setIsOpen(false)} className="text-[#0056A3] hover:text-[#2BA84A]">
              Anasayfa
            </Link>
            <Link href="/yapim-asamasinda" onClick={() => setIsOpen(false)} className="text-[#0056A3] hover:text-[#2BA84A]">
              Hakkımızda
            </Link>
            <Link href="/yapim-asamasinda" onClick={() => setIsOpen(false)} className="text-[#0056A3] hover:text-[#2BA84A]">
              Ürünler
            </Link>
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