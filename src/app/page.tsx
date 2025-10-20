import Hero from "@/components/sections/Hero";
import InfoTerkini from "@/components/sections/InfoTerkini";
import OrangTuaPeduli from "@/components/sections/OrangTuaPeduli";
import RukokuSection from "@/components/sections/Rukoku";
import Sambutan from "@/components/sections/Sambutan";
import StatistikSection from "@/components/sections/StatistikSection";
import TimEfektifSection from "@/components/sections/TimEfektif";
import TimPelaksana from "@/components/sections/TimPelaksana";
import VisiMisi from "@/components/sections/VisiMisi";

export default function Home() {
  return (
    <>
      <Hero />
      <VisiMisi />
      <Sambutan />
      <RukokuSection />
      <TimEfektifSection />
      <OrangTuaPeduli />
      <TimPelaksana />
      <StatistikSection />
      <InfoTerkini />
    </>
  );
}
