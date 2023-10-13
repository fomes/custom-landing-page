import { ReactNode } from "react";

interface SlideDotsProps {
  children?: ReactNode;
  loaded: boolean;
  instanceRef: any;
  currentSlide: number;
}

export function SlideDots({
  loaded,
  instanceRef,
  currentSlide,
}: SlideDotsProps) {
  return (
    <>
      {loaded && instanceRef.current && (
        <div className="dots">
          {[
            ...Array(instanceRef.current.track.details.slides.length).keys(),
          ].map((idx) => {
            return (
              <button
                key={idx}
                onClick={() => {
                  instanceRef.current?.moveToIdx(idx);
                }}
                className={"dot" + (currentSlide === idx ? " active" : "")}
              ></button>
            );
          })}
        </div>
      )}
    </>
  );
}
