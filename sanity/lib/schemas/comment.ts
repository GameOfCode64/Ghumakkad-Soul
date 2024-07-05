import { defineType } from "sanity";

export const comment = defineType({
  name: "comment",
  title: "Comment",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
      readOnly: true,
    },
    {
      name: "email",
      title: "Email",
      type: "string",
      readOnly: true,
    },
    {
      name: "comment",
      title: "Comment",
      type: "text",
      readOnly: true,
    },
    {
      name: "trekCard",
      title: "TrekCard",
      type: "reference",
      to: [{ type: "trekCard" }],
    },
  ],
});
