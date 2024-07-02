import { Rule } from "sanity";

export const trekCard = {
  name: "trekCard",
  title: "Trek Card",
  type: "document",
  fields: [
    {
      name: "trekName",
      title: "Trek Name",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "trekName" },
      validation: (Rule: Rule) => Rule.required().error("Required"),
    },
    {
      name: "backgroundImage",
      title: "Background Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "duration",
      title: "Duration",
      type: "string",
    },
    {
      name: "prize",
      title: "Prize",
      type: "number",
    },
    {
      name: "trekAltitude",
      title: "Trek Altitude",
      type: "string",
    },
    {
      name: "location",
      title: "Location",
      type: "string",
    },
    {
      name: "distance",
      title: "Distance",
      type: "string",
    },
    {
      name: "bestTime",
      title: "Best Time",
      type: "array",
      of: [{ type: "string" }],
      options: {
        list: [
          { title: "January", value: "January" },
          { title: "February", value: "February" },
          { title: "March", value: "March" },
          { title: "April", value: "April" },
          { title: "May", value: "May" },
          { title: "June", value: "June" },
          { title: "July", value: "July" },
          { title: "August", value: "August" },
          { title: "September", value: "September" },
          { title: "October", value: "October" },
          { title: "November", value: "November" },
          { title: "December", value: "December" },
          { title: "Any Time", value: "Any Time" },
        ],
      },
    },
    {
      name: "trekDescription",
      title: "Trek Description",
      type: "array",
      of: [
        {
          type: "block",
        },
        {
          type: "image",
          options: { hotspot: true },
        },
        {
          type: "file",
          title: "Video",
          options: { accept: "video/*" },
        },
      ],
    },
    {
      name: "imageGallery",
      title: "Image Gallery",
      type: "array",
      of: [{ type: "image" }],
    },
    {
      name: "faqSection",
      title: "FAQ Section",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "question", title: "Question", type: "string" },
            { name: "answer", title: "Answer", type: "text" },
          ],
        },
      ],
    },
    {
      name: "rating",
      title: "Rating",
      type: "number",
      validation: (Rule: any) =>
        Rule.min(1).max(5).error("Rating must be between 1 and 5"),
    },
  ],
};
