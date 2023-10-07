import { AppointmentSection } from "@/components/AppointmentSection";
import { Header } from "@/components/Header";
import { SectionHero } from "@/components/SectionHero";
import { SectionServices } from "@/components/SectionServices";
import { SectionStats } from "@/components/SectionStats";

export default function Home() {
  return (
    <>
      <Header />
      <SectionHero />
      <SectionStats />
      <SectionServices />
      <AppointmentSection />
      <div className="h-[4000px]"></div>
    </>
  );
}
