import RealizationCard from "../realization-card";
import SectionTitle from "../section-title";

export default function Realizations() {
  return (
    <section className="container mx-auto pb-28">
      <div className="min-w-96 max-w-[800px] mx-auto mb-6 flex flex-col items-center">
        <SectionTitle>Przykładowe realizacje</SectionTitle>
      </div>

      <ul className="grid grid-cols-1 gap-16 xl:grid-cols-3 mx-auto px-10">
        <li>
          <RealizationCard />
        </li>
        <li>
          <RealizationCard />
        </li>
        <li>
          <RealizationCard />
        </li>
      </ul>
    </section>
  );
}
