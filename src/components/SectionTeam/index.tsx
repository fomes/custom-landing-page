"use client";

import { useKeenSlider } from "keen-slider/react";
import React, { ReactNode, useState } from "react";
import { SlideDots } from "../SlideDots";
import { DoubleSlideItem } from "../DoubleSlideItem";

interface SectionTeamProps {
  children?: ReactNode;
}

export function SectionTeam({ children }: SectionTeamProps) {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });

  return (
    <section className="team section" id="doctors">
      <div className="container mx-auto">
        <h2 className="team__title h2 mb-[50px] text-center xl:text-left">
          Our Team
        </h2>

        <div className="team__slider min-h-[400px]">
          <div className="navigation-wrapper relative">
            <div ref={sliderRef} className="keen-slider">
              <DoubleSlideItem />
              <DoubleSlideItem />
            </div>
          </div>
          <SlideDots
            currentSlide={currentSlide}
            instanceRef={instanceRef}
            loaded={loaded}
          />
        </div>
      </div>
    </section>
  );
}
