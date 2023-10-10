"use client";
import { Fade } from "react-awesome-reveal";
import SectionTitle from "../../global-components/section-title";

export default function Features() {
  return (
    // <section className="bg-primaryGray lg:h-screen">
    <section
      className="mt-28 relative w-screen px-32 py-20 pb-28 bg-primary after:content-[''] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-secondaryGreen after:opacity-90"
      style={{
        backgroundImage: 'url("/glp_slider20.jpg")',
        backgroundPosition: "center",
      }}
    >
      <div className="relative z-20">
        <div className="mb-32">
          <SectionTitle isWhite>Dlaczego my?</SectionTitle>
        </div>
        <Fade direction="bottom" delay={600} triggerOnce>
          <div className="flex flex-wrap -mx-3 -mb-10 lg:-mb-16  z-20">
            <div className="w-full md:w-1/2 lg:w-1/3 px-3 mb-10 lg:mb-16">
              <div className="relative pt-16 pb-12 px-8 rounded-lg text-center">
                <span className="absolute top-0 inset-x-0 -mt-6 flex justify-center items-center w-16 h-16 mx-auto rounded-full bg-primaryGreen text-white">
                  1
                </span>
                <h3 className="mb-6 text-white">doświadczenie</h3>
                <p className="text-white">
                  Jesteśmy młodą firmą, ale naszą siłą są specjaliści i fachowcy
                  z przynajmniej kilkulatnim doświadczeniem w branży
                  fotowoltaicznej.
                </p>
              </div>
            </div>

            <div className="w-full md:w-1/2 lg:w-1/3 px-3 mb-10 lg:mb-16">
              <div className="relative pt-16 pb-12 px-8 rounded-lg text-center">
                <span className="absolute top-0 inset-x-0 -mt-6 flex justify-center items-center w-16 h-16 mx-auto rounded-full bg-primaryGreen text-white">
                  2
                </span>
                <h3 className="mb-6 text-white">szybkie serwisy</h3>
                <p className="text-white">
                  W przypadku jakiejkolwiek usterki, nasi serwisanci usuną ją do
                  72h od zgłoszenia.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 px-3 mb-10 lg:mb-16">
              <div className="relative pt-16 pb-12 px-8 rounded-lg text-center">
                <span className="absolute top-0 inset-x-0 -mt-6 flex justify-center items-center w-16 h-16 mx-auto rounded-full bg-primaryGreen text-white">
                  3
                </span>
                <h3 className="mb-6 text-white">zaangażowanie</h3>
                <p className="text-white">
                  Zrobimy wszystko, żebyś był/a zadowolony/a ze współpracy z
                  naszą firmą!
                </p>
              </div>
            </div>
          </div>
        </Fade>
      </div>
    </section>
  );
}
