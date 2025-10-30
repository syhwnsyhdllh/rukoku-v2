// app/aktivitas-belajarku/page.tsx
"use client";
import { useState } from "react";
import SchoolStats from "@/components/aktivitas-belajarku/SchoolStats";
import SchoolTable from "@/components/aktivitas-belajarku/SchoolTable";
import HeroSection from "@/components/HeroSection";
import { HeroActions } from "@/components/aktivitas-belajarku/HeroActions";

const AktivitasBelajarku = () => {
  const [selectedSchool, setSelectedSchool] = useState<string>("all");

  const handleSchoolChange = (school: string) => {
    setSelectedSchool(school);
    console.log("Filter data by school:", school);
    // TODO: Implementasi filter logic
    // Bisa trigger refetch data atau filter data yang sudah ada
  };

  return (
    <div className="min-h-screen">
      <HeroSection
        title="Aktivitas Belajarku"
        description="Berisi kumpulan berbagai kegiatan belajar yang dilakukan oleh siswa, baik di sekolah maupun di rumah, yang mencerminkan semangat, kreativitas, dan proses pembelajaran mereka sehari-hari."
        imageSrc="/images/ilustrasi/aktivitasSekolahku.png"
        imageAlt="Aktivitas Belajar"
        actions={<HeroActions onSchoolChange={handleSchoolChange} />}
      />

      {/* Pass selectedSchool ke components yang membutuhkan filter */}
      <SchoolStats />
      <SchoolTable />
    </div>
  );
};

export default AktivitasBelajarku;
