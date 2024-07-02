import { client } from "@/sanity/lib/client";

async function getfullTrek(slug: string) {
  const query = `*[_type == "trekCard"&& slug.current== "${slug}" ][0]{
  _id,
  trekName,
   "backgroundImageUrl": backgroundImage.asset->url,
  duration,
  prize,
  trekAltitude,
  location,
  distance,
  bestTime,
  trekDescription,
  imageGallery,
 faqSection[] {
    _key,
    question,
    answer
  },
  rating,
}`;

  const data = await client.fetch(query);
  return data;
}

export default getfullTrek;
