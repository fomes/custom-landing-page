import Image from "next/image";
import { ReactNode } from "react";
import brands1 from "@/assets/img/brands/brand-1.svg";
import brands2 from "@/assets/img/brands/brand-2.svg";
import brands3 from "@/assets/img/brands/brand-3.svg";
import brands4 from "@/assets/img/brands/brand-4.svg";

interface BrandsSectionProps {
  children?: ReactNode;
}

export function BrandsSection({ children }: BrandsSectionProps) {
  return (
    <section className="brands section">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-y-12 xl:gap-y-0 justify-between items-center">
          <Image src={brands1} alt="" className="brands__logo" />
          <Image src={brands2} alt="" className="brands__logo" />
          <Image src={brands3} alt="" className="brands__logo" />
          <Image src={brands4} alt="" className="brands__logo" />
        </div>
      </div>
    </section>
  );
}
