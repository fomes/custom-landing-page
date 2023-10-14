import { ReactNode } from "react";
import { FaqItem } from "../FaqItem";

interface SectionFaqProps {
  children?: ReactNode;
}

export function SectionFaq({ children }: SectionFaqProps) {
  return (
    <section className="faq">
      <div className="container mx-auto">
        <h2 className="faq__title h2 text-center mb-[50px]">
          We've got answers
        </h2>

        <div className="max-w-5xl mx-auto">
          <FaqItem text="Why to believe in Insove medical healthcare?" />
          <FaqItem text="Why to believe in Insove medical healthcare?" />
          <FaqItem text="Why to believe in Insove medical healthcare?" />
          <FaqItem text="Why to believe in Insove medical healthcare?" />
        </div>
      </div>
    </section>
  );
}
