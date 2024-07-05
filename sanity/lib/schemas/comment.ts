import { defineType } from "sanity";

export const comment = defineType({
  name: "comment",
  title: "Comment",
  type: "document",
  fields: [
    {
      name: "fullName",
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
      name: "message",
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
