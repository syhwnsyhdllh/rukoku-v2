// ============================================
// components/KreasiCard.tsx - DENGAN AVATAR INITIAL
import Image from "next/image";
import Link from "next/link";
import { generateSlug, formatDate, getSchoolBadgeColor } from "@/lib/utils";

interface Kreasi {
  id: number;
  title: string;
  school: string;
  author: string;
  date: string;
  image: string;
  authorAvatar?: string;
}

interface KreasiCardProps {
  kreasi: Kreasi;
}

interface KreasiGridProps {
  kreasis: Kreasi[];
}

// Komponen Avatar dengan Initial
const AuthorAvatar = ({
  author,
  avatarUrl,
}: {
  author: string;
  avatarUrl?: string;
}) => {
  // Ambil huruf pertama dari nama
  const initial = author.charAt(0).toUpperCase();

  // Array warna background untuk avatar
  const colors = [
    "bg-blue-500",
    "bg-green-500",
    "bg-purple-500",
    "bg-pink-500",
    "bg-indigo-500",
    "bg-yellow-500",
    "bg-red-500",
    "bg-teal-500",
  ];

  // Pilih warna berdasarkan nama (konsisten untuk nama yang sama)
  const colorIndex =
    author.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0) %
    colors.length;
  const bgColor = colors[colorIndex];

  if (avatarUrl) {
    return (
      <div className="relative w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
        <Image src={avatarUrl} alt={author} fill className="object-cover" />
      </div>
    );
  }

  return (
    <div
      className={`w-10 h-10 rounded-full flex-shrink-0 flex items-center justify-center ${bgColor} text-white font-bold text-lg`}
    >
      {initial}
    </div>
  );
};

// Card Component
const KreasikuCard = ({ kreasi }: KreasiCardProps) => {
  const slug = generateSlug(kreasi.title);
  const badgeColor = getSchoolBadgeColor(kreasi.school);

  // Mapping warna ke class Tailwind yang lengkap
  const colorClasses: Record<string, string> = {
    "bg-blue-500": "bg-blue-500",
    "bg-cyan-500": "bg-cyan-500",
    "bg-purple-500": "bg-purple-500",
    "bg-orange-500": "bg-orange-500",
    "bg-gray-500": "bg-gray-500",
  };

  return (
    <Link
      href={`/kreasiku/${slug}`}
      className="group block bg-white rounded-2xl overflow-hidden shadow hover:shadow-xl transition-all duration-300"
    >
      {/* Image Container */}
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={kreasi.image}
          alt={kreasi.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {/* School Badge with Dynamic Color */}
        <div className="absolute top-4 left-4">
          <span
            className={`inline-block ${
              colorClasses[badgeColor] || "bg-gray-500"
            } text-white text-xs font-medium px-3 py-1 rounded-md`}
          >
            {kreasi.school}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 pt-4">
        {/* Title - Fixed height untuk 2 baris */}
        <h3 className="text-lg font-semibold text-blue-950 line-clamp-2 group-hover:text-blue-600 transition-colors h-14">
          {kreasi.title}
        </h3>

        {/* Author Info */}
        <div className="flex items-center gap-3 mt-6">
          <AuthorAvatar
            author={kreasi.author}
            avatarUrl={kreasi.authorAvatar}
          />
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-gray-800 truncate">
              {kreasi.author}
            </p>
            <p className="text-xs text-gray-500">{formatDate(kreasi.date)}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

// Grid Component
const KreasikuGrid = ({ kreasis }: KreasiGridProps) => {
  return (
    <div className="max-w-7xl px-5 lg:px-0 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {kreasis.map((kreasi) => (
        <KreasikuCard key={kreasi.id} kreasi={kreasi} />
      ))}
    </div>
  );
};

export { KreasikuCard, KreasikuGrid };
