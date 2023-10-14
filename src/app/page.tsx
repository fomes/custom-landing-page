import { BlogSection } from "@/components/BlogSection";
import { BrandsSection } from "@/components/BrandsSection";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { SectionAppointment } from "@/components/SectionAppointment";
import { SectionDepartaments } from "@/components/SectionDepartaments";
import { SectionFaq } from "@/components/SectionFaq";
import { SectionHero } from "@/components/SectionHero";
import { SectionNews } from "@/components/SectionNews";
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
      <SectionDepartaments />
      <BlogSection />
      <BrandsSection />
      <SectionNews />
      <Footer />
    </>
  );
}
