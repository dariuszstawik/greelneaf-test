"use client";
import { Fade } from "react-awesome-reveal";
import SectionTitle from "../../global-components/section-title";

export default function Testimonials() {
  return (
    <section className="relative pt-28 pb-36 bg-gray-100 overflow-hidden">
      {/* <img
        className="absolute top-0 left-1/2 transform -translate-x-1/2"
        src="gradia-assets/elements/testimonials/radial3.svg"
        alt=""
      /> */}

      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* <h2 className="mb-16 max-w-3xl mx-auto font-heading font-semibold text-center text-5xl sm:text-6xl text-gray-900">
            Hear from Gradia&rsquo;s users who saved thousands on building
            websites
          </h2> */}
          <SectionTitle>Opinie klientów</SectionTitle>
          <Fade direction="up" delay={600} triggerOnce>
            <div
              className="mt-12 px-16 py-12 bg-gray-50 rounded-10"
              style={{
                clipPath: "polygon(85% 0, 100% 20%, 100% 100%, 0 100%, 0 0)",
              }}
            >
              {/* <img
              className="mb-11"
              src="gradia-assets/images/testimonials/logo.svg"
              alt=""
            /> */}
              <svg
                className="mb-4 text-primaryGreen h-10"
                viewBox="0 0 32 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.2418 12.749C9.45369 12.522 8.66554 12.4069 7.89887 12.4069C6.71496 12.4069 5.72709 12.6775 4.96109 13.0088C5.69957 10.3053 7.47358 5.6405 11.0075 5.11517C11.3348 5.0665 11.603 4.82986 11.6923 4.51131L12.4646 1.74875C12.5298 1.51512 12.4912 1.26505 12.3579 1.06231C12.2246 0.859563 12.0105 0.724288 11.7705 0.691393C11.5097 0.655812 11.2438 0.637686 10.9803 0.637686C6.73846 0.637686 2.53756 5.06516 0.764895 11.4046C-0.275679 15.1238 -0.580802 20.7154 1.98237 24.2349C3.41668 26.2043 5.50924 27.2559 8.20198 27.361C8.21305 27.3613 8.2238 27.3616 8.23487 27.3616C11.5573 27.3616 14.5035 25.1241 15.3997 21.9208C15.9351 20.0058 15.6931 17.9975 14.7176 16.2644C13.7526 14.5508 12.1632 13.3018 10.2418 12.749Z"
                  fill="currentColor"
                ></path>
                <path
                  d="M31.0396 16.2648C30.0746 14.5508 28.4852 13.3018 26.5638 12.749C25.7757 12.522 24.9875 12.4069 24.2212 12.4069C23.0373 12.4069 22.0491 12.6775 21.2831 13.0088C22.0215 10.3053 23.7955 5.6405 27.3298 5.11517C27.6571 5.0665 27.9249 4.82986 28.0146 4.51131L28.7869 1.74875C28.8521 1.51512 28.8135 1.26505 28.6802 1.06231C28.5473 0.859563 28.3331 0.724288 28.0928 0.691393C27.8323 0.655812 27.5664 0.637686 27.3026 0.637686C23.0608 0.637686 18.8599 5.06516 17.0869 11.4046C16.0466 15.1238 15.7415 20.7154 18.305 24.2356C19.739 26.2046 21.8319 27.2566 24.5243 27.3613C24.5354 27.3616 24.5461 27.362 24.5575 27.362C27.8796 27.362 30.8261 25.1244 31.7224 21.9211C32.2571 20.0061 32.0147 17.9975 31.0396 16.2648Z"
                  fill="currentColor"
                ></path>
              </svg>
              <h2 className="my-9 font-heading font-medium text-2xl text-black">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                vitae et ultricies sapien mauris, urna. Arcu justo, tellus in
                tellus, sed sed venenatis velit. Nisl nam augue elit at viverra
                euismod vitae. Est praesent mattis velit morbi nec sit.
              </h2>
              <div className="flex flex-wrap items-end justify-between -m-6">
                <div className="w-auto p-6">
                  <div className="flex flex-wrap -m-1.5">
                    <div className="w-auto p-1.5">
                      {/* <img
                      src="gradia-assets/images/testimonials/avatar10.png"
                      alt=""
                    /> */}
                    </div>
                    <div className="w-auto p-1.5">
                      <h3 className="font-heading font-semibold text-gray-900 text-lg">
                        Jan Kowalski
                      </h3>
                      <p className="text-sm text-gray-600">
                        Instalacja 5 kWp, Katowice
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-auto p-6">
                  <div className="flex flex-wrap -m-2">
                    <div className="w-auto p-2">
                      <a href="#">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10 19L3 12M3 12L10 5M3 12L21 12"
                            stroke="#A1A1AA"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                      </a>
                    </div>
                    <div className="w-auto p-2">
                      <a href="#">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M14 5L21 12M21 12L14 19M21 12L3 12"
                            stroke="#18181B"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </section>
  );
}
