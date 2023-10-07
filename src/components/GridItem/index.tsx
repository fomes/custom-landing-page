import Image from "next/image";
import { ReactNode } from "react";

interface GridItemProps {
  children?: ReactNode;
  icon: string;
  title: string;
  text: string;
}

export function GridItem({ icon, title, text }: GridItemProps) {
  return (
    <div className="services__item bg-white p-[30px] rounded-[10px] shadow-custom2 min-h-[288px] flex flex-col items-center text-center">
      <div className="mb-[15px]">
        <Image src={icon} alt="Icon" />
      </div>

      <h3 className="h3 mb-[10px]">{title}</h3>

      <p className="font-light leading-normal max-w-[300px]">{text}</p>
    </div>
  );
}
