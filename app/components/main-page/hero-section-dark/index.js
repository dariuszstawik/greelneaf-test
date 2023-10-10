import { client } from "@/lib/contentful/client";
import Button from "../../global-components/button";
import HeaderSlider from "../header-slider";
import Link from "next/link";

async function getContentfulHeroContent() {
  const resSlider = await client.getEntries(
    { content_type: "slider" },
    {
      next: {
        revalidate: 30,
      },
    }
  );

  const slider = resSlider.items;

  return slider;
}

export default async function HeroSectionDark() {
  const slider = await getContentfulHeroContent();

  return (
    <section className="relative px-0 pt-[112px] bg-primaryGray w-screen min-h-screen lg:h-screen flex flex-col justify-end xl:flex-row overflow-hidden">
      <div
        className="pb-10 absolute flex flex-col gap-8 justify-center bg-secondaryGreen opacity-95 top-0 left-0 z-20 h-full lg:w-[35%] mt-28 shadow-md"
        style={{ clipPath: "polygon(70% 0, 100% 25%, 100% 100%, 0 100%, 0 0)" }}
      >
        <img
          src="asset1.svg"
          className="absolute w-1/6 top-0 left-0"
          alt="asset"
        />
        <div>
          {/* <p className="text-white text-lg px-16 mb-4">Green Leaf Power</p> */}
          <h1 className="px-16 text-white">
            Green Leaf <span className="block mt-4"> Power </span>
          </h1>
        </div>
        <div className="w-28 h-1 ml-16 rounded-sm bg-primaryGreen" />
        <p className="mx-16 text-lg text-white text-left ">
          {/* {horsesForSaleHeader.fields.headerContent} */}
          Instalacje fotowoltaiczne, magazyny energii, systemy smart home, a
          także serwisy fotowoltaiki dla klientów biznesowych oraz
          indywidualnych.
        </p>
        <Button className="ml-16 mr-auto mt-2">
          <Link href="/oferta">Sprawdź naszą ofertę</Link>
        </Button>
      </div>

      <div className="lg:w-full lg:h-full xl:shrink-0">
        <HeaderSlider
          images={slider[0].fields}
          className="w-full lg:w-3/5 h-screen xl:shrink-0"
        />
      </div>
    </section>
  );
}
