import { client } from "@/sanity/lib/client";

async function getlocation() {
  const query = `
*[_type == "trekCard" && location == "Uttarakhand"]{
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

export default getlocation;
