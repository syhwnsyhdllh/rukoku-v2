"use client";

import Image from "next/image";

export default function RukokuSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 ">
        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-20 justify-between items-center max-w-7xl mx-auto">
          {/* Left Content */}
          <div className="order-2 md:order-1">
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-950 leading-tight mb-5">
              Perjalanan Terbentuknya Rukoku
            </h3>
            <p className="text-gray-600 text-sm md:text-base lg:text-lg leading-relaxed mb-6 md:mb-8">
              Setiap anak berkesempatan menjemput masa depannya. Mereka berhak
              memperoleh perlindungan pendidikan dan kasih sayang. Masyarakat,
              orang tua dan sekolah adalah wadah mereka mendapatkan semua itu.
            </p>
            <button className="bg-[#046DC2] hover:bg-[#1BA3E0] text-white font-medium px-6 md:px-8 py-3 md:py-4 rounded-full transition-colors duration-300 text-sm md:text-base">
              Baca Selengkapnya
            </button>
          </div>

          {/* Right Images */}
          <div className="order-1 md:order-2 relative lg:ml-4">
            <div className="relative w-full h-[400px] md:h-[450px] lg:h-[500px]">
              {/* Main Image - Bottom Right */}
              <div className="absolute bottom-0 right-0 w-[80%] h-[55%] rounded-3xl overflow-hidden shadow-2xl z-10">
                <Image
                  src="/images/rukoku-1.jpg"
                  alt="Rukoku Community 1"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 65vw, 35vw"
                />
              </div>

              {/* Secondary Image - Top Left */}
              <div className="absolute top-0 left-0 w-[70%] h-[55%] rounded-3xl overflow-hidden shadow-2xl ">
                <div className="relative w-full h-full rounded-2xl overflow-hidden">
                  <Image
                    src="/images/rukoku-2.jpg"
                    alt="Rukoku Community 2"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 70vw, 40vw"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
