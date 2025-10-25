"use client";
import React, { useState, useEffect } from "react";
import EventCard from "@/components/EventCard";
import HeroSection from "@/components/HeroSection";

export default function KegiatanSekolahku() {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(8);

  // Data dummy untuk kegiatan - bisa diganti dengan data real
  const activities = [
    {
      id: 1,
      image: "/images/kegiatan/english-contest.jpg",
      title: "Englishh Speech Contest",
      date: "10 - 17 Juli 2023",
      price: "Gratis",
      organizer: "Kejaksaan Negeri 2 & Dinas Pendidikan Kab. Gowa",
    },
    {
      id: 2,
      image: "/images/kegiatan/ppdb.jpg",
      title: "Pendaftaran peserta didik baru",
      date: "27 Juni 2023",
      price: "Gratis",
      organizer: "Dinas Pendidikan Kab. Gowa",
    },
    {
      id: 3,
      image: "/images/kegiatan/event3.jpg",
      title: "Lomba Karya Ilmiah Remaja",
      date: "15 - 20 Agustus 2023",
      price: "Gratis",
      organizer: "Dinas Pendidikan Kab. Gowa",
    },
    {
      id: 4,
      image: "/images/kegiatan/event4.jpg",
      title: "Festival Seni dan Budaya",
      date: "5 - 10 September 2023",
      price: "Gratis",
      organizer: "Dinas Pendidikan Kab. Gowa",
    },
    {
      id: 5,
      image: "/images/kegiatan/event5.jpg",
      title: "Pelatihan Guru Inovatif",
      date: "1 - 5 Oktober 2023",
      price: "Gratis",
      organizer: "Dinas Pendidikan Kab. Gowa",
    },
    {
      id: 6,
      image: "/images/kegiatan/event6.jpg",
      title: "Olimpiade Matematika",
      date: "12 - 15 Oktober 2023",
      price: "Gratis",
      organizer: "Dinas Pendidikan Kab. Gowa",
    },
    {
      id: 7,
      image: "/images/kegiatan/event7.jpg",
      title: "Workshop Kreativitas Anak",
      date: "20 Oktober 2023",
      price: "Gratis",
      organizer: "Dinas Pendidikan Kab. Gowa",
    },
    {
      id: 8,
      image: "/images/kegiatan/event8.jpg",
      title: "Seminar Pendidikan Karakter",
      date: "25 Oktober 2023",
      price: "Gratis",
      organizer: "Dinas Pendidikan Kab. Gowa",
    },
    {
      id: 9,
      image: "/images/kegiatan/event9.jpg",
      title: "Pentas Seni Sekolah",
      date: "30 Oktober 2023",
      price: "Gratis",
      organizer: "Dinas Pendidikan Kab. Gowa",
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
  const totalPages = Math.ceil(activities.length / itemsPerPage);
  const showPagination = activities.length > itemsPerPage;

  // Get current page items
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = activities.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection
        title="Kegiatan Sekolahku"
        description="Kegiatan sekolahku berisi kumpulan kegiatan intrakurikuler dan ekstrakurikuler yang dilaksanakan di sekolah."
        imageSrc="/images/ilustrasi/event.png"
        imageAlt="Dinas pendidikan"
      />

      {/* Activities Grid Section */}
      <section className="py-12 md:py-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Activities Grid - Responsive: 2 cols (mobile), 4 cols (tablet & desktop) */}
          <div className="min-h-[600px] md:min-h-[650px]">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 mb-12">
              {currentItems.map((activity) => (
                <EventCard
                  image={activity.image}
                  title={activity.title}
                  date={activity.date}
                  badge={activity.price}
                  badgePosition="bottom"
                  showMetadataLabel={false} // ← Hide label
                  metadata={{
                    value: activity.organizer, // Langsung value, tanpa label
                  }}
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
                        : "bg-white text-gray-600 hover:bg-gray-100 "
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
}
