import { client } from "@/sanity/lib/client";

export async function getreview() {
  const query = `
    *[_type == "review"]{
        _id,
        name,
        "imageUrl": image.asset->url,
        date,
        comment
    }
  `;
  const data = await client.fetch(query);
  return data;
}
