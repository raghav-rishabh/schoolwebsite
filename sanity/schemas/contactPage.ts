import { defineType, defineField } from "sanity";

export default defineType({
  name: "contactPage",
  title: "Contact Page",
  type: "document",
  fields: [
    defineField({ name: "address", title: "Full Address", type: "text" }),
    defineField({
      name: "phone",
      title: "Phone Numbers",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "email",
      title: "Email Addresses",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "mapEmbedUrl",
      title: "Google Maps Embed URL",
      type: "url",
    }),
    defineField({
      name: "officeHours",
      title: "Office Hours",
      type: "string",
    }),
    defineField({
      name: "admissionsContact",
      title: "Admissions Contact",
      type: "object",
      fields: [
        { name: "name", title: "Contact Person", type: "string" },
        { name: "phone", title: "Phone", type: "string" },
        { name: "email", title: "Email", type: "string" },
      ],
    }),
    defineField({
      name: "socialLinks",
      title: "Social Media Links",
      type: "object",
      fields: [
        { name: "facebook", title: "Facebook URL", type: "url" },
        { name: "instagram", title: "Instagram URL", type: "url" },
        { name: "youtube", title: "YouTube URL", type: "url" },
        { name: "twitter", title: "Twitter/X URL", type: "url" },
      ],
    }),
  ],
  __experimental_actions: ["update", "publish"],
});