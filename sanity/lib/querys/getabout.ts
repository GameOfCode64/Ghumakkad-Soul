import { client } from "@/sanity/lib/client";

async function getabout() {
  const query = `*[_type == "about"][0] {
        heading,
        description1,
        description2,
        "aboutImage": aboutImage.asset->url,
        cardHeader1,
        cardHeader2,
        cardHeader3,
        cardHeader4,
        cardDesc1,
        cardDesc2,
        cardDesc3,
        cardDesc4
      }`;

  const data = await client.fetch(query);
  return data;
}

export default getabout;
