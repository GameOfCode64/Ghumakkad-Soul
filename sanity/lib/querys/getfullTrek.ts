import { client } from "@/sanity/lib/client";

async function getFullTrek(slug: string) {
  const query = `*[_type == "trekCard" && slug.current == $slug][0]{
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
    "comments": *[_type == "comment" && trekCard._ref == ^._id] | order(_createdAt) {
      _createdAt,
      _id,
      message,
      fullName
    }
  }`;

  const params = { slug };
  const data = await client.fetch(query, params);
  return data;
}

export default getFullTrek;
