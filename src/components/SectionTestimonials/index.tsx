"use client";

import Image from "next/image";
import React, { ReactNode, useState } from "react";
import testImg from "@/assets/img/testimonials/img.png";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { SlideItem } from "../SlideItem";
import { Arrow } from "../Arrow";

interface SectionTestimonialsProps {
  children?: ReactNode;
}

export function SectionTestimonials({ children }: SectionTestimonialsProps) {
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
    <section className="testimonial bg-testimonials bg-cover bg-right bg-no-repeat py-12 xl:min-h-[595px] xl:py-0">
      <div className="testmonial__container container mx-auto">
        <div className="flex flex-col items-center gap-x-14 xl:flex-row">
          <div className="hidden xl:flex">
            <Image src={testImg} alt="Peoples" />
          </div>

          <div className="max-w-[98%] xl:max-w-[710px]">
            <div className="h-[400px]">
              <div className="navigation-wrapper relative">
                <div ref={sliderRef} className="keen-slider">
                  <SlideItem
                    name="James Dow"
                    role="Customer"
                    text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum odit consectetur, earum tempora, quo, soluta vitae amet alias expedita maxime ex debitis optio. Corporis, dolore rerum expedita culpa maxime vel?"
                  />

                  <SlideItem
                    name="James Two"
                    role="Employee"
                    text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum odit consectetur, earum tempora, quo, soluta vitae amet alias expedita maxime ex debitis optio. Corporis, dolore rerum expedita culpa maxime vel?"
                  />

                  <SlideItem
                    name="Dow Jay"
                    role="Chief"
                    text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum odit consectetur, earum tempora, quo, soluta vitae amet alias expedita maxime ex debitis optio. Corporis, dolore rerum expedita culpa maxime vel?"
                  />
                </div>
                {loaded && instanceRef.current && (
                  <>
                    <Arrow
                      left
                      onClick={(e: any) =>
                        e.stopPropagation() || instanceRef.current?.prev()
                      }
                      disabled={currentSlide === 0}
                    />

                    <Arrow
                      onClick={(e: any) =>
                        e.stopPropagation() || instanceRef.current?.next()
                      }
                      disabled={
                        currentSlide ===
                        instanceRef.current.track.details.slides.length - 1
                      }
                    />
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
