"use client";
import React, { useState, useRef, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Play, X, ChevronLeft, ChevronRight, Copy } from "lucide-react";

const TestimonialVideoSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentVideo, setCurrentVideo] = useState<any>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Drag scroll states
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [visibleSlides, setVisibleSlides] = useState(1);
  const [totalDots, setTotalDots] = useState(5);

  const AUTOPLAY_INTERVAL = 5000; // 5 detik

  // Data dummy testimoni - nanti diganti dengan API
  const testimonials = [
    {
      id: 1,
      name: "Ikbal Raymon",
      position: "Direktur Brain Evo Indonesia",
      thumbnail:
        "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=800&h=600&fit=crop",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      youtubeId: "dQw4w9WgXcQ",
    },
    {
      id: 2,
      name: "Bakri Rani, S.Pd., SH., MH",
      position: "Kepala Sekolah SMPN 1 Sungguminasa",
      thumbnail:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&h=600&fit=crop",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      youtubeId: "dQw4w9WgXcQ",
    },
    {
      id: 3,
      name: "Tri Bagus H",
      position: "Siswa SMPN 1 Sungguminasa",
      thumbnail:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      youtubeId: "dQw4w9WgXcQ",
    },
    {
      id: 4,
      name: "Siti Aminah, S.Pd",
      position: "Guru TK Teratai Mangasa",
      thumbnail:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&h=600&fit=crop",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      youtubeId: "dQw4w9WgXcQ",
    },
    {
      id: 5,
      name: "Ahmad Fauzi",
      position: "Orang Tua Siswa",
      thumbnail:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&h=600&fit=crop",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      youtubeId: "dQw4w9WgXcQ",
    },
  ];

  const openModal = (testimonial: any, index: number) => {
    setCurrentVideo(testimonial);
    setCurrentIndex(index);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentVideo(null);
    document.body.style.overflow = "unset";
  };

  const navigateVideo = (direction: "prev" | "next") => {
    let newIndex = currentIndex;
    if (direction === "prev") {
      newIndex = currentIndex > 0 ? currentIndex - 1 : testimonials.length - 1;
    } else {
      newIndex = currentIndex < testimonials.length - 1 ? currentIndex + 1 : 0;
    }
    setCurrentIndex(newIndex);
    setCurrentVideo(testimonials[newIndex]);
  };

  const copyLink = () => {
    if (currentVideo) {
      navigator.clipboard.writeText(
        `https://youtube.com/watch?v=${currentVideo.youtubeId}`
      );
      alert("Link copied to clipboard!");
    }
  };

  const scroll = (direction: "left" | "right") => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const cardElement = container.querySelector(".snap-start") as HTMLElement;
    const scrollAmount = cardElement?.offsetWidth || 350;

    if (direction === "left") {
      container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    } else {
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  // Drag scroll handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    const container = scrollContainerRef.current;
    if (!container) return;

    setIsDragging(true);
    setStartX(e.pageX - container.offsetLeft);
    setScrollLeft(container.scrollLeft);
    container.style.cursor = "grabbing";
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    const container = scrollContainerRef.current;
    if (container) {
      container.style.cursor = "grab";
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();

    const container = scrollContainerRef.current;
    if (!container) return;

    const x = e.pageX - container.offsetLeft;
    const walk = (x - startX) * 2; // Scroll speed multiplier
    container.scrollLeft = scrollLeft - walk;
  };

  const handleMouseLeave = () => {
    if (isDragging) {
      setIsDragging(false);
      const container = scrollContainerRef.current;
      if (container) {
        container.style.cursor = "grab";
      }
    }
  };

  // Calculate visible slides and total dots needed
  useEffect(() => {
    const calculateVisibleSlides = () => {
      const container = scrollContainerRef.current;
      if (!container) return;

      const containerWidth = container.offsetWidth;
      const cardElement = container.querySelector(".snap-start") as HTMLElement;
      const cardWidth = cardElement?.offsetWidth || 0;

      if (cardWidth > 0) {
        const slides = Math.ceil(containerWidth / cardWidth);
        setVisibleSlides(slides);

        // Calculate how many dots needed
        const dots = Math.ceil(testimonials.length / slides);
        setTotalDots(dots);
      }
    };

    calculateVisibleSlides();
    window.addEventListener("resize", calculateVisibleSlides);

    // Delay calculation to ensure DOM is ready
    setTimeout(calculateVisibleSlides, 100);

    return () => window.removeEventListener("resize", calculateVisibleSlides);
  }, [testimonials.length]);

  // Track scroll position to update dots
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const cardElement = container.querySelector(".snap-start") as HTMLElement;
      const cardWidth = cardElement?.offsetWidth || 0;
      const scrollPos = container.scrollLeft;
      const slideWidth = cardWidth * visibleSlides;
      const newIndex = Math.round(scrollPos / slideWidth);

      if (newIndex !== currentIndex && newIndex >= 0 && newIndex < totalDots) {
        setCurrentIndex(newIndex);
      }
    };

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, [currentIndex, totalDots, visibleSlides]);

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

    // Pause autoplay saat hover atau dragging
    const handleMouseEnter = () => clearInterval(autoScroll);

    container.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      clearInterval(autoScroll);
      container.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [visibleSlides]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };
    if (isModalOpen) {
      window.addEventListener("keydown", handleEscape);
    }
    return () => window.removeEventListener("keydown", handleEscape);
  }, [isModalOpen]);

  return (
    <>
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="mx-auto">
          {/* Header */}
          <div className="text-center mb-8 sm:mb-12">
            <div className="flex items-center justify-center gap-3">
              <h2 className="text-3xl mb-4 sm:text-4xl lg:text-5xl font-bold text-blue-950 leading-tight">
                Apa Kata Mereka Soal RUKOKU?
              </h2>
            </div>
            <p className="text-sm sm:text-base text-gray-600">
              Testimoni Orang Tua, Guru, Kepala Sekolah, Pengawas Sekolah, Siswa
            </p>
          </div>

          {/* Video Slider Container */}
          <div className="relative">
            {/* Video Cards Slider */}
            <div
              ref={scrollContainerRef}
              className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide gap-1 select-none"
              style={{
                scrollbarWidth: "none",
                msOverflowStyle: "none",
                cursor: "grab",
              }}
              onMouseDown={handleMouseDown}
              onMouseUp={handleMouseUp}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              {testimonials.map((testimonial, index) => (
                <Card
                  key={testimonial.id}
                  className="flex-shrink-0 w-full sm:w-[320px] lg:w-[calc(33.333%-0px)] cursor-pointer group overflow-hidden snap-start border-0 rounded-3xl"
                  onClick={(e) => {
                    // Hanya buka modal jika tidak sedang dragging
                    if (!isDragging) {
                      openModal(testimonial, index);
                    }
                  }}
                  onDragStart={(e) => e.preventDefault()}
                >
                  <div className="relative h-[380px] sm:h-[420px] lg:h-[500px]">
                    {/* Thumbnail */}
                    <img
                      src={testimonial.thumbnail}
                      alt={testimonial.name}
                      className="w-full h-full object-cover pointer-events-none"
                      draggable={false}
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

                    {/* Play Button */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 bg-[#046DC2]/50 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-xl">
                        <Play
                          className="w-8 h-8 sm:w-9 sm:h-9 text-white opacity-90 ml-1"
                          fill="white"
                        />
                      </div>
                    </div>

                    {/* Info */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white pointer-events-none">
                      <h3 className="text-xl font-bold mb-1">
                        {testimonial.name}
                      </h3>
                      <p className="text-sm opacity-90">
                        {testimonial.position}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-6">
              {Array.from({ length: totalDots }).map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex ? "bg-[#046DC2] w-6" : "bg-gray-300"
                  }`}
                  onClick={() => {
                    setCurrentIndex(index);
                    const container = scrollContainerRef.current;
                    if (container) {
                      const cardElement = container.querySelector(
                        ".snap-start"
                      ) as HTMLElement;
                      const cardWidth = cardElement?.offsetWidth || 0;
                      const slideWidth = cardWidth * visibleSlides;
                      container.scrollTo({
                        left: slideWidth * index,
                        behavior: "smooth",
                      });
                    }
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Modal Video Player */}
      {isModalOpen && currentVideo && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4">
          {/* Close Button */}
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 text-white hover:bg-white/10 p-2 rounded-full transition-colors z-50"
          >
            <X className="w-8 h-8" />
          </button>

          {/* Navigation Arrows */}
          <button
            onClick={() => navigateVideo("prev")}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/10 p-3 rounded-full transition-colors"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>
          <button
            onClick={() => navigateVideo("next")}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/10 p-3 rounded-full transition-colors"
          >
            <ChevronRight className="w-8 h-8" />
          </button>

          {/* Video Container */}
          <div className="w-full max-w-5xl relative">
            {/* Video Player */}
            <div className="relative pt-[56.25%] bg-black rounded-lg overflow-hidden">
              <iframe
                src={`${currentVideo.videoUrl}?autoplay=1`}
                className="absolute inset-0 w-full h-full"
                allow="autoplay; encrypted-media"
                allowFullScreen
              />
            </div>

            {/* Video Info & Controls */}
            <div className="mt-4 flex items-center justify-between text-white">
              <div>
                <h3 className="text-lg font-bold">{currentVideo.name}</h3>
                <p className="text-sm text-gray-400">{currentVideo.position}</p>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={copyLink}
                  className="p-2 hover:bg-white/10 rounded transition-colors"
                  title="Copy link"
                >
                  <Copy className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </>
  );
};

export default TestimonialVideoSection;
