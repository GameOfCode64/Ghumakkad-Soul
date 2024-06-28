import { client } from "@/sanity/lib/client";

export interface banner {
  heading1: string;
  heading2: string;
  heading3: string;
}

export async function getbanner(): Promise<banner[]> {
  const query = `
    *[_type == "banner"]{
      heading1,
      heading2,
      heading3,
    }
  `;
  const data = await client.fetch(query);
  return data;
}
