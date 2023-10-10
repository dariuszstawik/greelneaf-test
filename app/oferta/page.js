"use client";
import { Fade } from "react-awesome-reveal";
import PageHeader from "../components/global-components/page-header";
import SectionTitle from "../components/global-components/section-title";
import Button from "../components/global-components/button";
import Link from "next/link";

export default function Oferta() {
  return (
    <>
      <PageHeader>Oferta</PageHeader>
      <section className=" pb-32">
        <div>
          <div className="container mx-auto px-4">
            <div className="mb-16 flex flex-col justify-center items-center">
              <Fade direction="bottom" triggerOnce>
                <SectionTitle>Nasza oferta</SectionTitle>
              </Fade>
            </div>

            <Fade direction="bottom" delay={600} triggerOnce>
              <div className="mt-20 flex flex-wrap rounded-lg overflow-hidden">
                <div className="w-full lg:w-1/2 rounded-lg flex object-cover">
                  <img
                    className="object-cover"
                    src="/mag_energii_sm1.jpg"
                    alt=""
                  />
                </div>
                <div
                  className="relative flex flex-col items-start w-full lg:w-1/2 py-6 lg:pt-10 px-10 rounded-r bg-secondaryGreen shadow-md"
                  style={{
                    clipPath:
                      "polygon(85% 0, 100% 20%, 100% 100%, 0 100%, 0 0)",
                  }}
                >
                  <h3 className="my-4 text-white">Rozwiązania dla biznesu</h3>
                  <div className="w-10 h-1 rounded-sm bg-white mb-4" />
                  <p className="mb-4 text-lg text-white">
                    Zapewniamy obsługę całego procesu inwestycyjnego.
                    Dostarczamy kompleksowe rozwiązania z zakresu fotowoltaiki w
                    połączeniu z magazynowaniem energii.
                  </p>

                  <Button className="mb-2 mt-auto ml-auto">
                    <Link href="/oferta/dla-biznesu">Sprawdź ofertę</Link>
                  </Button>
                </div>
              </div>
            </Fade>

            <Fade direction="bottom" delay={600} triggerOnce>
              <div className="mt-20 flex flex-wrap flex-row-reverse rounded-lg overflow-hidden">
                <div className="w-full lg:w-1/2 rounded-lg flex">
                  <img
                    className="object-cover"
                    src="/glp_slider20.jpg"
                    alt=""
                  />
                </div>
                <div
                  className="relative flex flex-col items-end w-full lg:w-1/2 py-6 lg:pt-10 px-10 rounded-r bg-primaryGray shadow-md"
                  style={{
                    clipPath:
                      "polygon(20% 0%, 100% 0, 100% 100%, 0 100%, 0% 25%)",
                  }}
                >
                  <h3 className="my-4 text-secondaryGreen">
                    Rozwiązania dla domu
                  </h3>
                  <div className="w-10 h-1 rounded-sm bg-primaryGreen mb-4" />
                  <p className="mb-4 text-lg text-right">
                    Dostarczamy kompleksowe rozwiązania z zakresu fotowoltaiki,
                    magazynowania energii, ładowania samochodów elektrycznych
                    jak również z zakresu inteligentnych systemów zarządzania
                    energią
                  </p>

                  <Button className="mb-2 mt-auto ml-auto">
                    <Link href="/oferta/dla-domu">Sprawdź ofertę</Link>
                  </Button>
                </div>
              </div>
            </Fade>

            <Fade direction="bottom" delay={600} triggerOnce>
              <div className="mt-20 flex flex-wrap rounded-lg overflow-hidden">
                <div className="w-full lg:w-1/2 rounded-lg flex">
                  <img className="object-cover" src="/monter_sm.jpg" alt="" />
                </div>
                <div
                  className="relative flex flex-col items-start w-full lg:w-1/2 py-6 lg:pt-10 px-10 rounded-r bg-secondaryGreen shadow-md"
                  style={{
                    clipPath:
                      "polygon(85% 0, 100% 20%, 100% 100%, 0 100%, 0 0)",
                  }}
                >
                  <h3 className="my-4 text-white">
                    Naprawa i serwis "obcych" instalacji PV
                  </h3>
                  <div className="w-10 h-1 rounded-sm bg-white mb-4" />
                  <p className="mb-4 text-lg text-white">
                    Jeżeli Twoja instalacja PV uległa awarii, a wykonawca
                    instalacji nie jest zainteresowany jej naprawą lub nie
                    działa już na rynku, możesz zwróć się do nas.
                  </p>

                  <Button className="mb-2 mt-auto ml-auto">
                    <Link href="/oferta/uslugi-serwisowe">Sprawdź ofertę</Link>
                  </Button>
                </div>
              </div>
            </Fade>
          </div>
        </div>
      </section>
    </>
  );
}
