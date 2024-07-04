import { client } from "@/sanity/lib/client";

async function getTrek(start = 0, limit = 10) {
  const query = `
*[_type == "trekCard"] | order(_createdAt desc) [${start}...${limit}] {
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

export default getTrek;
