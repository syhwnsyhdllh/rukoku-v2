"use client";
import { useState, useEffect, useRef, useCallback, useMemo } from "react";
import HeroSection from "@/components/HeroSection";
import EventCard from "@/components/EventCard";
import { Loader2, Search, X } from "lucide-react";

const MateriParenting = () => {
  const [displayedCount, setDisplayedCount] = useState(8);
  const [isLoading, setIsLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const observerTarget = useRef<HTMLDivElement>(null);

  // Data materi parenting
  const materiParenting = [
    {
      id: 1,
      image: "/images/materi/pola-asuh.jpg",
      title: "Pola Asuh Positif untuk Anak",
      date: "10 November 2025",
      author: "Dr. Budi Santoso",
      position: "Psikolog Anak",
    },
    {
      id: 2,
      image: "/images/materi/komunikasi.jpg",
      title: "Komunikasi Efektif dengan Anak",
      date: "15 November 2025",
      author: "Prof. Dr. Siti Aminah",
      position: "Pakar Komunikasi Keluarga",
    },
    {
      id: 3,
      image: "/images/materi/emosi.jpg",
      title: "Mengelola Emosi Anak dengan Bijak",
      date: "18 November 2025",
      author: "Dra. Rina Kusuma",
      position: "Konselor Keluarga",
    },
    {
      id: 4,
      image: "/images/materi/digital.jpg",
      title: "Parenting di Era Digital",
      date: "22 November 2025",
      author: "Ahmad Fauzi, M.Psi",
      position: "Psikolog Klinis",
    },
    {
      id: 5,
      image: "/images/materi/belajar.jpg",
      title: "Mendampingi Anak Belajar di Rumah",
      date: "25 November 2025",
      author: "Dr. Lina Wati",
      position: "Pendidik & Praktisi Parenting",
    },
    {
      id: 6,
      image: "/images/materi/karakter.jpg",
      title: "Membangun Karakter Anak Sejak Dini",
      date: "28 November 2025",
      author: "H. Muhammad Yusuf, S.Pd",
      position: "Kepala Sekolah & Motivator",
    },
    {
      id: 7,
      image: "/images/materi/tantrum.jpg",
      title: "Mengatasi Tantrum pada Anak",
      date: "1 Desember 2025",
      author: "Nurul Hidayah, M.Psi",
      position: "Child Development Specialist",
    },
    {
      id: 8,
      image: "/images/materi/quality-time.jpg",
      title: "Pentingnya Quality Time Bersama Anak",
      date: "5 Desember 2025",
      author: "Drs. Bambang Widodo",
      position: "Family Counselor",
    },
    {
      id: 9,
      image: "/images/materi/tumbuh-kembang.jpg",
      title: "Stimulasi Tumbuh Kembang Anak Optimal",
      date: "8 Desember 2025",
      author: "dr. Ani Wijaya, Sp.A",
      position: "Dokter Spesialis Anak",
    },
    {
      id: 10,
      image: "/images/materi/disiplin.jpg",
      title: "Disiplin Positif untuk Anak",
      date: "12 Desember 2025",
      author: "Dr. Budi Santoso",
      position: "Psikolog Anak",
    },
    {
      id: 11,
      image: "/images/materi/kreativitas.jpg",
      title: "Mengembangkan Kreativitas Anak",
      date: "15 Desember 2025",
      author: "Dra. Rina Kusuma",
      position: "Konselor Keluarga",
    },
    {
      id: 12,
      image: "/images/materi/percaya-diri.jpg",
      title: "Membangun Kepercayaan Diri Anak",
      date: "18 Desember 2025",
      author: "Ahmad Fauzi, M.Psi",
      position: "Psikolog Klinis",
    },
    {
      id: 13,
      image: "/images/materi/gizi.jpg",
      title: "Nutrisi dan Gizi Seimbang untuk Anak",
      date: "22 Desember 2025",
      author: "dr. Ani Wijaya, Sp.A",
      position: "Dokter Spesialis Anak",
    },
    {
      id: 14,
      image: "/images/materi/teknologi.jpg",
      title: "Mengatur Screen Time Anak",
      date: "25 Desember 2025",
      author: "Prof. Dr. Siti Aminah",
      position: "Pakar Komunikasi Keluarga",
    },
    {
      id: 15,
      image: "/images/materi/sosialisasi.jpg",
      title: "Keterampilan Sosial pada Anak",
      date: "28 Desember 2025",
      author: "Nurul Hidayah, M.Psi",
      position: "Child Development Specialist",
    },
    {
      id: 16,
      image: "/images/materi/motivasi.jpg",
      title: "Memotivasi Anak untuk Belajar",
      date: "2 Januari 2026",
      author: "Dr. Lina Wati",
      position: "Pendidik & Praktisi Parenting",
    },
  ];

  // Filter based on search query
  const filteredMateri = useMemo(() => {
    if (!searchQuery) return materiParenting;

    const query = searchQuery.toLowerCase();
    return materiParenting.filter(
      (materi) =>
        materi.title.toLowerCase().includes(query) ||
        materi.author.toLowerCase().includes(query) ||
        materi.position.toLowerCase().includes(query)
    );
  }, [searchQuery]);

  // Get displayed items
  const displayedMateri = useMemo(() => {
    return filteredMateri.slice(0, displayedCount);
  }, [filteredMateri, displayedCount]);

  // Check if there are more items
  const hasMore = displayedCount < filteredMateri.length;

  // Get initial count based on screen size
  const getInitialCount = () => {
    if (typeof window !== "undefined") {
      return window.innerWidth >= 768 ? 8 : 6;
    }
    return 8;
  };

  // Load more items
  const loadMore = useCallback(() => {
    if (isLoading || !hasMore) return;

    setIsLoading(true);

    // Simulate API delay
    setTimeout(() => {
      const increment =
        typeof window !== "undefined" && window.innerWidth >= 768 ? 8 : 6;
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

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection
        title="Materi Parenting"
        description="Kumpulan materi dan panduan parenting untuk membantu orang tua dalam mendidik dan mengasuh anak dengan lebih baik."
        imageSrc="/images/ilustrasi/parenting.png"
        imageAlt="Materi Parenting"
      />

      {/* Materials Grid Section */}
      <section className="pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Search Bar */}
          <div className="mb-8">
            <div className="relative max-w-2xl mx-auto">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Cari materi berdasarkan judul, penulis, atau topik..."
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
              {displayedMateri.length}
            </span>{" "}
            dari{" "}
            <span className="font-semibold text-gray-900">
              {filteredMateri.length}
            </span>{" "}
            materi
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

          {/* Materials Grid or Empty State */}
          {filteredMateri.length > 0 ? (
            <>
              {/* Materials Grid - Responsive Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 mb-12">
                {displayedMateri.map((materi) => (
                  <EventCard
                    key={materi.id}
                    image={materi.image}
                    title={materi.title}
                    date={materi.date}
                    showMetadataLabel={true}
                    metadata={{
                      label: "Penulis",
                      value: materi.author,
                      subLabel: materi.position,
                    }}
                    onClick={() => console.log("Clicked:", materi.title)}
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
                Tidak ada materi yang cocok dengan pencarian "{searchQuery}"
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default MateriParenting;
