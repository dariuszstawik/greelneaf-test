import { client } from "@/lib/contentful/client";
import SectionTitle from "../../global-components/section-title";
import NewsCard from "../../global-components/news-card";

async function getContentfulNewsPosts() {
  const resNewsPosts = await client.getEntries(
    { content_type: "aktualnosci" },
    {
      next: {
        revalidate: 30,
      },
    }
  );

  const newsPosts = resNewsPosts.items;

  return newsPosts;
}

export default async function NewsSectionHome() {
  const newsPosts = await getContentfulNewsPosts();

  const newsList = (newsAmount) => {
    return (
      newsPosts &&
      newsPosts.slice(0, newsAmount).map((item, i) => {
        return (
          <li key={i} className="mx-auto">
            <NewsCard
              title={item.fields.tytul}
              lead={item.fields.lead}
              slug={item.fields.slug}
              img={item.fields.obraz ? item.fields.obraz : ""}
            />{" "}
          </li>
        );
      })
    );
  };

  return (
    <section className="container mx-auto">
      <div className="min-w-96 max-w-[800px] mx-auto mb-6 flex flex-col items-center">
        <SectionTitle>Aktualności</SectionTitle>
      </div>

      <ul className="grid grid-cols-1 gap-16 xl:grid-cols-3 mx-auto px-10">
        {newsList(3)}
      </ul>
    </section>
  );
}
