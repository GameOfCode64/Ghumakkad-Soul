import { client } from "@/sanity/lib/client";

async function gethimachalTreks(start = 1, limit = 20) {
  const query = `*[_type == "trekCard"] | order(_createdAt desc) [${start}...${limit}] {
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

export default gethimachalTreks;
