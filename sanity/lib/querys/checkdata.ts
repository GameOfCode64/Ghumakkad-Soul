import { client } from "@/sanity/lib/client";

export default async function checkDataLength() {
  const query = `*[_type == "trekCard"]{
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
  const data = client.fetch(query);
  return data;
}
