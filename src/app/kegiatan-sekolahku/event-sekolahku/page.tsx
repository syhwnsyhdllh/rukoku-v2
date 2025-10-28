"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import HeroSection from "@/components/HeroSection";
import EventCard from "@/components/EventCard";
import { getSchoolEventsForList } from "@/lib/school-events";

const EventSekolah = () => {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(8);

  const schoolEvents = getSchoolEventsForList();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerPage(6);
      } else {
        setItemsPerPage(8);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    setCurrentPage(1);
  }, [itemsPerPage]);

  const totalPages = Math.ceil(schoolEvents.length / itemsPerPage);
  const showPagination = schoolEvents.length > itemsPerPage;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = schoolEvents.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div className="min-h-screen">
      <HeroSection
        title="Event Sekolah"
        description="Berbagai kegiatan dan event menarik dari sekolah-sekolah di Kabupaten Gowa untuk mendukung prestasi dan pengembangan siswa."
        imageSrc="/images/ilustrasi/event.png"
        imageAlt="Event Sekolah"
      />

      <section className="py-12 md:py-10 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="min-h-[600px] md:min-h-[650px]">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 mb-12">
              {currentItems.map((event) => (
                <EventCard
                  key={event.id}
                  image={event.image}
                  title={event.title}
                  date={event.date}
                  price={event.price}
                  pricePosition="overlay"
                  time={event.time}
                  variant="school"
                  showMetadataLabel={false}
                  metadata={{
                    label: "Penyelenggara",
                    value: event.organizer, // ✅ GUNAKAN INI
                  }}
                  onClick={() =>
                    router.push(
                      `/kegiatan-sekolahku/event-sekolahku/${event.slug}`
                    )
                  }
                />
              ))}
            </div>
          </div>

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

export default EventSekolah;
