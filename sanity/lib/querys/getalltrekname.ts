import { client } from "@/sanity/lib/client";

async function getTrekName() {
  const query = `
  *[_type == "trekCard"]{
  _id,
  trekName,
}
  `;
  const data = await client.fetch(query);
  return data;
}

export default getTrekName;
