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
 "imageGalleryUrls": imageGallery[].asset->url,
 faqSection[] {
    _key,
    question,
    answer
  },
  rating,
  "comments":*[_type == "comment" && trekCard._ref == ^._id ]{
  _createdAt,
  _id,
  message,
  fullName
} 
}`;

  const data = await client.fetch(query);
  return data;
}

export default getfullTrek;
