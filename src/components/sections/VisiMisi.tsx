"use client";

import React from "react";
import { GitBranch, TrendingUp } from "lucide-react";

export default function VisiMisi() {
  return (
    <section className="py-12 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 items-start">
          {/* Left Side - Header */}
          <div className="lg:col-span-1">
            <div className="bg-blue-50 rounded-lg p-4 inline-block mb-4">
              <p className="text-blue-600 font-medium text-sm md:text-base tracking-wide">
                DINAS PENDIDIKAN KABUPATEN GOWA
              </p>
            </div>
            <div className="space-y-2 text-3xl md:text-4xl lg:text-5xl font-bold text-blue-950 mt-2">
              <h2>Visi & Misi</h2>
              <h2>Dinas Pendidikan</h2>
              <h2>Kabupaten Gowa</h2>
            </div>
          </div>

          {/* Right Side - Staggered Cards */}
          <div className="lg:col-span-2 flex flex-col md:flex-row gap-6 md:gap-8 justify-center md:justify-end">
            {/* Visi Card - Higher position */}
            <div className="md:mt-0 w-full md:max-w-[280px] lg:max-w-[400px]">
              <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 p-6 md:p-8">
                <div className="bg-pink-50 w-14 h-14 md:w-16 md:h-16 rounded-xl flex items-center justify-center mb-6">
                  <GitBranch className="w-7 h-7 md:w-8 md:h-8 text-pink-500" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                  Visi
                </h3>
                <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                  Terwujudnya Masyarakat yang Unggul dan Tangguh dengan Tata
                  Kelola Pemerintahan Terbaik.
                </p>
              </div>
            </div>

            {/* Misi Card - Lower position */}
            <div className="md:mt-12 lg:mt-16 w-full md:max-w-[280px] lg:max-w-[400px]">
              <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 p-6 md:p-8">
                <div className="bg-blue-50 w-14 h-14 md:w-16 md:h-16 rounded-xl flex items-center justify-center mb-6">
                  <TrendingUp className="w-7 h-7 md:w-8 md:h-8 text-blue-500" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                  Misi
                </h3>
                <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-2">
                  Meningkatkan Kualitas Hidup Masyarakat yang Unggul dan
                  Inklusif.
                </p>
                <p className="text-gray-500 text-sm md:text-base">
                  (RPJMD 2021-2026)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
