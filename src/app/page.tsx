import { Header } from "@/components/Header";
import { SectionHero } from "@/components/SectionHero";
import { SectionStats } from "@/components/SectionStats";

export default function Home() {
  return (
    <div>
      <Header />
      <SectionHero />
      <SectionStats />
    </div>
  );
}
