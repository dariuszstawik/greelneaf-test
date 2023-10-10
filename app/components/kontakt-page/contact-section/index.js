"use client";
import Iframe from "react-iframe";
import SectionTitle from "../../global-components/section-title";
import AddressIcon from "../address-icon";
import PhoneIcon from "../phone-icon";
import EmailIcon from "../email-icon";
import { Slide } from "react-awesome-reveal";

export default function ContactSection() {
  return (
    <section className="flex flex-col xl:flex-row-reverse">
      <Slide direction="right" delay={300} triggerOnce>
        <div className="w-[700px] shrink-0">
          <Iframe
            url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2550.7346238388645!2d19.08706647687809!3d50.259540501090896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4716cffa4ff40c45%3A0x5f195520043b7f96!2s11%20Listopada%2011%2C%2040-387%20Katowice!5e0!3m2!1spl!2spl!4v1694801181642!5m2!1spl!2spl"
            width="640px"
            height="420px"
            id=""
            className="border rounded-lg"
            display="block"
            position="relative"
          />
        </div>
      </Slide>

      <div className="ml-16 mr-16">
        <SectionTitle isAlignedLeft>Kontakt</SectionTitle>
        <div className="flex flex-col gap-4 my-6">
          <p className="mb-2">
            Biuro firmy znajduje się w Katowicach. Zapraszamy do kontaktu!
          </p>
          <p className="my-0">
            <AddressIcon />
            ul. 11 Listopada 11, 40-387 Katowice
          </p>
          <p className="my-0">
            <PhoneIcon />
            536 108 864
          </p>
          <p className="my-0">
            <EmailIcon />
            biuro@greenleafpower.pl
          </p>
          <div className="flex mt-2">
            <a href="https://www.facebook.com/GreenLeafPowerPL">
              <img src="/facebook.svg" className="w-8 mr-4" />
            </a>
            <span className="text-primaryGreen">
              dołącz do nas na Facebooku
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
