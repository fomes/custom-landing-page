import { ReactNode } from "react";
import { GridItem } from "../GridItem";
import icon1 from "@/assets/icons/services/icon-1.svg";
import icon2 from "@/assets/icons/services/icon-2.svg";
import icon3 from "@/assets/icons/services/icon-3.svg";
import icon4 from "@/assets/icons/services/icon-4.svg";

export function SectionServices() {
  return (
    <section className="services mt-12">
      <div className="bg-services bg-cover bg-no-repeat max-w-[1466px] mx-4 xl:mx-auto rounded-[20px] xl:pt-[70px] px-6 xl:px-0 relative h-[368px] flex items-center xl:items-start -z-10">
        <div className="container mx-auto">
          <div className="services__top flex items-center flex-col xl:flex-row xl:mb-[60px]">
            <h2 className="h2 text-white flex-1 mb-4 xl:mb-0 text-center xl:text-left max-w-2xl xl:max-w-none">
              Our best services for you solution
            </h2>
            <p className="mt-2 text-white flex-1 text-center xl:text-left max-w-2xl xl:max-w-none">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus suscipit id eum praesentium assumenda recusandae.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto mt-8 xl:-mt-[144px]">
        <div className="grid xl:grid-cols-4 gap-5 px-8 xl:px-0">
          <GridItem
            icon={icon1}
            title="General Practitioners"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Error tempora iusto ipsam voluptate expedita neque, architecto a velit dolores officia voluptas nobis praesentium consequuntur dolorem porro, necessitatibus eum nihil explicabo."
          />
          <GridItem
            icon={icon2}
            title="Pregnancy Support"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Error tempora iusto ipsam voluptate expedita neque, architecto a velit dolores officia voluptas nobis praesentium consequuntur dolorem porro, necessitatibus eum nihil explicabo."
          />
          <GridItem
            icon={icon3}
            title="Nutritional Support"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Error tempora iusto ipsam voluptate expedita neque, architecto a velit dolores officia voluptas nobis praesentium consequuntur dolorem porro, necessitatibus eum nihil explicabo."
          />
          <GridItem
            icon={icon4}
            title="Pharmaceutical Care"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Error tempora iusto ipsam voluptate expedita neque, architecto a velit dolores officia voluptas nobis praesentium consequuntur dolorem porro, necessitatibus eum nihil explicabo."
          />
        </div>
      </div>
    </section>
  );
}
