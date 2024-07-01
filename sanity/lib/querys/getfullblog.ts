import { client } from "@/sanity/lib/client";

async function getfullblogs(slug: string) {
  const query = `*[_type == "blog" && slug.current == "${slug}"][0]{
        _id,
        title,
        slug,
        author,
        "headings": body[style in ["h2", "h3", "h4", "h5", "h6"]],
        "authorimage": authorimage.asset->url,
        "blogbgimage": blogbgimage.asset->url,
        time,
        excerpt,
        body,
        publishedAt,
  }`;

  const data = await client.fetch(query);
  return data;
}

export default getfullblogs;
