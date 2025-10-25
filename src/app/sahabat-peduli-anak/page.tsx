"use client";

import HeroSection from "@/components/HeroSection";
import FAQAccordion from "@/components/sahabat-peduli-anak/FAQAccordion";
import SahabatAnak from "@/components/sahabat-peduli-anak/SahabatAnak";
import TanyaAhli from "@/components/sahabat-peduli-anak/TanyaAhli";

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
      <FAQAccordion />
      <TanyaAhli />
    </>
  );
};
export default SahabatPeduliAnak;
