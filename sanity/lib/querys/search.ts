import { client } from "@/sanity/lib/client";

async function getSearchTrek(slug: string) {
  const Slug = slug.toLocaleLowerCase();
  const query = `*[_type == "trekCard"&& slug.current== "${Slug}" ][0]{
     _id,
      slug,
      trekName,
      "backgroundImageUrl": backgroundImage.asset->url,
      duration,
      location,
      distance,
      bestTime,
      rating
}`;

  const data = await client.fetch(query);
  return data;
}

export default getSearchTrek;
