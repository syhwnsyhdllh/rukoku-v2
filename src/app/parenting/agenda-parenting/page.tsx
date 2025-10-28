"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import HeroSection from "@/components/HeroSection";
import EventCard from "@/components/EventCard";
import { getParentingEventsForList } from "@/lib/parenting-events";

const AgendaParenting = () => {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(8);

  // Get data from lib
  const parentingEvents = getParentingEventsForList();

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
      <section className="py-12 md:py-10 px-4">
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
                  price={event.isPaid ? "Berbayar" : "Gratis"}
                  pricePosition="overlay"
                  time={event.time}
                  showMetadataLabel={true}
                  metadata={{
                    label: "Pembicara",
                    value: event.speaker,
                    subLabel: event.position,
                  }}
                  onClick={() =>
                    router.push(`/parenting/agenda-parenting/${event.slug}`)
                  }
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
