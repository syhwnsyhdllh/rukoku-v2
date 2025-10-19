"use client";
import React from "react";

export default function TimEfektifSection() {
  const teamMembers = [
    {
      id: 1,
      name: "Taufiq Mursad, ST.",
      position: "Kepala Dinas Pendidikan Kab. Gowa",
      image: "/images/tim-efektif/1.svg",
    },
    {
      id: 2,
      name: "Hj. Rike Susanti, ST.",
      position: "Sekretaris Dinas Pendidikan Kab. Gowa",
      image: "/images/tim-efektif/2.svg",
    },
    {
      id: 3,
      name: "Harianti, S. Sos., M. Si.",
      position: "Kepala Bidang Pembinaan TK/PAUD dan PNF",
      image: "/images/tim-efektif/3.svg",
    },
    {
      id: 4,
      name: "Dr. Ulfa Tenri Batari, M. Pd",
      position: "Kepala Bidang Pembinaan Sekolah Dasar",
      image: "/images/tim-efektif/4.svg",
    },
    {
      id: 5,
      name: "Muh. Rivan Maulana, S. STP., MM. ",
      position: "Kepala Bidang Pembinaan Sekolah Menengah Pertama",
      image: "/images/tim-efektif/5.svg",
    },
    {
      id: 6,
      name: "Drs. Mulyadi, M. Si.",
      position: "Kepala Bidang Pembinaan Pendidik dan Tenaga Kependidikan",
      image: "/images/tim-efektif/6.svg",
    },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12 text-center w-full">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4">
            Tim Efektif RUKOKU
          </h2>
          <p className="text-gray-600 max-w-2xl text-sm sm:text-base mx-auto">
            Tim dari pihak Dinas Pendidikan Kab. Gowa yang terlibat dalam RUKOKU
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="relative rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 h-[380px]"
            >
              {/* Image Container */}
              <div className="relative w-full h-full bg-gray-200">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute bottom-4 left-4 right-4 bg-white/50 backdrop-blur-sm rounded-xl px-4 py-3 shadow text-center">
                <h3 className="font-semibold text-gray-900 text-base mb-0.5">
                  {member.name}
                </h3>
                <p className="text-gray-600 text-sm">{member.position}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
