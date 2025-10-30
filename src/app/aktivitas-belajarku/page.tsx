"use client";
import SchoolStats from "@/components/aktivitas-belajarku/SchoolStats";
import HeroSection from "@/components/HeroSection";

const AktivitasBelajarku = () => {
  return (
    <div className="min-h-screen">
      <HeroSection
        title="Aktivitas Belajarku"
        description="Berisi kumpulan kegiatan belajar siswa di sekolah dan di rumah.."
        imageSrc="/images/ilustrasi/aktivitasSekolahku.png"
        imageAlt="Kabar dari RUKOKU"
      />
      <SchoolStats />
    </div>
  );
};

export default AktivitasBelajarku;
