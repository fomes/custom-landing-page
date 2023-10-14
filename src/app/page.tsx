import { Header } from "@/components/Header";
import { SectionAppointment } from "@/components/SectionAppointment";
import { SectionFaq } from "@/components/SectionFaq";
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
      <SectionFaq />
      <div className="h-[200px]"></div>
    </>
  );
}
