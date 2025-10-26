"use client";
import React from "react";
import Link from "next/link";
import NewsCard from "../NewsCard";

const InfoTerkini = () => {
  // Data dummy berita - nanti akan diganti dengan API
  const newsData = [
    {
      id: 1,
      title:
        "Mediasi Yang Dilakukan Oleh Komunitas Orang Tua Peduli Di SDN Mangasa 1 Kec. Somba Opu",
      date: "13 Agustus 2023",
      image:
        "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=600&h=400&fit=crop",
      slug: "mediasi-komunitas-orang-tua-peduli-sdn-mangasa-1",
    },
    {
      id: 2,
      title:
        "Kepala SDN Bontokamase Menjelaskan Kepada Orang Tua Tentang Pembentukan Orang Tua Peduli Di Sekolahnya",
      date: "20 Juli 2023",
      image:
        "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&h=400&fit=crop",
      slug: "kepala-sdn-bontokamase-menjelaskan-pembentukan-orang-tua-peduli",
    },
    {
      id: 3,
      title:
        "Pemaparan Pembentukan Komunitas Orang Tua Peduli Di SD Inpres Mangasa Kepada Orang Tua Siswa",
      date: "22 Juli 2023",
      image:
        "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&h=400&fit=crop",
      slug: "pemaparan-pembentukan-komunitas-orang-tua-peduli-sd-inpres-mangasa",
    },
  ];

  // Fungsi untuk handle click - nanti akan navigate ke detail page
  const handleNewsClick = (id: number, slug: string) => {
    // Nanti akan diganti dengan router.push atau Link
    console.log(`Navigate to: /berita/${id}/${slug}`);
    // window.location.href = `/berita/${id}/${slug}`;
  };

  return (
    <section className="py-12 sm:py-16 lg:py-40 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12 lg:mb-16">
          <div className="flex items-center justify-center gap-3 mb-2">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-950 leading-tight">
              Kabar Dari Kami
            </h2>
          </div>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {newsData.map((news) => (
            <NewsCard
              key={news.id}
              id={news.id}
              title={news.title}
              date={news.date}
              image={news.image}
              slug={news.slug}
              onClick={handleNewsClick}
            />
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-10 sm:mt-12">
          <Link href="/blog">
            <button className="px-6 sm:px-8 py-2.5 sm:py-3 bg-[#046DC2] text-white rounded-full hover:bg-[#1BA3E0] transition-colors duration-300 hover:shadow-lg text-sm sm:text-base">
              Lihat Semua Berita
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default InfoTerkini;
