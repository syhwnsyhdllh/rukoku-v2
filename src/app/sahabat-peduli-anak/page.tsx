"use client";

import HeroSection from "@/components/HeroSection";
import SahabatAnak from "@/components/sahabat-peduli-anak/SahabatAnak";

const SahabatPeduliAnak = () => {
  return (
    <>
      <HeroSection
        title="Sahabat Peduli Anak"
        description="Sahabat Peduli Anak adalah komunitas para ahli yang berbagi waktu dan pengetahuan untuk membantu orang tua dan guru menciptakan pembelajaran yang efektif dan menyenangkan bagi anak."
        imageSrc="/images/ilustrasi/ahli.png"
        imageAlt="Dinas pendidikan"
      />
      <SahabatAnak />
    </>
  );
};
export default SahabatPeduliAnak;
