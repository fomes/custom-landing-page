import Image from "next/image";
import { ReactNode } from "react";
import doctor1 from "@/assets/img/team/doctor-1.png";
import { SocialIcon } from "../SocialIcon";

interface DoubleSlideItemProps {
  children?: ReactNode;
}

export function DoubleSlideItem({ children }: DoubleSlideItemProps) {
  return (
    <div className="keen-slider__slide">
      <div className="flex flex-col md:flex-row gap-9">
        <div className="flex-1 flex flex-col xl:flex-row">
          <div className="flex flex-col xl:flex-row items-center gap-[30px]">
            <div className="flex-1">
              <Image src={doctor1} alt="Doctor" />
            </div>

            <div className="flex-1 flex flex-col">
              <h4 className="h4 mb-[18px]">Dr. Leslie Taylor</h4>
              <div className="font-medium uppercase tracking-[2.24px] text-[#9ab4b7] mb-[20px] ">
                Pedatrician
              </div>
              <p className="font-light mb-[26px] max-w-[320px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
                tenetur totam reiciendis possimus accusantium ab, maxime
                quibusdam! Perferendis dolores recusandae quia commodi possimus
                aperiam, optio, distinctio eius nam aut sequi?
              </p>
              <div className="flex items-center text-[30px] gap-x-5 text-accent-tertiary">
                <SocialIcon className="ri-youtube-fill" />
                <SocialIcon className="ri-facebook-circle-fill" />
                <SocialIcon className="ri-instagram-fill" />
                <SocialIcon className="ri-pinterest-fill" />
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1 flex flex-col xl:flex-row">
          <div className="flex flex-col xl:flex-row items-center gap-[30px]">
            <div className="flex-1">
              <Image src={doctor1} alt="Doctor" />
            </div>

            <div className="flex-1 flex flex-col">
              <h4 className="h4 mb-[18px]">Dr. Leslie Taylor</h4>
              <div className="font-medium uppercase tracking-[2.24px] text-[#9ab4b7] mb-[20px] ">
                Pedatrician
              </div>
              <p className="font-light mb-[26px] max-w-[320px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
                tenetur totam reiciendis possimus accusantium ab, maxime
                quibusdam! Perferendis dolores recusandae quia commodi possimus
                aperiam, optio, distinctio eius nam aut sequi?
              </p>
              <div className="flex items-center text-[30px] gap-x-5 text-accent-tertiary">
                <SocialIcon className="ri-youtube-fill" />
                <SocialIcon className="ri-facebook-circle-fill" />
                <SocialIcon className="ri-instagram-fill" />
                <SocialIcon className="ri-pinterest-fill" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
