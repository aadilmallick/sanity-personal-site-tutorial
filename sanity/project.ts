import { defineField, defineType } from "sanity";

export default defineType({
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Project Title",
      type: "string",
    }),
    defineField({
      name: "image",
      title: "Project Image",
      type: "image",
      fields: [
        defineField({
          name: "alt",
          title: "Alternative Text",
          type: "string",
        }),
      ],
    }),
    defineField({
      name: "url",
      title: "Project URL",
      type: "url",
    }),
    defineField({
      name: "content",
      title: "Project Content",
      type: "array",
      of: [{ type: "block" }],
    }),
  ],
});
