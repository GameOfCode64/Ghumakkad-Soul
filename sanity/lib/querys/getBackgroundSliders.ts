import { client } from "@/sanity/lib/client";

export interface BackgroundSlider {
  headingText1: string;
  headingText2: string;
  description: string;
  backgroundImageUrl: string;
}

export async function getBackgroundSliders(): Promise<BackgroundSlider[]> {
  const query = `
    *[_type == "backgroundSlider"]{
      headingText1,
      headingText2,
      description,
      "backgroundImageUrl": backgroundImage.asset->url
    }
  `;
  const data = await client.fetch(query);
  return data;
}
