import { ReactNode } from "react";
import { Arrow } from "../Arrow";

interface SlideArrowProps {
  children?: ReactNode;
  loaded: boolean;
  instanceRef: any;
  currentSlide: number;
}

export function SlideArrow({
  loaded,
  instanceRef,
  currentSlide,
}: SlideArrowProps) {
  return (
    <>
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
    </>
  );
}
