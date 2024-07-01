import { client } from "@/sanity/lib/client";

async function getblogs() {
  const query = `*[_type == "blog"]{
        _id,
        title,
        slug,
        author,
        "authorimage": authorimage.asset->url,
        "blogbgimage": blogbgimage.asset->url,
        time,
        excerpt,
        body,
  }`;

  const data = await client.fetch(query);
  return data;
}

export default getblogs;
