"use client";
import { useState, useMemo, useEffect, useRef, useCallback } from "react";
import HeroSection from "@/components/HeroSection";
import { KreasikuGrid } from "@/components/KreasikuCard";
import { Search, X, Filter, Loader2 } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Kreasiku = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSchool, setSelectedSchool] = useState<string>("all");
  const [isSearchExpanded, setIsSearchExpanded] = useState(false);

  // Pagination states
  const [displayedCount, setDisplayedCount] = useState(8);
  const [isLoading, setIsLoading] = useState(false);
  const observerTarget = useRef<HTMLDivElement>(null);

  const kreasis = [
    {
      id: 1,
      title: "Daun Botto Botto obat Luka Luar",
      school: "SDN BONTOMAEKU 2",
      author: "Ayudia Shakila",
      date: "2022-07-07",
      image:
        "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80",
    },
    {
      id: 2,
      title: "Mengenal Warna dan Bentuk Dasar",
      school: "TK/PAUD BONTOBILA",
      author: "Dewi Sartika",
      date: "2023-06-05",
      image:
        "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=800&fit=crop",
    },
    {
      id: 3,
      title: "Eksperimen Kimia Sederhana",
      school: "SMP NEGERI BONTOBILA",
      author: "Ahmad Rizki",
      date: "2023-06-05",
      image:
        "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=800&h=800&fit=crop",
    },
    {
      id: 4,
      title: "Membuat Robot dari Kardus Bekas",
      school: "SD INPRES BONTOBILA",
      author: "Siti Nurhaliza",
      date: "2023-06-05",
      image:
        "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&h=800&fit=crop",
    },
    {
      id: 5,
      title: "Proyek Sains: Volcano",
      school: "SDN BONTOMAEKU 2",
      author: "Budi Santoso",
      date: "2023-08-15",
      image:
        "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800&h=800&fit=crop",
    },
    {
      id: 6,
      title: "Menggambar dan Mewarnai",
      school: "TK/PAUD BONTOBILA",
      author: "Rina Melati",
      date: "2023-09-10",
      image:
        "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&h=800&fit=crop",
    },
    {
      id: 7,
      title: "Penelitian Fotosintesis Tumbuhan",
      school: "SMP NEGERI BONTOBILA",
      author: "Allisa Mayer",
      date: "2023-10-05",
      image:
        "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&h=800&fit=crop",
    },
    {
      id: 8,
      title: "Belajar Berhitung dengan Permainan",
      school: "SD INPRES BONTOBILA",
      author: "Rudi Hartono",
      date: "2023-10-20",
      image:
        "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=800&fit=crop",
    },
    {
      id: 9,
      title: "Sistem Tata Surya Mini",
      school: "SDN BONTOMAEKU 2",
      author: "Putri Ayu",
      date: "2023-11-05",
      image:
        "https://images.unsplash.com/photo-1529390079861-591de354faf5?w=800&h=800&fit=crop",
    },
    {
      id: 10,
      title: "Bernyanyi dan Bercerita",
      school: "TK/PAUD BONTOBILA",
      author: "Maya Safitri",
      date: "2023-11-15",
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=800&fit=crop",
    },
    {
      id: 11,
      title: "Percobaan Listrik Statis",
      school: "SMP NEGERI BONTOBILA",
      author: "Eko Prasetyo",
      date: "2023-12-01",
      image:
        "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=800&h=800&fit=crop",
    },
    {
      id: 12,
      title: "Membuat Kerajinan dari Kertas",
      school: "SD INPRES BONTOBILA",
      author: "Lina Marlina",
      date: "2023-12-10",
      image:
        "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=800&h=800&fit=crop",
    },
    // Tambahkan data dummy untuk testing infinite scroll
    {
      id: 13,
      title: "Membuat Kompos dari Sampah Organik",
      school: "SDN BONTOMAEKU 2",
      author: "Andi Wijaya",
      date: "2024-01-15",
      image:
        "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&h=800&fit=crop",
    },
    {
      id: 14,
      title: "Kerajinan dari Sedotan",
      school: "TK/PAUD BONTOBILA",
      author: "Sari Indah",
      date: "2024-01-20",
      image:
        "https://images.unsplash.com/photo-1452860606245-08befc0ff44b?w=800&h=800&fit=crop",
    },
    {
      id: 15,
      title: "Percobaan Magnet",
      school: "SMP NEGERI BONTOBILA",
      author: "Reza Pratama",
      date: "2024-02-01",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=800&fit=crop",
    },
    {
      id: 16,
      title: "Belajar Angka dengan Lego",
      school: "SD INPRES BONTOBILA",
      author: "Nina Kartika",
      date: "2024-02-10",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=800&h=800&fit=crop",
    },
  ];

  // Filter options
  const schoolFilters = [
    { value: "all", label: "Semua Sekolah" },
    { value: "SDN", label: "SDN" },
    { value: "SD INPRES", label: "SD Inpres" },
    { value: "SMP", label: "SMP" },
    { value: "TK", label: "TK/PAUD" },
  ];

  // Filter and search logic
  const filteredKreasis = useMemo(() => {
    return kreasis.filter((kreasi) => {
      const schoolMatch =
        selectedSchool === "all" ||
        kreasi.school.toUpperCase().includes(selectedSchool.toUpperCase());

      const searchMatch =
        searchQuery === "" ||
        kreasi.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        kreasi.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
        kreasi.school.toLowerCase().includes(searchQuery.toLowerCase());

      return schoolMatch && searchMatch;
    });
  }, [kreasis, selectedSchool, searchQuery]);

  // Get displayed items based on current count
  const displayedKreasis = useMemo(() => {
    return filteredKreasis.slice(0, displayedCount);
  }, [filteredKreasis, displayedCount]);

  // Check if there are more items to load
  const hasMore = displayedCount < filteredKreasis.length;

  // Determine initial count based on screen size
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

    // Simulate API delay
    setTimeout(() => {
      const increment = window.innerWidth >= 640 ? 8 : 6;
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

  // Reset displayed count when filters change
  useEffect(() => {
    setDisplayedCount(getInitialCount());
  }, [searchQuery, selectedSchool]);

  // Clear all filters
  const clearFilters = () => {
    setSearchQuery("");
    setSelectedSchool("all");
  };

  // Handle search expand
  const handleSearchExpand = () => {
    setIsSearchExpanded(true);
  };

  // Handle search collapse
  const handleSearchCollapse = () => {
    setIsSearchExpanded(false);
    setSearchQuery("");
  };

  const hasActiveFilters = searchQuery !== "" || selectedSchool !== "all";

  return (
    <main className="mb-20">
      <HeroSection
        title="Kreasiku"
        description="Kumpulan tugas-tugas atau proyek belajar yang diberikan oleh guru di sekolah yang dikerjakan langsung oleh siswa."
        imageSrc="/images/ilustrasi/Kreasiku.png"
        imageAlt="Dinas pendidikan"
      />

      {/* Filter & Search Section */}
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 mb-8 px-5">
        {/* Desktop View */}
        <div className="hidden sm:flex flex-row gap-3 mb-4 items-stretch">
          <div className="relative flex-1">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Cari berdasarkan judul, penulis, atau sekolah..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full h-12 pl-12 pr-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-gray-600"
              >
                <X className="h-5 w-5" />
              </button>
            )}
          </div>

          <Select value={selectedSchool} onValueChange={setSelectedSchool}>
            <SelectTrigger className="w-56 h-12 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all">
              <div className="flex items-center gap-2">
                <Filter className="h-4 w-4 text-gray-500" />
                <SelectValue placeholder="Pilih Sekolah" />
              </div>
            </SelectTrigger>
            <SelectContent>
              {schoolFilters.map((filter) => (
                <SelectItem
                  key={filter.value}
                  value={filter.value}
                  className="cursor-pointer"
                >
                  {filter.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          {hasActiveFilters && (
            <button
              onClick={clearFilters}
              className="px-5 h-12 rounded-xl text-sm font-medium bg-red-50 text-red-600 hover:bg-red-100 transition-all flex items-center justify-center gap-2 whitespace-nowrap"
            >
              <X className="h-4 w-4" />
              Reset
            </button>
          )}
        </div>

        {/* Mobile View */}
        <div className="sm:hidden space-y-3 mb-4">
          <div className="flex gap-3 items-stretch">
            {!isSearchExpanded ? (
              <>
                <Select
                  value={selectedSchool}
                  onValueChange={setSelectedSchool}
                >
                  <SelectTrigger className="flex-1 h-12 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all">
                    <div className="flex items-center gap-2">
                      <Filter className="h-4 w-4 text-gray-500" />
                      <SelectValue placeholder="Pilih Sekolah" />
                    </div>
                  </SelectTrigger>
                  <SelectContent>
                    {schoolFilters.map((filter) => (
                      <SelectItem
                        key={filter.value}
                        value={filter.value}
                        className="cursor-pointer"
                      >
                        {filter.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <button
                  onClick={handleSearchExpand}
                  className="h-12 w-12 flex items-center justify-center rounded-xl border border-gray-300 bg-white hover:bg-gray-50 transition-all flex-shrink-0"
                  aria-label="Buka pencarian"
                >
                  <Search className="h-5 w-5 text-gray-500" />
                </button>
              </>
            ) : (
              <div className="relative flex-1 animate-in fade-in slide-in-from-right-5 duration-300">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Cari judul, penulis, sekolah..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  autoFocus
                  className="w-full h-12 pl-12 pr-12 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                />
                <button
                  onClick={handleSearchCollapse}
                  className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-gray-600"
                  aria-label="Tutup pencarian"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            )}
          </div>

          {isSearchExpanded && (
            <div className="animate-in fade-in slide-in-from-top-3 duration-300">
              <Select value={selectedSchool} onValueChange={setSelectedSchool}>
                <SelectTrigger className="w-full h-12 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all">
                  <div className="flex items-center gap-2">
                    <Filter className="h-4 w-4 text-gray-500" />
                    <SelectValue placeholder="Pilih Sekolah" />
                  </div>
                </SelectTrigger>
                <SelectContent>
                  {schoolFilters.map((filter) => (
                    <SelectItem
                      key={filter.value}
                      value={filter.value}
                      className="cursor-pointer"
                    >
                      {filter.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          )}

          {hasActiveFilters && (
            <button
              onClick={clearFilters}
              className="w-full h-12 rounded-xl text-sm font-medium bg-red-50 text-red-600 hover:bg-red-100 transition-all flex items-center justify-center gap-2"
            >
              <X className="h-4 w-4" />
              Reset Filter
            </button>
          )}
        </div>

        {/* Results Count */}
        <div className="text-sm text-gray-600">
          Menampilkan{" "}
          <span className="font-semibold text-gray-900">
            {displayedKreasis.length}
          </span>{" "}
          dari{" "}
          <span className="font-semibold text-gray-900">
            {filteredKreasis.length}
          </span>{" "}
          karya
        </div>
      </div>

      {/* Grid or Empty State */}
      {filteredKreasis.length > 0 ? (
        <>
          <KreasikuGrid kreasis={displayedKreasis} />

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
        <EmptyState
          searchQuery={searchQuery}
          selectedSchool={selectedSchool}
          onClearFilters={clearFilters}
        />
      )}
    </main>
  );
};

// Empty State Component
const EmptyState = ({
  searchQuery,
  selectedSchool,
  onClearFilters,
}: {
  searchQuery: string;
  selectedSchool: string;
  onClearFilters: () => void;
}) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col items-center justify-center py-16 px-4">
        <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-6">
          <Search className="h-12 w-12 text-gray-400" />
        </div>
        <h3 className="text-2xl font-bold text-blue-950 mb-2">
          Tidak Ada Hasil Ditemukan
        </h3>
        <p className="text-gray-500 text-center mb-6 max-w-md">
          {searchQuery
            ? `Tidak ada karya yang cocok dengan pencarian "${searchQuery}"`
            : `Tidak ada karya untuk filter yang dipilih`}
        </p>
        <button
          onClick={onClearFilters}
          className="px-6 py-3 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition-colors flex items-center gap-2"
        >
          <X className="h-4 w-4" />
          Hapus Filter
        </button>
      </div>
    </div>
  );
};

export default Kreasiku;
