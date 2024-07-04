import { client } from "@/sanity/lib/client";

async function getlocation1(location: string) {
  const query = `
*[_type == "trekCard" && references(*[_type == "tag" && name == "${location}"]._id)]{
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

export default getlocation1;
