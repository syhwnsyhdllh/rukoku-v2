"use client";

import React, { useState, useEffect } from "react";

interface Testimonial {
  id: number;
  quote: string;
  name: string;
  position: string;
  image: string;
  align: "left";
}

export default function Testimonial() {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      quote:
        "Puncak tertinggi sebuah pendidikan adalah adab, pendidikan yang berkualitas bisa kita peroleh jika orang tua, sekolah, dan masyarakat bersama-sama melibatkan diri sesuai dengan perannya masing-masing.",
      name: "Dr. Adnan Purichta Ichsan, S.H., M.H.",
      position: "Bupati Gowa",
      image: "/images/sambutan/1.svg",
      align: "left",
    },
    {
      id: 2,
      quote:
        "Guru tanpa orang tua adalah sia-sia, Orang tua tanpa guru adalah kurang rasa. Ibu adalah guru pertama bagi anaknya, dan ayahnya adalah kepala sekolahnya.",
      name: "Taufiq Mursaf, ST.",
      position: "Kepala Dinas Pendidikan Kab. Gowa",
      image: "/images/sambutan/2.svg",
      align: "left",
    },
    {
      id: 3,
      quote:
        "Pendidikan adalah investasi terbaik untuk masa depan. Mari kita bersama membangun generasi yang berkualitas.",
      name: "Drs. H. Abdul Rauf Malaganni, M.Si.",
      position: "Wakil Bupati Gowa",
      image: "/images/sambutan/3.svg",
      align: "left",
    },
  ];

  // Autoplay Effect
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(
        (prevIndex: number) => (prevIndex + 1) % testimonials.length
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const goToSlide = (index: number): void => {
    setActiveIndex(index);
  };

  return (
    <section className="py-12 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        <div className="relative max-w-7xl mx-auto pt-20 md:pt-12 lg:pt-16">
          {testimonials.map((item: Testimonial, index: number) => (
            <div
              key={item.id}
              className={`transition-all duration-700 ease-in-out ${
                index === activeIndex
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 absolute inset-0 pointer-events-none translate-x-4"
              }`}
            >
              <div className="relative">
                {/* Mobile Layout */}
                <div className="md:hidden">
                  <div className="bg-[#5BB4E5] rounded-3xl shadow-xl p-6 pb-8">
                    <div className="flex flex-col items-center">
                      {/* Image for Mobile - Centered and Smaller */}
                      <div className="w-48 h-48 mb-4 relative -mt-16">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-contain"
                        />
                      </div>

                      {/* Content for Mobile */}
                      <div className="text-white text-center">
                        <p className="text-sm leading-relaxed mb-4">
                          {item.quote}
                        </p>
                        <div>
                          <h3 className="text-base font-bold mb-1">
                            {item.name}
                          </h3>
                          <p className="text-xs opacity-90">{item.position}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Desktop Layout */}
                <div className="hidden md:block">
                  {/* Image with Overflow */}
                  <div
                    className={`absolute ${
                      item.align === "left" ? "left-0" : "right-0"
                    } w-[380px] lg:w-[420px] h-[400px] lg:h-[540px] -top-0 lg:-top-[5.6rem] z-10`}
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className={`w-full h-full object-contain rounded-bl-3xl ${
                        item.align === "left"
                          ? "object-left-bottom"
                          : "object-right-bottom"
                      }`}
                    />
                  </div>

                  {/* Card Background */}
                  <div
                    className={`bg-[#5BB4E5] rounded-3xl shadow-xl flex ${
                      item.align === "left" ? "flex-row" : "flex-row-reverse"
                    } h-[400px] lg:h-[450px]`}
                  >
                    {/* Spacer for Image */}
                    <div className="w-[380px] lg:w-[420px] shrink-0"></div>

                    {/* Content Side */}
                    <div className="flex-1 p-10 lg:p-16 flex flex-col justify-center text-white">
                      <p className="text-base md:text-lg lg:text-xl xl:text-2xl leading-relaxed mb-6 md:mb-8">
                        {item.quote}
                      </p>
                      <div>
                        <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-1 md:mb-2">
                          {item.name}
                        </h3>
                        <p className="text-sm md:text-base lg:text-lg opacity-90">
                          {item.position}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dots Indicator */}
        {testimonials.length > 1 && (
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_: Testimonial, index: number) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  index === activeIndex
                    ? "bg-[#5BB4E5] w-8"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
