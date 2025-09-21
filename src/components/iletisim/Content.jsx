"use client";
import { useState } from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import Link from "next/link";

export default function ContactSection() {
  const [sending, setSending] = useState(false);
  const [done, setDone] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      setDone(true);
      e.currentTarget.reset();
    }, 900);
  }

  return (
    <>
      {/* İçerik Bölümü */}
      <section className="relative w-full py-16 overflow-hidden">
        {/* yumuşak arka plan ışıması */}
        <div className="pointer-events-none absolute -top-24 -left-24 h-80 w-80 rounded-full bg-[#2BA84A] opacity-30 blur-2xl" />
        <div className="pointer-events-none absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-[#0056A3] opacity-30 blur-2xl" />

        <div className="relative max-w-[1280px] mx-auto px-6">
          {/* Başlık */}
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0056A3]">
              Bizimle İletişime Geçin
            </h2>
            <div className="mx-auto mt-3 h-[3px] w-24 rounded bg-gradient-to-r from-[#2BA84A] to-[#0056A3]" />
            <p className="mt-3 text-gray-600 max-w-[820px] mx-auto">
              Sorularınız ve teklifleriniz için ulaşın. En kısa sürede dönüş yapıyoruz.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Sol: İletişim bilgileri */}
            <div className="relative rounded-2xl bg-white shadow p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">İletişim Bilgileri</h3>

              <ul className="space-y-4">
                <li className="flex gap-3">
                  <span className="mt-1 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#0056A3]/10 text-[#0056A3]">
                    <Phone size={18} />
                  </span>
                  <div>
                    <div className="text-xs uppercase tracking-wide text-gray-500">Telefon</div>
                    <Link href="tel:+90XXXXXXXXXX" className="text-gray-900 hover:text-[#0056A3] font-medium">
                      +90 (___) ___ __ __
                    </Link>
                  </div>
                </li>

                <li className="flex gap-3">
                  <span className="mt-1 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#0056A3]/10 text-[#0056A3]">
                    <Mail size={18} />
                  </span>
                  <div>
                    <div className="text-xs uppercase tracking-wide text-gray-500">E-posta</div>
                    <Link href="mailto:info@pelox.com.tr" className="text-gray-900 hover:text-[#0056A3] font-medium">
                      info@pelox.com.tr
                    </Link>
                  </div>
                </li>

                <li className="flex gap-3">
                  <span className="mt-1 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#0056A3]/10 text-[#0056A3]">
                    <MapPin size={18} />
                  </span>
                  <div>
                    <div className="text-xs uppercase tracking-wide text-gray-500">Adres</div>
                    <p className="text-gray-900 font-medium">
                      Örnek Mah. Sanayi Cad. No: 00, İstanbul / Türkiye
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Sağ: Form */}
            <div className="relative rounded-2xl bg-white shadow p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">İletişim Formu</h3>

              <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm text-gray-700 mb-1">İsim Soyisim</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Adınız Soyadınız"
                    className="w-full rounded-lg px-4 py-2.5 outline-none bg-gray-50 focus:bg-white focus:ring-2 focus:ring-[#0056A3]/20"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm text-gray-700 mb-1">Telefon</label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    placeholder="+90 ___ ___ __ __"
                    className="w-full rounded-lg px-4 py-2.5 outline-none bg-gray-50 focus:bg-white focus:ring-2 focus:ring-[#0056A3]/20"
                  />
                </div>

                <div className="md:col-span-2">
                  <label htmlFor="email" className="block text-sm text-gray-700 mb-1">E-posta</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="ornek@eposta.com"
                    className="w-full rounded-lg px-4 py-2.5 outline-none bg-gray-50 focus:bg-white focus:ring-2 focus:ring-[#0056A3]/20"
                  />
                </div>

                <div className="md:col-span-2">
                  <label htmlFor="message" className="block text-sm text-gray-700 mb-1">Mesajınız</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Kısaca talebinizi yazabilirsiniz…"
                    className="w-full rounded-lg px-4 py-2.5 outline-none bg-gray-50 focus:bg-white focus:ring-2 focus:ring-[#0056A3]/20"
                  />
                </div>

                <div className="md:col-span-2 pt-2">
                  <button
                    type="submit"
                    disabled={sending}
                    className="inline-flex items-center justify-center rounded-lg px-6 py-3
                               bg-[#0056A3] text-white hover:bg-[#2BA84A] transition disabled:opacity-60"
                  >
                    {sending ? "Gönderiliyor..." : "Gönder"}
                  </button>
                  {done && (
                    <span className="ml-3 text-sm text-green-600">
                      Mesajınız alındı. En kısa sürede dönüş yapacağız.
                    </span>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Daha küçük Google Map */}
            {/* Daha küçük Google Map */}
            <section className="w-full py-12">
        <div className="max-w-[1280px] mx-auto px-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Konum</h3>
          <div className="relative w-full h-[400px]">
            <iframe
              src="https://www.google.com/maps/d/embed?mid=13dw_6uXw9SpugV834-Xv4sOtmp0fjKY&ehbc=2E312F"
              className="absolute inset-0 h-full w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
              title="PELOX Konum"
            />
          </div>
        </div>
      </section>
    </>
  );
}