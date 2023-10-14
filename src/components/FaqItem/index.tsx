"use client";

import { ReactNode, useState } from "react";
import { twMerge } from "tailwind-merge";

interface FaqItemProps {
  children?: ReactNode;
  text: string;
}

export function FaqItem({ text }: FaqItemProps) {
  const [showAnswer, setShowAnswer] = useState(false);

  const handleShowAnswer = () => {
    setShowAnswer(!showAnswer);
  };

  return (
    <div
      className={twMerge(
        "faq__item px-[30px] pt-7 pb-4 border-b cursor-pointer select-none",
        `${!showAnswer && "h-full"}`
      )}
      onClick={handleShowAnswer}
    >
      <div className="flex items-center justify-between mb-[10px]">
        <h4 className="h4">{text}</h4>

        <div className="faq__btn text-accent-default">
          <i className="ri-add-fill text-2xl"></i>
        </div>
      </div>

      <div
        className={twMerge(
          "faq__answer text-justify",
          `${showAnswer ? "h-full" : "h-0"}`,
          `${!showAnswer && "overflow-hidden"}`
        )}
      >
        <p className="font-light">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima
          corporis inventore maiores obcaecati, consequatur eum! Maxime fugiat
          repudiandae dolorem omnis sapiente sint perspiciatis ratione quidem
          aut, voluptas expedita doloremque odit.
        </p>
      </div>
    </div>
  );
}
