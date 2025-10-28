"use client";
import React, { useRef, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const OrangTuaPeduli = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const AUTOPLAY_INTERVAL = 6000; // 👈 UBAH ANGKA INI UNTUK MENGATUR WAKTU

  const teamMembers = [
    {
      name: "Muh. Yasin Limpo",
      role: "Ketua Komunitas",
      image: "/images/komunitas/1.svg",
      bgColor: "bg-gray-900",
    },
    {
      name: "Harifin Naba",
      role: "Sekretaris Komunitas",
      image: "/images/komunitas/2.svg",
      bgColor: "bg-gray-800",
    },
    {
      name: "Indriana Tajuddin, SE.",
      role: "Bendahara Komunitas",
      image: "/images/komunitas/3.svg",
      bgColor: "bg-gray-900",
    },
    {
      name: "Rewata",
      role: "Koordinator Bid. Organisasi",
      image: "/images/komunitas/4.svg",
      bgColor: "bg-gray-900",
    },
    {
      name: "Hj. Junaerda Ida Ashari",
      role: "Anggota Bid. Organisasi",
      image: "/images/komunitas/5.svg",
      bgColor: "bg-gray-900",
    },
    {
      name: "Muh. Khairil Anwar",
      role: "Koordinator Bid. Pendidikan & Pengembangan SDM",
      image: "/images/komunitas/6.svg",
      bgColor: "bg-gray-900",
    },
    {
      name: "Muh Ridwan, S.Ag.",
      role: "Koordinator Bid. Humas",
      image: "/images/komunitas/7.svg",
      bgColor: "bg-gray-900",
    },
    {
      name: "Dewi Pertiwi Putri",
      role: "Anggota Bid. Humas",
      image: "/images/komunitas/8.svg",
      bgColor: "bg-gray-900",
    },
  ];

  const scroll = (direction: "left" | "right") => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const cardElement = container.querySelector(".team-card") as HTMLElement;
    const cardWidth = cardElement?.offsetWidth || 0;
    const gap = 20;
    const scrollAmount = cardWidth + gap;

    if (direction === "left") {
      container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    } else {
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  // Autoplay Effect
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const autoScroll = setInterval(() => {
      const maxScrollLeft = container.scrollWidth - container.clientWidth;
      const currentScroll = container.scrollLeft;

      // Jika sudah di ujung, kembali ke awal
      if (currentScroll >= maxScrollLeft - 10) {
        container.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        scroll("right");
      }
    }, AUTOPLAY_INTERVAL);

    // Pause autoplay saat hover
    const handleMouseEnter = () => clearInterval(autoScroll);
    const handleMouseLeave = () => {
      // Restart autoplay setelah mouse leave
      const newAutoScroll = setInterval(() => {
        const maxScrollLeft = container.scrollWidth - container.clientWidth;
        const currentScroll = container.scrollLeft;

        if (currentScroll >= maxScrollLeft - 10) {
          container.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          scroll("right");
        }
      }, AUTOPLAY_INTERVAL);

      return () => clearInterval(newAutoScroll);
    };

    container.addEventListener("mouseenter", handleMouseEnter);
    container.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      clearInterval(autoScroll);
      container.removeEventListener("mouseenter", handleMouseEnter);
      container.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <section className="mx-auto px-4 sm:px-6 md:px-8 lg:px-8 xl:px-48 py-12 lg:py-16">
      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

      {/* Header Section */}
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6 mb-10">
        <div className="flex-1">
          <div className="inline-block px-4 py-1.5 border border-gray-300 rounded-full text-sm font-medium mb-4">
            RUKOKU
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-950 leading-tight">
            Komunitas Orang Tua Peduli
            <br />
            Kabupaten Gowa
          </h2>
        </div>

        {/* Navigation Buttons */}
        <div className="flex gap-3 sm:mt-8">
          <Button
            variant="outline"
            size="icon"
            className="rounded-full w-12 h-12 border-2 hover:bg-[#046DC2] hover:text-white hover:border-blue-600 transition-colors"
            onClick={() => scroll("left")}
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="rounded-full w-12 h-12 hover:bg-[#046DC2] hover:text-white hover:border-blue-600 transition-colors"
            onClick={() => scroll("right")}
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>
      </div>

      {/* Team Cards Slider */}
      <div
        ref={scrollContainerRef}
        className="flex gap-4 overflow-x-auto hide-scrollbar scroll-smooth snap-x snap-mandatory"
      >
        {teamMembers.map((member, index) => (
          <Card
            key={index}
            className={`team-card rounded-3xl flex-shrink-0 w-[85vw] sm:w-[calc(50%-10px)] md:w-[calc(33.333%-14px)] lg:w-[calc(25%-15px)] overflow-hidden border-0 ${member.bgColor} snap-start`}
          >
            <CardContent className="p-0">
              <div className="relative group">
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Text Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent text-white">
                  <h3 className="text-lg font-bold mb-1">{member.name}</h3>
                  <p className="text-sm opacity-90">{member.role}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default OrangTuaPeduli;
