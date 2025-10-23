"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

const BannerSection = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    if (email && email.includes("@")) {
      // Handle newsletter subscription
      console.log("Subscribe email:", email);
      alert(`Subscribed with: ${email}`);
      setEmail("");
    } else {
      alert("Please enter a valid email address");
    }
  };

  return (
    <section className="py-12 sm:py-16 lg:py-20 px-5 lg:px-20">
      <div className=" mx-auto">
        <div
          className="relative rounded-2xl sm:rounded-3xl overflow-hidden"
          style={{
            background: "linear-gradient(135deg, #1BA3E0 0%, #046DC2 100%)",
          }}
        >
          {/* Content Container */}
          <div className="relative z-10 px-6 sm:px-10 lg:px-28 py-10 sm:py-12 lg:py-16 flex flex-col lg:flex-row items-center justify-between gap-8">
            {/* Left Content */}
            <div className="text-white max-w-xl text-center lg:text-left">
              <h2 className="text-3xl lg:text-[48px] font-bold lg:mb-7">
                Rumahku
              </h2>
              <h2 className="text-3xl lg:text-[48px] font-bold lg:mb-3 lg:ml-20">
                Sekolahku
              </h2>
            </div>

            {/* Right - Newsletter Form */}
            <div className="w-full lg:w-[450px]">
              <p className="text-sm sm:text-lg opacity-90 leading-relaxed text-white text-center lg:text-left">
                Perubahan Paradigma Lingkungan Belajar di Rumah Wujud Orang Tua
                Peduli, Guru Hebat, Anak Cerdas
              </p>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
        </div>
      </div>
    </section>
  );
};

export default BannerSection;
