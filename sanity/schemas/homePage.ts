import { defineType, defineField } from "sanity";

export default defineType({
  name: "homePage",
  title: "Home Page",
  type: "document",
  fields: [
    defineField({
      name: "heroTitle",
      title: "Hero Title",
      type: "string",
      validation: (R) => R.required(),
    }),
    defineField({
      name: "heroSubtitle",
      title: "Hero Subtitle",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "heroImage",
      title: "Hero Background Image",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "heroCtaLabel",
      title: "CTA Button Label",
      type: "string",
    }),
    defineField({
      name: "heroCtaLink",
      title: "CTA Button Link",
      type: "string",
    }),
    defineField({
      name: "featuredStats",
      title: "Featured Stats",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "value", title: "Value", type: "string" },
            { name: "label", title: "Label", type: "string" },
            { name: "icon", title: "Icon Name", type: "string" },
          ],
        },
      ],
    }),
    defineField({
      name: "welcomeMessage",
      title: "Welcome Message (Principal's Note)",
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "principalName",
      title: "Principal Name",
      type: "string",
    }),
    defineField({
      name: "principalImage",
      title: "Principal Photo",
      type: "image",
      options: { hotspot: true },
    }),
  ],
  __experimental_actions: ["update", "publish"],
});