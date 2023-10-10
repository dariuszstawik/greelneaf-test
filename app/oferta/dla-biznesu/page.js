"use client";
import Button from "@/app/components/global-components/button";
import ListItem from "@/app/components/global-components/list-item";
import PageHeader from "@/app/components/global-components/page-header";
import SectionTitle from "@/app/components/global-components/section-title";
import Link from "next/link";
import { Fade, Slide } from "react-awesome-reveal";

export default function OfertaDlaBiznesu() {
  return (
    <>
      <PageHeader>Dla biznesu</PageHeader>

      <div className={`w-full py-16 flex flex-col lg:flex-row`}>
        <Slide direction="left" delay={600} triggerOnce>
          <div className="relative w-[700px] shrink-0 rounded-md after:content-[''] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-secondaryGreen after:opacity-20">
            <img src="/hero-img2.jpg" alt="" className="rounded-md" />
          </div>
        </Slide>

        <div className="ml-16 mr-16 lg:ml-16 lg:mr-32 flex flex-col gap-2 text-lg">
          <SectionTitle isAlignedLeft>Rozwiązania dla biznesu</SectionTitle>
          <p>
            W Green Leaf Power specjalizujemy się w budowie i obsłudze
            fotowoltaicznych źródeł wytwórczych. Zapewniamy obsługę całego
            procesu inwestycyjnego. Dostarczamy kompleksowe rozwiązania z
            zakresu fotowoltaiki w połączeniu z magazynowaniem energii.
            Zapewniamy szybką i sprawną obsługę serwisową. W zakresie rozwiązań
            magazynowania energii współpracujemy z polskim producentem rozwiązań
            bateryjnych NRG Projekt.
          </p>
        </div>
      </div>

      <section>
        <div className={`w-full pb-16 flex flex-col lg:flex-row-reverse`}>
          <Slide direction="right" triggerOnce>
            <div className="relative w-[560px] rounded-md after:content-[''] after:absolute after-rounded-md after:top-0 after:left-0 after:w-full after:h-full after:bg-secondaryGreen after:opacity-30">
              <img
                src="/instalacja-biznes2.jpg"
                alt=""
                className="rounded-md"
              />
            </div>
          </Slide>

          <div className="ml-8 mr-16 lg:ml-8 lg:mr-28 flex flex-col gap-2 text-lg">
            <Fade triggerOnce>
              <SectionTitle isAlignedLeft>Oferta</SectionTitle>
            </Fade>
            <Fade triggerOnce>
              <p> Nasz oferta dla biznesu oraz gospodarstw rolnych obejmuje:</p>
            </Fade>
            <Fade cascade triggerOnce>
              <ul className="mb-4">
                <ListItem>
                  Audyt, projekt, budowa oraz serwis Instalacji o mocy do 50
                  kWp,
                </ListItem>
                <ListItem>
                  Audyt, projekt, budowa oraz serwis Instalacji o mocy powyżej
                  50 kWp,
                </ListItem>
                <ListItem>
                  Obsługa procesu pozyskania warunków przyłączenia instalacji do
                  sieci OSD,
                </ListItem>
                <ListItem>
                  Dobór, projekt oraz instalacja rozwiązań magazynowania
                  energii,
                </ListItem>
                <ListItem>
                  Dostawa oraz montaż ładowarek do samochodów,
                </ListItem>
                <ListItem>Serwis instalacji PV w tym:</ListItem>
                <ListItem isNested>
                  czas reakcji na zgłoszenie awarii 24h,
                </ListItem>
                <ListItem isNested>czas usunięcia awarii 72h,</ListItem>
                <ListItem isNested isLast>
                  coroczne przeglądy instalacji.
                </ListItem>
              </ul>
            </Fade>
          </div>
        </div>
      </section>
      <div className={`w-full py-16 flex flex-col lg:flex-row`}>
        <Slide direction="left" delay={600} triggerOnce>
          <div className="relative w-[700px] shrink-0 rounded-md after:content-[''] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-secondaryGreen after:opacity-20">
            <img src="/zespol1.jpg" alt="" className="rounded-md" />
          </div>
        </Slide>

        <div className="ml-16 mr-16 lg:ml-16 lg:mr-32 flex flex-col gap-2 text-lg">
          <SectionTitle isAlignedLeft>Zespół godny zaufania</SectionTitle>
          <p>
            Dysponujemy własnymi ekipami montażowymi, a nasi pracownicy
            posiadają niezbędne szkolenia oraz uprawnienia. Dzięki temu
            skutecznie kontrolujemy proces montażu naszych rozwiązań, jak
            również zapewniamy sprawny serwis.
          </p>
          <Button className="mr-auto mt-6">
            <Link href="/kontakt">Skontaktuj się z nami</Link>
          </Button>
        </div>
      </div>
    </>
  );
}
