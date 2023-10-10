import { ReactNode } from "react";

interface SlideItemProps {
  children?: ReactNode;
  name: string;
  role: string;
  text: string;
}

export function SlideItem({ name, role, text }: SlideItemProps) {
  return (
    <div className="keen-slider__slide">
      <div className="h-full flex flex-col justify-center items-start">
        <div className="max-w-[680px] mx-auto text-center xl:text-left">
          <p
            className="font-light relative text-[22px] text-[#4c5354] leading-[190%] text-center xl:text-left before:bg-quoteLeft before:bg-contain before:bg-bottom before:inline-block before:top-0 before:w-10 before:h-10 before:bg-no-repeat after:bg-quoteRight after:bg-contain after:bg-bottom after:inline-block after:top-0 after:w-10 after:h-10 after:bg-no-repeat mb-7
      "
          >
            <span className="mx-2">{text}</span>
          </p>

          <div className="px-4 text-[26px] text-[#4c5354] font-semibold">
            {name}
          </div>

          <div className="px-4 text-[#9ab4b7] font-medium uppercase tracking-[2.24px]">
            {role}
          </div>
        </div>
      </div>
    </div>
  );
}
