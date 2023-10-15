import Image from "next/image";
import { ReactNode } from "react";
import logo from "@/assets/img/header/logo.svg";
import { ContactItem } from "../ContactItem";
import { FooterSocialIcon } from "../FooterSocialIcon";
import { LinkItem } from "../LinkItem";
import { OpeningItem } from "../OpeningItem";

interface FooterProps {
  children?: ReactNode;
}

export function Footer({ children }: FooterProps) {
  return (
    <footer className="footer pt-12 xl:pt-[150px]">
      <div className="container mx-auto pb-12 xl:pb-[100px]">
        <div className="flex flex-col xl:flex-row gap-x-5 gap-y-10">
          <div className="footer__item flex-1">
            <a href="">
              <Image src={logo} alt="" className="mb-[30px]" />
            </a>

            <p className="mb-[20px] text-justify xl:px-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae culpa sequi minus.
            </p>

            <div className="flex flex-col gap-y-3 mb-10" id="contact">
              <ContactItem
                icon="ri-map-pin-fill"
                text="123 Arling, Miola, NY"
              />

              <ContactItem icon="ri-mail-fill" text="insove@mail.com" />

              <ContactItem icon="ri-phone-fill" text="(+123) 456 789" />
            </div>

            <div className="flex gap-[14px] text-[30px]">
              <FooterSocialIcon icon="ri-facebook-circle-fill" />
              <FooterSocialIcon icon="ri-instagram-line" />
              <FooterSocialIcon icon="ri-twitter-fill" />
              <FooterSocialIcon icon="ri-linkedin-fill" />
            </div>
          </div>

          <div className="footer__item flex-1">
            <h4 className="h4 mb-5">Quick Links</h4>
            <div className="flex gap-x-5">
              <ul className="flex-1 flex flex-col gap-y-5">
                <LinkItem name="Home" />
                <LinkItem name="Doctors" />
                <LinkItem name="Departament" />
                <LinkItem name="Services" />
                <LinkItem name="Blog" />
              </ul>

              <ul className="flex-1 flex flex-col gap-y-5">
                <LinkItem name="Our Pricing" />
                <LinkItem name="Contact" />
                <LinkItem name="Carreers" />
                <LinkItem name="Faqs" />
                <LinkItem name="Privacy Policy" />
              </ul>
            </div>
          </div>

          <div className="footer__item flex-1">
            <h4 className="h4 mb-5">Opening Hours</h4>

            <div className="flex flex-col gap-5">
              <OpeningItem
                dayStart="Monday"
                dayEnd="Thursday"
                hourStart="8:00"
                hourEnd="6:00"
              />

              <OpeningItem
                dayStart="Friday"
                dayEnd="Saturday"
                hourStart="10:00"
                hourEnd="5:00"
              />

              <OpeningItem
                dayStart="Sunday"
                dayEnd=""
                hourStart=""
                hourEnd="Emergency Only"
              />

              <OpeningItem
                dayStart="Personal"
                dayEnd=""
                hourStart="8:00"
                hourEnd="9:00"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="py-[30px] border-t">
        <div className="container mx-auto text-center">
          <div className="font-light text-base">
            &copy; 2023 Insove - All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
