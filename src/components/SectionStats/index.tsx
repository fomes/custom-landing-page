import { ReactNode } from "react";
import { StatsItem } from "../StatsItem";

interface SectionStatsProps {
  children?: ReactNode;
}

export function SectionStats({ children }: SectionStatsProps) {
  return (
    <>
      <section className="stats mt-12">
        <div className="container mx-auto">
          <div className="flex flex-col xl:flex-row gap-y-12 justify-between">
            <StatsItem text="+5120" subText="Happy patients" borderRight />
            <StatsItem text="+26" subText="Total Branches" borderRight />
            <StatsItem text="+55" subText="Senior Doctor" borderRight />
            <StatsItem text="+10" subText="Years of Experience" />
          </div>
        </div>
      </section>
    </>
  );
}
