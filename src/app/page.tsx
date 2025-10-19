import Hero from "@/components/sections/Hero";
import OrangTuaPeduli from "@/components/sections/OrangTuaPeduli";
import RukokuSection from "@/components/sections/Rukoku";
import Sambutan from "@/components/sections/Sambutan";
import TimEfektifSection from "@/components/sections/TimEfektif";
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
    </>
  );
}
