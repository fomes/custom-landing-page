import { Header } from "@/components/Header";
import { SectionAppointment } from "@/components/SectionAppointment";
import { SectionHero } from "@/components/SectionHero";
import { SectionServices } from "@/components/SectionServices";
import { SectionStats } from "@/components/SectionStats";
import { SectionTeam } from "@/components/SectionTeam";
import { SectionTestimonials } from "@/components/SectionTestimonials";

export default function Home() {
  return (
    <>
      <Header />
      <SectionHero />
      <SectionStats />
      <SectionServices />
      <SectionAppointment />
      <SectionTestimonials />
      <SectionTeam />
      <div className="h-[400px]"></div>
    </>
  );
}
