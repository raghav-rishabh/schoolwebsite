import { defineType, defineField } from "sanity";

export default defineType({
  name: "syllabus",
  title: "Syllabus",
  type: "document",
  fields: [
    defineField({
      name: "grade",
      title: "Grade / Class",
      type: "string",
      validation: (R) => R.required(),
    }),
    defineField({
      name: "subject",
      title: "Subject",
      type: "string",
      validation: (R) => R.required(),
    }),
    defineField({
      name: "academicYear",
      title: "Academic Year",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "fileUrl",
      title: "PDF File URL",
      type: "url",
    }),
    defineField({
      name: "fileAsset",
      title: "Upload PDF",
      type: "file",
      options: { accept: ".pdf" },
    }),
    defineField({
      name: "updatedAt",
      title: "Last Updated",
      type: "date",
    }),
    defineField({
      name: "curriculum",
      title: "Curriculum Board",
      type: "string",
      options: {
        list: [
          { title: "CBSE", value: "cbse" },
          { title: "IB", value: "ib" },
          { title: "State Board", value: "state" },
        ],
      },
    }),
  ],
  preview: {
    select: { title: "subject", subtitle: "grade" },
    prepare({ title, subtitle }) {
      return { title, subtitle: `Class ${subtitle}` };
    },
  },
});