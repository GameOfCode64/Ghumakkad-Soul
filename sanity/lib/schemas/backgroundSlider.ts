export const slider = {
  name: "backgroundSlider",
  type: "document",
  title: "Background Slider",
  fields: [
    {
      name: "headingText1",
      type: "string",
      title: "Heading Text 1",
    },
    {
      name: "headingText2",
      type: "string",
      title: "Heading Text 2",
    },
    {
      name: "description",
      type: "text",
      title: "Description",
    },
    {
      name: "backgroundImage",
      type: "image",
      title: "Background Image",
      options: {
        hotspot: true,
      },
    },
  ],
};
