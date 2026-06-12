import { defineType, defineField } from "sanity";

export default defineType({
  name: "notice",
  title: "Notice",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (R) => R.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (R) => R.required(),
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "Academic", value: "academic" },
          { title: "Events", value: "events" },
          { title: "Examinations", value: "examinations" },
          { title: "Admissions", value: "admissions" },
          { title: "Holiday", value: "holiday" },
          { title: "General", value: "general" },
        ],
      },
    }),
    defineField({
      name: "isImportant",
      title: "Mark as Important",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "publishedAt",
      title: "Published Date",
      type: "datetime",
      validation: (R) => R.required(),
    }),
    defineField({
      name: "excerpt",
      title: "Excerpt",
      type: "text",
      rows: 2,
    }),
    defineField({
      name: "content",
      title: "Full Content",
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "attachmentUrl",
      title: "Attachment URL (PDF)",
      type: "url",
    }),
  ],
  orderings: [
    {
      title: "Latest First",
      name: "publishedAtDesc",
      by: [{ field: "publishedAt", direction: "desc" }],
    },
  ],
  preview: {
    select: { title: "title", subtitle: "category", date: "publishedAt" },
    prepare({ title, subtitle, date }) {
      return {
        title,
        subtitle: `${subtitle} · ${new Date(date).toLocaleDateString("en-IN")}`,
      };
    },
  },
});