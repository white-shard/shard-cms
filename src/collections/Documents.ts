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
  ],
  upload: {
    mimeTypes: ["application/pdf"],
  },
}
