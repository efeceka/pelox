import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-[#0056A3] text-white mt-16">
      <div className="max-w-[1280px] mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* 1. Sütun - Logo & Kısa Yazı */}
        <div>
          <h3 className="text-xl font-bold mb-4">PELOX</h3>
          <p className="text-white/80 text-sm leading-relaxed">
            Paslanmaz çelik ve endüstriyel kimyasallarda yenilikçi, güvenilir ve
            çevre dostu çözümler sunuyoruz.
          </p>
        </div>

        {/* 2. Sütun - Hızlı Linkler */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Hızlı Linkler</h3>
          <ul className="space-y-2 text-white/80 text-sm">
            <li>
              <Link href="/" className="hover:text-white transition">
                Anasayfa
              </Link>
            </li>
            <li>
              <Link href="/yapim-asamasinda" className="hover:text-white transition">
                Hakkımızda
              </Link>
            </li>
            <li>
              <Link href="/yapim-asamasinda" className="hover:text-white transition">
                Ürünler
              </Link>
            </li>
            <li>
              <Link href="/yapim-asamasinda" className="hover:text-white transition">
                İletişim
              </Link>
            </li>
          </ul>
        </div>

        {/* 3. Sütun - İletişim */}
        <div>
          <h3 className="text-lg font-semibold mb-4">İletişim</h3>
          <ul className="space-y-3 text-white/80 text-sm">
            <li className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>Cevat Dündar İş Mer. 1246. Sk. No:174, 06374 Ostim Org. San. Ankara</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span>+0 (312) 386 16 56</span>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <span>info@pelox.com.tr</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Alt Telif Barı */}
      <div className="border-t border-white/20">
        <div className="max-w-[1280px] mx-auto px-6 py-4 text-center text-white/70 text-sm">
          © {new Date().getFullYear()} Pelox Kimya. Tüm hakları saklıdır.
        </div>
      </div>
    </footer>
  );
}