import { type SchemaTypeDefinition } from "sanity";
import { slider } from "@/sanity/lib/schemas/backgroundSlider";
import { navbar } from "@/sanity/lib/schemas/navbar";
import { trekCard } from "@/sanity/lib/schemas/trekCard";
import { banner } from "@/sanity/lib/schemas/banner";
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [slider, navbar, trekCard, banner],
};
