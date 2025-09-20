import type { CollectionConfig } from "payload"

export const Staff: CollectionConfig = {
  slug: "staff",
  admin: {
    useAsTitle: "fullname",
  },
  fields: [
    {
      name: "img",
      label: "Изображение",
      type: "upload",
      relationTo: "media",
      required: true,
    },
    {
      type: "row",
      fields: [
        {
          name: "fullname",
          label: "ФИО",
          type: "text",
          required: true,
        },
        {
          name: "experience",
          label: "Лет опыта",
          type: "number",
          required: true,
        },
      ],
    },
    {
      name: "description",
      label: "Описание",
      type: "textarea",
      required: false,
    },
    {
      name: "features",
      label: "Преимущества",
      type: "array",
      fields: [
        {
          name: "item",
          label: "Преимущество",
          type: "text",
          required: true,
        },
      ],
    },
  ],
}
