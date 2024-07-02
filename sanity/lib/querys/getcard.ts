import { client } from "@/sanity/lib/client";

async function getTrekCardData() {
  const query = `
    *[_type == "trekCard"]{
      _id,
      slug,
      trekName,
      "backgroundImageUrl": backgroundImage.asset->url,
      duration,
      location,
      distance,
      bestTime,
      rating
    }
  `;
  const data = await client.fetch(query);
  return data;
}

export default getTrekCardData;
