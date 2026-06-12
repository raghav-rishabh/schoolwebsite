import { defineType, defineField } from "sanity";

export default defineType({
  name: "dressCode",
  title: "Dress Code",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Page Title", type: "string" }),
    defineField({
      name: "heroImage",
      title: "Hero Image",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "sections",
      title: "Dress Code Sections",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "heading", title: "Section Heading", type: "string" },
            {
              name: "description",
              title: "Description",
              type: "array",
              of: [{ type: "block" }],
            },
            {
              name: "items",
              title: "Items List",
              type: "array",
              of: [{ type: "string" }],
            },
            {
              name: "image",
              title: "Section Image",
              type: "image",
              options: { hotspot: true },
            },
          ],
        },
      ],
    }),
    defineField({
      name: "lastUpdated",
      title: "Last Updated",
      type: "date",
    }),
    defineField({
      name: "notes",
      title: "Additional Notes",
      type: "array",
      of: [{ type: "block" }],
    }),
  ],
  __experimental_actions: ["update", "publish"],
});