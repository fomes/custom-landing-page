import { Header } from "@/components/Header";
import { SectionHero } from "@/components/SectionHero";
import { SectionServices } from "@/components/SectionServices";
import { SectionStats } from "@/components/SectionStats";

export default function Home() {
  return (
    <div>
      <Header />
      <SectionHero />
      <SectionStats />
      <SectionServices />I<div className="h-[4000px]"></div>
    </div>
  );
}
