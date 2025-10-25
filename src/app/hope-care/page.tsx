"use client";
import HeroSection from "@/components/HeroSection";
import CardPengaduan from "@/components/hope-care/CardPengaduan";

const HopeCare = () => {
  return (
    <>
      <HeroSection
        title="Hope & Care"
        description="Berisi tentang layanan pengaduan bagi orang tua dan siapapun yang ingin melaporkan dan berkonsultasi tentang kasus dan konflik yang di temui dalam proses tumbuh kembang anak serta dalam proses belajar anak."
        imageSrc="/images/ilustrasi/hope&care.png"
        imageAlt="Dinas pendidikan"
      />
      <CardPengaduan />
    </>
  );
};

export default HopeCare;
