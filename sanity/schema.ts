import { type SchemaTypeDefinition } from "sanity";
import { slider } from "@/sanity/lib/schemas/backgroundSlider";
import { navbar } from "@/sanity/lib/schemas/navbar";
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [slider, navbar],
};
