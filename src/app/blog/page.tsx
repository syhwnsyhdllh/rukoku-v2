"use client";
import { useState, useEffect, useRef, useCallback, useMemo } from "react";
import HeroSection from "@/components/HeroSection";
import NewsCard from "@/components/NewsCard";
import { Loader2, Search, X } from "lucide-react";

const Blog = () => {
  const [displayedCount, setDisplayedCount] = useState(8);
  const [isLoading, setIsLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const observerTarget = useRef<HTMLDivElement>(null);

  // Data berita - expanded untuk testing infinite scroll
  const newsData = [
    {
      id: 1,
      title:
        "Mediasi Yang Dilakukan Oleh Komunitas Orang Tua Peduli Di SDN Mangasa 1 Kec. Somba Opu Mangasa 1 Kec. Somba Opu Mangasa 1 Kec. Somba Opu",
      date: "13 Agustus 2023",
      image:
        "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=600&h=400&fit=crop",
      slug: "mediasi-komunitas-orang-tua-peduli-sdn-mangasa-1",
    },
    {
      id: 2,
      title:
        "Kepala SDN Bontokamase Menjelaskan Kepada Orang Tua Tentang Pembentukan Orang Tua Peduli Di Sekolahnya",
      date: "20 Juli 2023",
      image:
        "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&h=400&fit=crop",
      slug: "kepala-sdn-bontokamase-menjelaskan-pembentukan-orang-tua-peduli",
    },
    {
      id: 3,
      title:
        "Pemaparan Pembentukan Komunitas Orang Tua Peduli Di SD Inpres Mangasa Kepada Orang Tua Siswa",
      date: "22 Juli 2023",
      image:
        "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&h=400&fit=crop",
      slug: "pemaparan-pembentukan-komunitas-orang-tua-peduli-sd-inpres-mangasa",
    },
    {
      id: 4,
      title: "Workshop Parenting: Membangun Komunikasi Efektif dengan Anak",
      date: "5 September 2023",
      image:
        "https://images.unsplash.com/photo-1516534775068-ba3e7458af70?w=600&h=400&fit=crop",
      slug: "workshop-parenting-komunikasi-efektif-anak",
    },
    {
      id: 5,
      title:
        "Kegiatan Gotong Royong Membersihkan Lingkungan Sekolah Bersama Orang Tua",
      date: "15 September 2023",
      image:
        "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=600&h=400&fit=crop",
      slug: "gotong-royong-lingkungan-sekolah",
    },
    {
      id: 6,
      title: "Sosialisasi Program Literasi Digital untuk Orang Tua dan Siswa",
      date: "28 September 2023",
      image:
        "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=600&h=400&fit=crop",
      slug: "sosialisasi-literasi-digital",
    },
    {
      id: 7,
      title: "Seminar Kesehatan Mental Anak dan Remaja",
      date: "10 Oktober 2023",
      image:
        "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&h=400&fit=crop",
      slug: "seminar-kesehatan-mental-anak-remaja",
    },
    {
      id: 8,
      title: "Pelatihan Manajemen Keuangan Keluarga untuk Orang Tua",
      date: "18 Oktober 2023",
      image:
        "https://images.unsplash.com/photo-1554224311-beee4ece8db7?w=600&h=400&fit=crop",
      slug: "pelatihan-manajemen-keuangan-keluarga",
    },
    {
      id: 9,
      title: "Kampanye Anti Bullying di Sekolah Dasar",
      date: "25 Oktober 2023",
      image:
        "https://images.unsplash.com/photo-1503676382389-4809596d5290?w=600&h=400&fit=crop",
      slug: "kampanye-anti-bullying-sekolah-dasar",
    },
    {
      id: 10,
      title: "Bazar Karya Siswa dan Orang Tua Peduli",
      date: "5 November 2023",
      image:
        "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&h=400&fit=crop",
      slug: "bazar-karya-siswa-orang-tua-peduli",
    },
    {
      id: 11,
      title: "Penanaman Pohon Bersama Komunitas Orang Tua Peduli",
      date: "12 November 2023",
      image:
        "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=600&h=400&fit=crop",
      slug: "penanaman-pohon-komunitas-orang-tua-peduli",
    },
    {
      id: 12,
      title: "Diskusi Panel: Peran Orang Tua di Era Digital",
      date: "20 November 2023",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
      slug: "diskusi-panel-peran-orang-tua-era-digital",
    },
    {
      id: 13,
      title: "Lomba Kreativitas Anak dan Orang Tua",
      date: "1 Desember 2023",
      image:
        "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&h=400&fit=crop",
      slug: "lomba-kreativitas-anak-orang-tua",
    },
    {
      id: 14,
      title: "Sosialisasi Gizi Sehat untuk Tumbuh Kembang Anak",
      date: "8 Desember 2023",
      image:
        "https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=600&h=400&fit=crop",
      slug: "sosialisasi-gizi-sehat-tumbuh-kembang-anak",
    },
    {
      id: 15,
      title: "Kunjungan Edukatif ke Museum Bersama Keluarga",
      date: "15 Desember 2023",
      image:
        "https://images.unsplash.com/photo-1529654043305-67768ce78fda?w=600&h=400&fit=crop",
      slug: "kunjungan-edukatif-museum-keluarga",
    },
    {
      id: 16,
      title: "Perayaan Akhir Tahun Komunitas Orang Tua Peduli",
      date: "28 Desember 2023",
      image:
        "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=600&h=400&fit=crop",
      slug: "perayaan-akhir-tahun-komunitas-orang-tua-peduli",
    },
  ];

  // Filter based on search query
  const filteredNews = useMemo(() => {
    if (!searchQuery) return newsData;

    const query = searchQuery.toLowerCase();
    return newsData.filter(
      (news) =>
        news.title.toLowerCase().includes(query) ||
        news.date.toLowerCase().includes(query)
    );
  }, [searchQuery]);

  // Get displayed items
  const displayedNews = useMemo(() => {
    return filteredNews.slice(0, displayedCount);
  }, [filteredNews, displayedCount]);

  // Check if there are more items
  const hasMore = displayedCount < filteredNews.length;

  // Get initial count based on screen size
  const getInitialCount = () => {
    if (typeof window !== "undefined") {
      return window.innerWidth >= 640 ? 8 : 6;
    }
    return 8;
  };

  // Load more items
  const loadMore = useCallback(() => {
    if (isLoading || !hasMore) return;

    setIsLoading(true);

    setTimeout(() => {
      const increment =
        typeof window !== "undefined" && window.innerWidth >= 640 ? 8 : 6;
      setDisplayedCount((prev) => prev + increment);
      setIsLoading(false);
    }, 800);
  }, [isLoading, hasMore]);

  // Intersection Observer setup
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore && !isLoading) {
          loadMore();
        }
      },
      { threshold: 0.1, rootMargin: "100px" }
    );

    const currentTarget = observerTarget.current;
    if (currentTarget) {
      observer.observe(currentTarget);
    }

    return () => {
      if (currentTarget) {
        observer.unobserve(currentTarget);
      }
    };
  }, [hasMore, isLoading, loadMore]);

  // Set initial count on mount
  useEffect(() => {
    setDisplayedCount(getInitialCount());
  }, []);

  // Reset displayed count when search changes
  useEffect(() => {
    setDisplayedCount(getInitialCount());
  }, [searchQuery]);

  // Clear search
  const clearSearch = () => {
    setSearchQuery("");
  };

  // Handler untuk klik berita
  const handleNewsClick = (id: number, slug: string) => {
    console.log(`Navigate to: /blog/${slug}`);
    // Nanti bisa diganti dengan:
    // router.push(`/blog/${slug}`);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <HeroSection
        title="Kabar dari RUKOKU"
        description="Berisi tentang jurnal perjalanan Komunitas Orang Tua Peduli yang ada di Kabupaten Gowa."
        imageSrc="/images/ilustrasi/blog.png"
        imageAlt="Kabar dari RUKOKU"
      />

      {/* News Content Section */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Search Bar */}
          <div className="mb-8">
            <div className="relative max-w-2xl mx-auto">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Cari berita berdasarkan judul atau tanggal..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full h-12 pl-12 pr-12 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
              />
              {searchQuery && (
                <button
                  onClick={clearSearch}
                  className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-gray-600 transition-colors"
                  aria-label="Hapus pencarian"
                >
                  <X className="h-5 w-5" />
                </button>
              )}
            </div>
          </div>

          {/* Results Count */}
          <div className="text-sm text-gray-600 mb-6">
            Menampilkan{" "}
            <span className="font-semibold text-gray-900">
              {displayedNews.length}
            </span>{" "}
            dari{" "}
            <span className="font-semibold text-gray-900">
              {filteredNews.length}
            </span>{" "}
            berita
            {searchQuery && (
              <span className="ml-1">
                untuk pencarian "
                <span className="font-semibold text-blue-600">
                  {searchQuery}
                </span>
                "
              </span>
            )}
          </div>

          {/* News Grid or Empty State */}
          {filteredNews.length > 0 ? (
            <>
              {/* News Grid - Responsive */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8 mb-12">
                {displayedNews.map((news) => (
                  <NewsCard
                    key={news.id}
                    id={news.id}
                    title={news.title}
                    date={news.date}
                    image={news.image}
                    slug={news.slug}
                    onClick={handleNewsClick}
                  />
                ))}
              </div>

              {/* Intersection Observer Target & Loading Spinner */}
              {hasMore && (
                <div
                  ref={observerTarget}
                  className="flex justify-center items-center py-8"
                >
                  {isLoading && (
                    <div className="flex items-center gap-2 text-blue-600">
                      <Loader2 className="h-6 w-6 animate-spin" />
                      <span className="text-sm font-medium">
                        Memuat lebih banyak...
                      </span>
                    </div>
                  )}
                </div>
              )}
            </>
          ) : (
            /* Empty State */
            <div className="flex flex-col items-center justify-center py-16 px-4">
              <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mb-6">
                <Search className="h-10 w-10 text-gray-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Tidak Ada Hasil Ditemukan
              </h3>
              <p className="text-gray-500 text-center mb-6 max-w-md">
                Tidak ada berita yang cocok dengan pencarian "{searchQuery}"
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Blog;
