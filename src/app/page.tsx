import { Header } from "@/components/Header";
import { SectionAppointment } from "@/components/SectionAppointment";
import { SectionHero } from "@/components/SectionHero";
import { SectionServices } from "@/components/SectionServices";
import { SectionStats } from "@/components/SectionStats";
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
      <div className="h-[400px]"></div>
    </>
  );
}
