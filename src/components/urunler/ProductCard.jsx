import Image from "next/image";
import Link from "next/link";

export default function ProductCard({ item }) {
  return (
    <div className="flex flex-col rounded-2xl overflow-hidden border bg-white shadow-sm hover:shadow-md transition">
      {/* Görsel */}
      <div className="relative h-68 w-full">
        <Image
          src={item.image}
          alt={item.name}
          fill
          className="object-cover"
        />
      </div>

      {/* İçerik */}
      <div className="flex-1 p-4 flex flex-col">
        <h3 className="text-base font-semibold text-gray-900 line-clamp-2">
          {item.name}
        </h3>
        <p className="mt-2 text-sm text-gray-600 line-clamp-3 flex-1">
          {item.short}
        </p>

        <div className="mt-4">
          <Link
            href={`/urunler/${item.id}`}
            className="text-[#0056A3] hover:text-[#2BA84A] font-medium text-sm"
          >
            İncele →
          </Link>
        </div>
      </div>
    </div>
  );
}