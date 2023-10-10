"use client";
import { Fade, Slide } from "react-awesome-reveal";
import ListItem from "../components/global-components/list-item";
import PageHeader from "../components/global-components/page-header";
import SectionTitle from "../components/global-components/section-title";
import Button from "../components/global-components/button";
import Link from "next/link";

export default function SerwisIGwarancje() {
  return (
    <>
      <PageHeader>Serwis i gwarancje</PageHeader>
      <section>
        <div className={`w-full pb-16 flex flex-col lg:flex-row-reverse`}>
          <Slide direction="right" triggerOnce>
            <div className="relative w-[700px] rounded-md after:content-[''] after:absolute after-rounded-md after:top-0 after:left-0 after:w-full after:h-full after:bg-secondaryGreen after:opacity-10">
              <img src="/instalator5.jpg" alt="" className="rounded-md" />
            </div>
          </Slide>

          <div className="ml-8 mr-16 lg:ml-8 lg:mr-28 flex flex-col gap-2 text-lg">
            <Fade triggerOnce>
              <SectionTitle isAlignedLeft>Serwis i gwarancje</SectionTitle>
            </Fade>
            <Fade triggerOnce>
              <p>
                {" "}
                Oferujemy pięcioletnią letnią gwarancje prawidłowego działania
                instalacji PV, w tym:
              </p>
            </Fade>
            <Fade cascade triggerOnce>
              <ul className="mb-4">
                <ListItem>roczny przegląd instalacji,</ListItem>
                <ListItem>czas reakcji na zgłoszenie awarii: 24h,</ListItem>
                <ListItem>czas usunięcia awarii: 72h,</ListItem>
                <ListItem>falownik zastępczy na czas jego naprawy,</ListItem>
                <ListItem isLast>możliwość przedłużenia gwarancji.</ListItem>
              </ul>
              <Button>
                <Link href="/kontakt"> Zapytaj o szczegóły</Link>
              </Button>
            </Fade>
          </div>
        </div>
      </section>
    </>
  );
}
