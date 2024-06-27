import { title } from "process";

// schemas/navbar.js
export const navbar = {
  name: "navbar",
  type: "document",
  title: "Navbar",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
    },
    {
      name: "logo",
      type: "image",
      title: "Logo",
      options: {
        hotspot: true, // Enables the user to crop and focus on different parts of the image
      },
    },
    {
      name: "navLinks",
      type: "array",
      title: "Navigation Links",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "title",
              type: "string",
              title: "Title",
            },
            {
              name: "url",
              type: "url",
              title: "URL",
            },
          ],
        },
      ],
    },
  ],
};
