"use client";

import React, { useState, useEffect } from "react";

export default function Hero() {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  useEffect(() => {
    // Trigger animation after component mount
    const timer = setTimeout(() => {
      setIsImageLoaded(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="mx-auto px-4 sm:px-6 md:px-8">
      <div className="relative rounded-2xl md:rounded-3xl overflow-hidden h-[450px] sm:h-[500px] xl:h-[650px]">
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('/images/hero-bg.jpeg')`,
          }}
        >
          {/* Blue Overlay */}
          <div className="absolute inset-0 bg-[#1BA3E0] opacity-80"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col lg:justify-center px-4 sm:px-6 md:px-12 lg:px-20 py-8 sm:py-10 md:py-16 mt-4 lg:-mt-10">
          {/* Left Content */}
          <div className="max-w-full md:max-w-2xl text-white lg:space-y-4">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight">
              RUKOKU
            </h1>
            <h2 className="text-xl md:text-4xl lg:text-5xl font-semibold md:-mt-4">
              Rumahku-Sekolahku
            </h2>
            <p className="text-sm md:text-lg lg:text-2xl leading-relaxed pt-2 md:pt-4">
              Perubahan Paradigma Lingkungan Belajar di Rumah
              <br className="hidden sm:block" />
              <span className="sm:inline"> </span>
              Wujud Orang Tua Peduli, Guru Hebat, Anak Cerdas
            </p>

            {/* Search Box */}
            <div className="flex items-center bg-white rounded-full overflow-hidden max-w-full sm:max-w-md !mt-8 md:!mt-12 lg:!mt-10">
              <input
                type="text"
                placeholder="Cari topik parenting di sini"
                className="flex-1 px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base text-gray-700 focus:outline-none"
              />
              <button className="bg-[#046DC2] hover:bg-[#1BA3E0] text-white px-4 sm:px-10 py-2 sm:py-3 my-1 mr-1 rounded-full font-medium transition flex items-center gap-2 text-sm sm:text-base whitespace-nowrap">
                Cari
              </button>
            </div>
          </div>
        </div>

        {/* Right Bottom - Leaders Image - Desktop */}
        <div
          className={`absolute bottom-0 right-0 leading-[0] hidden sm:block transition-all duration-1000 ease-out ${
            isImageLoaded
              ? "opacity-100 translate-x-0"
              : "opacity-0 translate-x-10"
          }`}
        >
          <img
            src="/images/pemimpin.svg"
            alt="Regional Leaders"
            className="block w-full max-w-[300px] sm:max-w-md md:max-w-lg lg:max-w-lg xl:max-w-3xl h-auto"
            style={{ display: "block", verticalAlign: "bottom" }}
          />
        </div>

        {/* Mobile Leaders Image - Smaller version */}
        <div
          className={`absolute bottom-0 right-0 leading-[0] block sm:hidden mt-10 transition-all duration-1000 ease-out ${
            isImageLoaded
              ? "opacity-100 translate-x-0"
              : "opacity-0 translate-x-10"
          }`}
        >
          <img
            src="/images/pemimpin.svg"
            alt="Regional Leaders"
            className="block w-60 h-auto"
            style={{ display: "block", verticalAlign: "bottom" }}
          />
        </div>
      </div>
    </section>
  );
}
