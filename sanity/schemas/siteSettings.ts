import { defineType, defineField } from "sanity";

export default defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    defineField({ name: "siteName", title: "School Name", type: "string" }),
    defineField({ name: "tagline", title: "Tagline", type: "string" }),
    defineField({
      name: "logo",
      title: "Logo",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "seoDescription",
      title: "Default SEO Description",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "footerText",
      title: "Footer Copyright Text",
      type: "string",
    }),
    defineField({
      name: "announcementBanner",
      title: "Announcement Banner",
      type: "object",
      fields: [
        { name: "enabled", title: "Enable Banner", type: "boolean" },
        { name: "message", title: "Message", type: "string" },
        { name: "link", title: "Link URL", type: "string" },
        { name: "linkLabel", title: "Link Label", type: "string" },
      ],
    }),
    defineField({
      name: "navLinks",
      title: "Navigation Links",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "label", title: "Label", type: "string" },
            { name: "href", title: "URL", type: "string" },
          ],
        },
      ],
    }),
  ],
  __experimental_actions: ["update", "publish"],
});