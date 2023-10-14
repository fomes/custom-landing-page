import { ReactNode } from "react";

interface OpeningItemProps {
  dayStart: string;
  dayEnd: string;
  hourStart: string;
  hourEnd: string;
}

export function OpeningItem({
  dayStart,
  dayEnd,
  hourStart,
  hourEnd,
}: OpeningItemProps) {
  return (
    <div className="flex-1">
      <div className="flex justify-between items-center border-b pb-[10px]">
        <div>
          {dayStart} - {dayEnd}
        </div>
        <div className="text-accent-default font-medium">
          {hourStart} {hourStart && "AM -"} {hourEnd} {hourStart && "PM"}
        </div>
      </div>
    </div>
  );
}
