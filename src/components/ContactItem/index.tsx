import { twMerge } from "tailwind-merge";

interface ContactItemProps {
  icon: string;
  text: string;
}

export function ContactItem({ icon, text }: ContactItemProps) {
  return (
    <div className="flex items-center gap-x-[6px]">
      <i className={twMerge(icon, "text-[24px] text-accent-default")}></i>
      <div>{text}</div>
    </div>
  );
}
