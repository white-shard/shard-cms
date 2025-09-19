import type { CollectionConfig } from "payload"

export const Staff: CollectionConfig = {
  slug: "staff",
  admin: {
    useAsTitle: "fullname",
  },
  fields: [
    {
      name: "img",
      type: "upload",
      relationTo: "media",
      required: true,
    },
    {
      name: "fullname",
      type: "text",
      required: true,
    },
    {
      name: "description",
      type: "textarea",
      required: false,
    },
    {
      name: "features",
      type: "array",
      fields: [
        {
          name: "item",
          type: "text",
          required: true,
        },
      ],
    },
  ],
}
