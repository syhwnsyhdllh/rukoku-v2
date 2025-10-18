import Hero from "@/components/sections/Hero";
import RukokuSection from "@/components/sections/Rukoku";
import Sambutan from "@/components/sections/Sambutan";
import VisiMisi from "@/components/sections/VisiMisi";

export default function Home() {
  return (
    <>
      <Hero />
      <VisiMisi />
      <Sambutan />
      <RukokuSection />
    </>
  );
}
