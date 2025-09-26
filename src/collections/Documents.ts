import type { CollectionConfig } from "payload"

export const Documents: CollectionConfig = {
  slug: "documents",
  labels: {
    singular: "Документ",
    plural: "Документы",
  },
  access: {
    read: () => true,
  },
  admin: {
    useAsTitle: "title",
  },
  fields: [
    {
      name: "title",
      label: "Название",
      type: "text",
      required: true,
    },
    {
      name: "folder",
      label: "Папка",
      type: "select",
      required: true,
      defaultValue: "first",
      options: [
        {
          label: "Первичные документы",
          value: "first",
        },
        {
          label: "Правовая информация",
          value: "right",
        },
      ],
    },
  ],
  upload: {
    mimeTypes: ["application/pdf"],
  },
}
