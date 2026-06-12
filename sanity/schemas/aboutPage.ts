import { defineType, defineField } from "sanity";

export default defineType({
  name: "aboutPage",
  title: "About Page",
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
      name: "missionStatement",
      title: "Mission Statement",
      type: "text",
      rows: 4,
    }),
    defineField({
      name: "visionStatement",
      title: "Vision Statement",
      type: "text",
      rows: 4,
    }),
    defineField({
      name: "history",
      title: "School History",
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "values",
      title: "Core Values",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "title", title: "Title", type: "string" },
            { name: "description", title: "Description", type: "text" },
            { name: "icon", title: "Icon Name (Lucide)", type: "string" },
          ],
        },
      ],
    }),
    defineField({
      name: "facilities",
      title: "Facilities",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "name", title: "Facility Name", type: "string" },
            { name: "description", title: "Description", type: "text" },
            {
              name: "image",
              title: "Image",
              type: "image",
              options: { hotspot: true },
            },
          ],
        },
      ],
    }),
    defineField({
      name: "staffMembers",
      title: "Staff Members",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "name", title: "Name", type: "string" },
            { name: "role", title: "Role", type: "string" },
            { name: "qualification", title: "Qualification", type: "string" },
            {
              name: "image",
              title: "Photo",
              type: "image",
              options: { hotspot: true },
            },
            { name: "bio", title: "Short Bio", type: "text" },
          ],
        },
      ],
    }),
  ],
  __experimental_actions: ["update", "publish"],
});