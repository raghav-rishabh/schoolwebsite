import { defineType, defineField } from "sanity";

export default defineType({
  name: "galleryItem",
  title: "Gallery Item",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title / Caption",
      type: "string",
      validation: (R) => R.required(),
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
      validation: (R) => R.required(),
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "Annual Day", value: "annual-day" },
          { title: "Sports", value: "sports" },
          { title: "Science Fair", value: "science-fair" },
          { title: "Cultural Events", value: "cultural" },
          { title: "Classroom", value: "classroom" },
          { title: "Campus", value: "campus" },
          { title: "Trips & Excursions", value: "trips" },
        ],
      },
    }),
    defineField({
      name: "takenAt",
      title: "Date Taken",
      type: "date",
    }),
    defineField({
      name: "altText",
      title: "Alt Text (Accessibility)",
      type: "string",
    }),
  ],
  preview: {
    select: { title: "title", media: "image", subtitle: "category" },
  },
});