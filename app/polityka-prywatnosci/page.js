import { client } from "@/lib/contentful/client";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import PageHeader from "../components/global-components/page-header";

async function getContentfulPrivacyPolicy() {
  const resPrivacyPolicy = await client.getEntries(
    { content_type: "politykaPrywatnosci" },
    {
      next: {
        revalidate: 300,
      },
    }
  );

  const privacyPolicy = resPrivacyPolicy.items;

  return privacyPolicy[0];
}

export default async function PolitykaPrywatnosci() {
  const privacyPolicy = await getContentfulPrivacyPolicy();
  return (
    <>
      <PageHeader>Polityka prywatności</PageHeader>
      <section className="max-w-3xl mx-auto px-8 mb-16">
        <h2>{privacyPolicy.fields.tytul}</h2>
        <div className="text-base leading-relaxed my-4">
          {documentToReactComponents(privacyPolicy.fields.tresc)}
        </div>
      </section>
    </>
  );
}
