import Image from "next/image";
import { ReactNode } from "react";

interface GridItemProps {
  children?: ReactNode;
  icon?: string;
  title: string;
  text: string;
}

export function GridItem({ icon = "", title, text }: GridItemProps) {
  return (
    <div className="services__item bg-white p-[30px] rounded-[10px] shadow-custom2 min-h-[288px] flex flex-col items-center text-center">
      <div className="mb-[15px]">
        <Image src={icon} alt="Icon" />
      </div>

      <h5 className="text-lg font-semibold mb-4">{title}</h5>

      <p className="font-light leading-normal max-w-[300px] text-justify">{text}</p>
    </div>
  );
}
