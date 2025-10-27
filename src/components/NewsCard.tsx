// ✅ REKOMENDASI: Tanpa "use client", lebih optimal
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

interface NewsCardProps {
  id: number;
  title: string;
  date: string;
  image: string;
  slug: string;
}

const NewsCard: React.FC<NewsCardProps> = ({ title, date, image, slug }) => {
  return (
    <Link href={`/blog/${slug}`}>
      <Card className="group cursor-pointer overflow-hidden border-none shadow-none transition-all duration-300 transform hover:-translate-y-1">
        {/* Image */}
        <div className="relative h-48 sm:h-52 overflow-hidden rounded-3xl">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>

        <CardContent className="p-5 sm:p-6 lg:pl-2">
          <h3 className="text-base sm:text-lg font-bold text-blue-950 mb-3 line-clamp-3 group-hover:text-[#046DC2] transition-colors duration-300 leading-snug min-h-[4rem] sm:min-h-[5.25rem]">
            {title}
          </h3>

          <p className="text-xs sm:text-sm text-gray-500 mb-4">{date}</p>

          <div className="flex items-center gap-2 text-[#046DC2] font-semibold text-sm group-hover:gap-3 transition-all duration-300">
            <span>Selengkapnya</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default NewsCard;
