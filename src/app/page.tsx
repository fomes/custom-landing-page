import { Header } from "@/components/Header";
import { SectionAppointment } from "@/components/SectionAppointment";
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
      <SectionAppointment />
      <div className="h-[4000px]"></div>
    </>
  );
}
