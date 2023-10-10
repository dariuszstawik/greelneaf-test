import SectionTitle from "../section-title";

export default function Logos() {
  return (
    <section>
      <SectionTitle>Współpraca</SectionTitle>
      <div className="flex flex-wrap justify-center -mx-4 my-16">
        <div className="w-1/2 md:w-1/3 lg:w-1/5 px-4 mb-8 lg:mb-0">
          <div className="flex items-center h-32 md:h-36 px-4 md:px-8 rounded-md border">
            <img className="mx-auto" src="MP-Solar_logo.png" alt="" />
          </div>
        </div>
        <div className="w-1/2 md:w-1/3 lg:w-1/5 px-4 mb-8 lg:mb-0">
          <div className="flex items-center h-32 md:h-36 px-4 md:px-8 rounded-md border">
            <img className="mx-auto" src="NRG_logo.png" alt="" />
          </div>
        </div>
        <div className="w-1/2 md:w-1/3 lg:w-1/5 px-4 mb-8 lg:mb-0">
          <div className="flex items-center h-32 md:h-36 px-4 md:px-8 rounded-md border">
            <img className="mx-auto" src="Growatt-logo.png" alt="" />
          </div>
        </div>
        <div className="w-1/2 md:w-1/3 lg:w-1/5 px-4 mb-8 lg:mb-0">
          <div className="flex items-center h-32 md:h-36 px-4 md:px-8 rounded-md border">
            <img className="mx-auto" src="Hopergy_logo.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

{
  /* <div className="flex items-center h-32 md:h-36 px-4 md:px-8 rounded-md bg-coolGray-50 shadow-md">
<img className="mx-auto" src="NRG_logo.png" alt="" />
</div> */
}
