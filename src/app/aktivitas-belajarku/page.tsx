"use client";
import { useState } from "react";
import SchoolStats from "@/components/aktivitas-belajarku/SchoolStats";
import SchoolTable from "@/components/aktivitas-belajarku/SchoolTable";
import HeroSection from "@/components/HeroSection";
import { HeroActions } from "@/components/aktivitas-belajarku/HeroActions";

const AktivitasBelajarku = () => {
  // ✅ State untuk menyimpan kecamatan yang dipilih
  const [selectedDistrict, setSelectedDistrict] = useState<string>("all");

  // ✅ Handler ketika dropdown kecamatan berubah
  const handleDistrictChange = (districtId: string) => {
    setSelectedDistrict(districtId);
    console.log("Filter data by district:", districtId);
  };

  return (
    <div className="min-h-screen">
      <HeroSection
        title="Aktivitas Belajarku"
        description="Berisi kumpulan berbagai kegiatan belajar yang dilakukan oleh siswa, baik di sekolah maupun di rumah, yang mencerminkan semangat, kreativitas, dan proses pembelajaran mereka sehari-hari."
        imageSrc="/images/ilustrasi/aktivitasSekolahku.png"
        imageAlt="Aktivitas Belajar"
        actions={
          <HeroActions
            selectedDistrict={selectedDistrict}
            onDistrictChange={handleDistrictChange}
          />
        }
      />

      {/* ✅ Pass selectedDistrict ke components yang membutuhkan filter */}
      <SchoolStats districtId={selectedDistrict} />
      <SchoolTable districtId={selectedDistrict} />
    </div>
  );
};

export default AktivitasBelajarku;
