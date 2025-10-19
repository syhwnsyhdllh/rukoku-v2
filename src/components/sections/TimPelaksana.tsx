"use client";
import React, { useRef, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const TimPelaksana = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // ⏱️ ATUR WAKTU AUTOPLAY DI SINI (dalam milidetik)
  // 3000 = 3 detik, 5000 = 5 detik, dst.
  const AUTOPLAY_INTERVAL = 6000; // 👈 UBAH ANGKA INI UNTUK MENGATUR WAKTU

  const teamMembers = [
    {
      name: "Dr. Ulfa Tenri Batari, M.pd.",
      role: "Inovator",
      image: "/images/tim-pelaksana/1.svg",
      bgColor: "bg-gray-900",
    },
    {
      name: "Nurliah Syahrul, S.Pd., M.Pd.",
      role: "Fasilitator",
      image: "/images/tim-pelaksana/2.svg",
      bgColor: "bg-gray-800",
    },
    {
      name: "Dr. Astuti N Yudhar, MM., M.Pd.",
      role: "Fasilitator",
      image: "/images/tim-pelaksana/3.svg",
      bgColor: "bg-gray-900",
    },
    {
      name: "Drs. H. Syahruddin M, M.Si.",
      role: "Fasilitator",
      image: "/images/tim-pelaksana/4.svg",
      bgColor: "bg-gray-900",
    },
    {
      name: "Sahabuddin, S.Pd., M.Pd.",
      role: "Tim Sosialisasi",
      image: "/images/tim-pelaksana/5.svg",
      bgColor: "bg-gray-900",
    },
    {
      name: "Nur Azizah Syarif, S.Pd., M.Pd.",
      role: "Tim Sosialisasi",
      image: "/images/tim-pelaksana/6.svg",
      bgColor: "bg-gray-900",
    },
    {
      name: "Hamzari Hafid S.Pd., M.Pd.",
      role: "Tim Video & Publikasi",
      image: "/images/tim-pelaksana/7.svg",
      bgColor: "bg-gray-900",
    },
    {
      name: "Hairuddin S.Pd., M.Pd.",
      role: "Tim Video & Publikasi",
      image: "/images/tim-pelaksana/8.svg",
      bgColor: "bg-gray-900",
    },
    {
      name: "Dini Muliasari, S.Pd.",
      role: "Tim Video & Publikasi",
      image: "/images/tim-pelaksana/9.svg",
      bgColor: "bg-gray-900",
    },
    {
      name: "Munandar, S.Pd.",
      role: "Tim Video & Publikasi",
      image: "/images/tim-pelaksana/10.svg",
      bgColor: "bg-gray-900",
    },
    {
      name: "Muh Askary, S.Pd., M.Pd.",
      role: "Tim App Rukoku",
      image: "/images/tim-pelaksana/11.svg",
      bgColor: "bg-gray-900",
    },
    {
      name: "Syahwan Syahadillah HT, S.Kom.",
      role: "Tim App Rukoku",
      image: "/images/tim-pelaksana/12.svg",
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
    <section className="mx-auto px-4 sm:px-6 lg:px-48 py-12 lg:py-16">
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
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            Tim Pelaksana Rukoku
            <br />
            Dinas Pendidikan Kab. Gowa
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
        className="flex gap-5 overflow-x-auto hide-scrollbar scroll-smooth snap-x snap-mandatory"
      >
        {teamMembers.map((member, index) => (
          <Card
            key={index}
            className={`team-card flex-shrink-0 w-[85vw] sm:w-[calc(50%-10px)] lg:w-[calc(25%-15px)] overflow-hidden border-0 ${member.bgColor} snap-start`}
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
                <div className="absolute bottom-4 left-4 right-4 bg-white/50 backdrop-blur-sm rounded-xl px-4 py-3 shadow text-center">
                  <h3 className="font-semibold text-gray-900 text-base mb-0.5">
                    {member.name}
                  </h3>
                  <p className="text-gray-600 text-sm">{member.role}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default TimPelaksana;
