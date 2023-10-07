import Image from "next/image";
import { ReactNode } from "react";
import hero from "@/assets/img/hero/img.png";

interface SectionHeroProps {
  children?: ReactNode;
}

export function SectionHero({ children }: SectionHeroProps) {
  return (
    <section className="hero bg-grey py-12 xl:pt12 xl:pb-0 overflow-hidden">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between h-full">
          <div className="hero__text xl:w-[48%] text-center xl:text-left">
            <div className="flex items-center bg-white py-[10px] px-[20px] w-max gap-x-2 mb-[26px] roundend-full mx-auto xl:mx-0">
              <i className="ri-heart-pulse-line text-2xl text-accent-default"></i>
              <div className="uppercase text-base font-medium text-[#9ab4b7] tracking-[2.24px]">
                Live your life
              </div>
            </div>

            <h1 className="h1 mb-6">We care about your health</h1>

            <p className="mb-[42px] md:max-w-xl">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus
              neque rem repellat facilis blanditiis amet possimus odio tenetur
              nesciunt commodi, animi unde laborum voluptates atque vel! Soluta,
              commodi?
            </p>

            <button className="btn btn-lg btn-accent mx-auto xl:mx-0">
              Contanct us
            </button>
          </div>

          <div className="hero__img hidden xl:flex max-w-[814px] self-end">
            <Image src={hero} alt="Doctor" priority />
          </div>
        </div>
      </div>
    </section>
  );
}
