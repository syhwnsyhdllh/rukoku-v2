"use client";
import GaleriFoto from "@/components/GaleriFoto";
import HeroSection from "@/components/HeroSection";

const GaleriKegiatanSekolahku = () => {
  return (
    <div>
      <HeroSection
        title="Galeri Kegiatan Sekolahku"
        description="Galeri foto Kegiatan sekolahku berisi kumpulan foto kegiatan intrakurikuler dan ekstrakurikuler yang dilaksanakan di sekolah."
        imageSrc="/images/ilustrasi/event.png"
        imageAlt="Dinas pendidikan"
      />
      <GaleriFoto />
    </div>
  );
};

export default GaleriKegiatanSekolahku;
