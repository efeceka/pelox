import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Construction } from "lucide-react";

export default function UnderConstruction() {
  return (
    <div className="mt-20 min-h-screen bg-gradient-to-br from-[#0056A3] to-[#2BA84A] flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        {/* Logo */}
        <div className="mb-8">
          <Image
            src="/images/image.png"
            alt="Pelox Logo"
            width={120}
            height={80}
            className="mx-auto"
          />
        </div>

        {/* Construction Icon */}
        <div className="mb-8 flex justify-center">
          <div className="bg-white/20 p-6 rounded-full">
            <Construction size={80} className="text-white" />
          </div>
        </div>

        {/* Main Content */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Yapım Aşamasında
          </h1>
          <p className="text-white/90 text-lg md:text-xl mb-6">
            Sitemiz şu anda geliştirme aşamasındadır. En kısa sürede hizmetinizde olacağız.
          </p>
          <p className="text-white/80 text-base">
            Bu sayfa yakında aktif hale gelecektir.
          </p>
        </div>

        {/* Back Button */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-white text-[#0056A3] px-6 py-3 rounded-lg font-semibold hover:bg-white/90 transition-colors"
        >
          <ArrowLeft size={20} />
          Ana Sayfaya Dön
        </Link>

        {/* Contact Info */}
        <div className="mt-12 text-white/80">
          <p className="text-sm">
            Acil durumlar için:{" "}
            <a href="tel:+905551234567" className="underline hover:text-white">
              +90 555 123 45 67
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
