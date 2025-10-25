"use client";
import { useState, useEffect } from "react";
import HeroSection from "@/components/HeroSection";
import EventCard from "@/components/EventCard";

const AgendaParenting = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(8);

  // Data agenda parenting
  const parentingEvents = [
    {
      id: 1,
      image: "/images/parenting/workshop1.jpg",
      title: "Workshop Pola Asuh Anak Usia Dini",
      date: "15 November 2025",
      time: "09:00 - 12:00",
      badge: "Gratis",
      speaker: "Dr. Budi Santoso",
      position: "Psikolog Anak",
    },
    {
      id: 2,
      image: "/images/parenting/seminar1.jpg",
      title: "Seminar Komunikasi Efektif dengan Anak",
      date: "20 November 2025",
      time: "13:00 - 16:00",
      badge: "Gratis",
      speaker: "Prof. Dr. Siti Aminah",
      position: "Pakar Komunikasi Keluarga",
    },
    {
      id: 3,
      image: "/images/parenting/workshop2.jpg",
      title: "Pelatihan Mengelola Emosi Anak",
      date: "25 November 2025",
      time: "10:00 - 13:00",
      badge: "Gratis",
      speaker: "Dra. Rina Kusuma",
      position: "Konselor Keluarga",
    },
    {
      id: 4,
      image: "/images/parenting/talkshow1.jpg",
      title: "Talkshow Parenting di Era Digital",
      date: "1 Desember 2025",
      time: "14:00 - 17:00",
      badge: "Gratis",
      speaker: "Ahmad Fauzi, M.Psi",
      position: "Psikolog Klinis",
    },
    {
      id: 5,
      image: "/images/parenting/workshop3.jpg",
      title: "Workshop Mendampingi Belajar Anak",
      date: "5 Desember 2025",
      time: "09:00 - 12:00",
      badge: "Gratis",
      speaker: "Dr. Lina Wati",
      position: "Pendidik & Praktisi Parenting",
    },
    {
      id: 6,
      image: "/images/parenting/seminar2.jpg",
      title: "Seminar Membangun Karakter Anak",
      date: "10 Desember 2025",
      time: "13:00 - 16:00",
      badge: "Gratis",
      speaker: "H. Muhammad Yusuf, S.Pd",
      position: "Kepala Sekolah & Motivator",
    },
    {
      id: 7,
      image: "/images/parenting/workshop4.jpg",
      title: "Pelatihan Mengatasi Tantrum pada Anak",
      date: "15 Desember 2025",
      time: "10:00 - 13:00",
      badge: "Gratis",
      speaker: "Nurul Hidayah, M.Psi",
      position: "Child Development Specialist",
    },
    {
      id: 8,
      image: "/images/parenting/talkshow2.jpg",
      title: "Talkshow Pentingnya Quality Time",
      date: "20 Desember 2025",
      time: "14:00 - 17:00",
      badge: "Gratis",
      speaker: "Drs. Bambang Widodo",
      position: "Family Counselor",
    },
    {
      id: 9,
      image: "/images/parenting/workshop5.jpg",
      title: "Workshop Stimulasi Tumbuh Kembang Anak",
      date: "28 Desember 2025",
      time: "09:00 - 12:00",
      badge: "Gratis",
      speaker: "dr. Ani Wijaya, Sp.A",
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
  const totalPages = Math.ceil(parentingEvents.length / itemsPerPage);
  const showPagination = parentingEvents.length > itemsPerPage;

  // Get current page items
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = parentingEvents.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection
        title="Agenda Parenting"
        description="Jadwal kegiatan parenting yang diselenggarakan untuk membantu orang tua dalam mengasuh dan mendidik anak dengan lebih baik."
        imageSrc="/images/ilustrasi/parenting.png"
        imageAlt="Agenda Parenting"
      />

      {/* Events Grid Section */}
      <section className="py-12 md:py-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Events Grid - Responsive: 2 cols (mobile), 4 cols (tablet & desktop) */}
          <div className="min-h-[600px] md:min-h-[650px]">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 mb-12">
              {currentItems.map((event) => (
                <EventCard
                  key={event.id}
                  image={event.image}
                  title={event.title}
                  date={event.date}
                  badge={event.badge}
                  badgePosition="overlay"
                  time={event.time}
                  showMetadataLabel={true}
                  metadata={{
                    label: "Pembicara",
                    value: event.speaker,
                    subLabel: event.position,
                  }}
                  onClick={() => console.log("Clicked:", event.title)}
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

export default AgendaParenting;
