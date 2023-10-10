import PageHeader from "@/app/components/global-components/page-header";
import SingleArticle from "@/app/components/global-components/single-article";
import { client } from "@/lib/contentful/client";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

// export const getStaticPaths = async () => {
//   const res = await client.getEntries({ content_type: "aktualnosci" });

//   const paths = res.items.map((item) => {
//     return { params: { slug: item.fields.slug ? item.fields.slug : "" } };
//   });

//   return {
//     paths,
//     fallback: true,
//   };
// };

export async function generateStaticParams() {
  // const posts = await fetch('https://.../posts').then((res) => res.json())

  const res = await client.getEntries({ content_type: "aktualnosci" });

  return res.items.map((post) => ({
    slug: post.slug,
  }));
}

async function getContentfulNewsPosts(slug) {
  const resNewsPosts = await client.getEntries(
    { content_type: "aktualnosci", "fields.slug": slug },
    {
      next: {
        revalidate: 30,
      },
    }
  );

  const newsPost = resNewsPosts.items[0];
  return newsPost;
}

export default async function NewsPost({ params }) {
  const slug = params.slug;

  const newsPost = await getContentfulNewsPosts(slug);

  return (
    <div>
      <PageHeader>Aktualności</PageHeader>
      <SingleArticle
        title={newsPost.fields.tytul}
        lead={newsPost.fields.lead}
        content={documentToReactComponents(newsPost.fields.tresc)}
        img={newsPost.fields.obraz ? newsPost.fields.obraz : ""}
      ></SingleArticle>
    </div>
  );
}
