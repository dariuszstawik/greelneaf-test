"use client";
import { Slide } from "react-awesome-reveal";
import PageHeader from "../components/global-components/page-header";
import Realizations from "../components/global-components/realizations";
import SectionTitle from "../components/global-components/section-title";
import Features from "../components/o-nas-page/features";
import Testimonials from "../components/o-nas-page/testimonials";
import Button from "../components/global-components/button";
import Link from "next/link";

export default function oNas() {
  return (
    <>
      <PageHeader>O nas</PageHeader>
      <div className={`w-full py-16 flex flex-col lg:flex-row-reverse`}>
        <Slide direction="right" triggerOnce>
          <div className="relative w-[700px] shrink-0 rounded-md after:content-[''] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-secondaryGreen after:opacity-20">
            <img src="/realization12.jpg" alt="" className="rounded-md" />
          </div>
        </Slide>

        <div className="ml-16 mr-16 lg:ml-28 lg:mr-32 flex flex-col gap-2 text-lg">
          <SectionTitle isAlignedLeft>Kim jesteśmy?</SectionTitle>
          <p className="my-0">
            {" "}
            Green Leaf Power to firma, która narodziła się z pasji
            doświadczonych inwestorów i menedżerów.
          </p>
          <p className="my-0">
            Zajmujemy się <span> </span>
            <span className=" text-primaryGreen">
              montażem oraz serwisowaniem instalacji fotowoltaicznych - zarówno
              dla klientów indywidualnych, jak też biznesowych.{" "}
            </span>
          </p>
          <p className="my-0">
            Do współpracy zaprosiliśmy kompetentnych i doświadczonych
            projektantów, koordynatorów prac oraz instalatorów.
          </p>
          <Button className="mr-auto mt-6">
            <Link href="/oferta">Sprawdź ofertę</Link>
          </Button>
        </div>
      </div>
      <Features />
      {/* <Testimonials /> */}
      <div className={`w-full py-16 flex flex-col lg:flex-row`}>
        <Slide direction="left" delay={600} triggerOnce>
          <div className="relative w-[700px] shrink-0 rounded-md after:content-[''] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-secondaryGreen after:opacity-20">
            <img src="/hero-img2.jpg" alt="" className="rounded-md" />
          </div>
        </Slide>

        <div className="ml-16 mr-16 lg:ml-16 lg:mr-32 flex flex-col gap-2 text-lg">
          <SectionTitle isAlignedLeft>Możesz nam zaufać</SectionTitle>
          <p className="my-0">
            {" "}
            W Green Leaf Power stawiamy nie tylko na skuteczność, ale również
            trwałość.{" "}
            <span className="text-primaryGreen">
              Dlatego zbudowaliśmy zespół, któremu możesz zaufać na lata.{" "}
            </span>
            Nasza firma to ludzie, którzy tworzą ją od podstaw. Dbamy o naszych
            pracowników i ich rodziny, ponieważ to oni stanowią fundament
            naszego sukcesu. Oferujemy im stałe zatrudnienie i zapewniamy
            możliwości rozwoju, ponieważ wierzymy, że tylko zespół pełen wiedzy
            i zaangażowania może spełnić Twoje oczekiwania.
          </p>
          <p className="my-0">
            Wyznajemy filozofię, iż{" "}
            <span className="text-primaryGreen">
              każdy klient jest naszym partnerem i ma swój udział w sukcesie
              naszej firmy.
            </span>{" "}
            Tylko zadowolony klient jest dla nas gwarancją, że jesteśmy na
            właściwej drodze.
          </p>
          <Button className="mr-auto mt-6">
            <Link href="/oferta">Sprawdź ofertę</Link>
          </Button>
        </div>
      </div>

      {/* <NewsSectionHome /> */}
      {/* <Realizations /> */}
    </>
  );
}
