"use client";
import { useState, useEffect } from "react";
import HeroSection from "@/components/HeroSection";
import EventCard from "@/components/EventCard";

const MateriParenting = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(8);

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
  ];

  // Detect screen size and set items per page
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerPage(6); // Mobile: 6 cards
      } else {
        setItemsPerPage(8); // Tablet & Desktop: 8 cards
      }
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Reset to page 1 when itemsPerPage changes
  useEffect(() => {
    setCurrentPage(1);
  }, [itemsPerPage]);

  // Calculate pagination
  const totalPages = Math.ceil(materiParenting.length / itemsPerPage);
  const showPagination = materiParenting.length > itemsPerPage;

  // Get current page items
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = materiParenting.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection
        title="Materi Parenting"
        description="Kumpulan materi dan panduan parenting untuk membantu orang tua dalam mendidik dan mengasuh anak dengan lebih baik."
        imageSrc="/images/ilustrasi/materi-parenting.png"
        imageAlt="Materi Parenting"
      />

      {/* Materials Grid Section */}
      <section className="py-12 md:py-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Materials Grid - Responsive: 2 cols (mobile), 4 cols (tablet & desktop) */}
          <div className="min-h-[600px] md:min-h-[650px]">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 mb-12">
              {currentItems.map((materi) => (
                <EventCard
                  key={materi.id}
                  image={materi.image}
                  title={materi.title}
                  date={materi.date}
                  showMetadataLabel={true}
                  metadata={{
                    value: materi.author,
                    subLabel: materi.position,
                  }}
                  onClick={() => console.log("Clicked:", materi.title)}
                />
              ))}
            </div>
          </div>

          {/* Pagination - Only show if needed */}
          {showPagination && (
            <div className="flex justify-center items-center gap-2">
              {[...Array(totalPages)].map((_, index) => {
                const pageNum = index + 1;
                return (
                  <button
                    key={pageNum}
                    onClick={() => setCurrentPage(pageNum)}
                    className={`w-10 h-10 rounded-lg font-medium transition-all duration-200 ${
                      currentPage === pageNum
                        ? "bg-[#046DC2] text-white scale-110"
                        : "bg-white text-gray-600 hover:bg-gray-100"
                    }`}
                  >
                    {pageNum}
                  </button>
                );
              })}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default MateriParenting;
