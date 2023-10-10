import ListItem from "../components/global-components/list-item";
import PageHeader from "../components/global-components/page-header";
import SectionTitle from "../components/global-components/section-title";

export default function Partnerzy() {
  return (
    <>
      <PageHeader>Partnerzy</PageHeader>
      <section className=" mx-auto px-8 mb-16 pt-10">
        <SectionTitle>Współpraca</SectionTitle>
        <div className="max-w-6xl mx-auto flex flex-col justify-center items-center lg:flex-row gap-6 mt-20 mb-10">
          <div className="w-1/2">
            <h4>MP Solar Group</h4>
            <ul>
              wyłączny przedstawiciel na Polskę produktów:
              <ListItem className="border-b-0 pb-1 px-0">
                Growatt: inwertery, magazyny energii
              </ListItem>
              <ListItem className="border-b-0 pb-1 px-0">
                Atess: inwertery, ładowarki do samochodów
              </ListItem>
              <ListItem className="border-b-0 pb-1 px-0">
                Hopergy: konstrukcje
              </ListItem>
            </ul>
          </div>
          <div className="w-1/2 flex justify-center">
            <a href="https://www.mpsolar.pl/" target="_blank">
              <img src="MP-Solar_logo.png" alt="" className="w-[360px]" />
            </a>
          </div>
        </div>
        <hr className="w-screen" />
        <div className="max-w-6xl mx-auto flex flex-col justify-center items-center lg:flex-row gap-6 mt-20 mb-10">
          <div className="w-1/2">
            <h4>RNG Project</h4>
            <p>partner w zakresie rozwiązań przemysłowych magazynów energii</p>
          </div>
          <div className="w-1/2 flex justify-center">
            <a href="https://nrgproject.pl/" target="_blank">
              <img src="NRG_logo.png" alt="" className="w-[360px]" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
