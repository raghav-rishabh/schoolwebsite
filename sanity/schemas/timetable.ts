import { defineType, defineField } from "sanity";

const DAYS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

export default defineType({
  name: "timetable",
  title: "Timetable",
  type: "document",
  fields: [
    defineField({
      name: "grade",
      title: "Grade / Class",
      type: "string",
      validation: (R) => R.required(),
    }),
    defineField({
      name: "section",
      title: "Section",
      type: "string",
    }),
    defineField({
      name: "academicYear",
      title: "Academic Year",
      type: "string",
      placeholder: "2024-25",
    }),
    defineField({
      name: "schedule",
      title: "Weekly Schedule",
      type: "array",
      of: [
        {
          type: "object",
          name: "daySchedule",
          title: "Day Schedule",
          fields: [
            {
              name: "day",
              title: "Day",
              type: "string",
              options: { list: DAYS },
            },
            {
              name: "periods",
              title: "Periods",
              type: "array",
              of: [
                {
                  type: "object",
                  fields: [
                    { name: "periodNumber", title: "Period #", type: "number" },
                    { name: "subject", title: "Subject", type: "string" },
                    { name: "teacher", title: "Teacher", type: "string" },
                    { name: "startTime", title: "Start Time", type: "string" },
                    { name: "endTime", title: "End Time", type: "string" },
                    { name: "room", title: "Room/Lab", type: "string" },
                  ],
                },
              ],
            },
          ],
          preview: {
            select: { title: "day" },
          },
        },
      ],
    }),
  ],
  preview: {
    select: { title: "grade", subtitle: "section" },
    prepare({ title, subtitle }) {
      return { title: `Class ${title}`, subtitle: subtitle ? `Section ${subtitle}` : "" };
    },
  },
});