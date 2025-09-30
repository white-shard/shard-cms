import { CollectionConfig } from "payload"

export const Services: CollectionConfig = {
  slug: "services",
  labels: {
    singular: "Услуга",
    plural: "Услуги",
  },
  admin: {
    useAsTitle: "title",
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "img",
      label: "Изображение",
      type: "upload",
      relationTo: "media",
      required: false,
    },
    {
      name: "title",
      label: "Title",
      type: "text",
      required: true,
      admin: {
        position: "sidebar",
      },
    },
    {
      name: "url",
      label: "URL",
      type: "text",
      required: false,
    },
    {
      name: "description",
      label: "Description",
      type: "textarea",
      required: false,
      admin: {
        position: "sidebar",
      },
    },
    {
      name: "advantages",
      label: "Преимущества",
      type: "array",
      fields: [
        {
          name: "title",
          label: "Название",
          type: "text",
          required: true,
        },
      ],
      required: false,
    },
    {
      name: "price",
      label: "Цена",
      type: "text",
      required: false,
      admin: {
        position: "sidebar",
      },
    },
    {
      name: "old_price",
      label: "Старая цена",
      type: "text",
      required: false,
      admin: {
        position: "sidebar",
      },
    },
  ],
}
