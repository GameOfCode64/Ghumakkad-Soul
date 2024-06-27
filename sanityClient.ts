import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import { ImageUrlBuilder } from "sanity";

const client = sanityClient({
  projectId: "yourProjectId",
  dataset: "yourDataset",
  useCdn: true,
});

const builder = imageUrlBuilder(client);

export function urlFor(source: any): ImageUrlBuilder {
  return builder.image(source);
}

export default client;
