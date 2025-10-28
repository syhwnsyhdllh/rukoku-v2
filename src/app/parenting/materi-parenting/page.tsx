"use client";
import { useState, useEffect, useRef, useCallback, useMemo } from "react";
import HeroSection from "@/components/HeroSection";
import EventCard from "@/components/EventCard";
import { Loader2, Search, X } from "lucide-react";
import { getMateriList } from "@/lib/materiData";
import { useRouter } from "next/navigation";

const MateriParenting = () => {
  const router = useRouter();
  const materiList = getMateriList();

  const [displayedCount, setDisplayedCount] = useState(8);
  const [isLoading, setIsLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const observerTarget = useRef<HTMLDivElement>(null);

  // Filter based on search query
  const filteredMateri = useMemo(() => {
    if (!searchQuery) return materiList;

    const query = searchQuery.toLowerCase();
    return materiList.filter(
      (materi) =>
        materi.title.toLowerCase().includes(query) ||
        materi.author.toLowerCase().includes(query)
    );
  }, [searchQuery, materiList]);

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
      <section className="px-4">
        <div className="max-w-7xl mx-auto">
          {/* Search Bar */}
          <div className="mb-8">
            <div className="relative max-w-2xl mx-auto">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Cari materi berdasarkan judul atau penulis..."
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
                    image={materi.featuredImage}
                    title={materi.title}
                    date={materi.date}
                    showMetadataLabel={true}
                    metadata={{
                      label: "Penulis",
                      value: materi.author,
                    }}
                    onClick={() =>
                      router.push(`/parenting/materi-parenting/${materi.slug}`)
                    }
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
              <button
                onClick={clearSearch}
                className="px-6 py-3 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition-colors flex items-center gap-2"
              >
                <X className="h-4 w-4" />
                Hapus Pencarian
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default MateriParenting;
