import { Block } from "payload"

export const CertBlock: Block = {
  slug: "cert-list",
  labels: {
    singular: "Cert List Block",
    plural: "Cert List Blocks",
  },
  admin: {
    disableBlockName: true,
  },
  fields: [
    {
      name: "heading",
      label: "Заголовок",
      type: "text",
      required: false,
    },
    {
      name: "description",
      label: "Описание",
      type: "textarea",
      required: false,
    },
    {
      name: "images",
      label: "Изображения",
      type: "array",
      fields: [
        {
          name: "img",
          label: "Изображение",
          type: "upload",
          relationTo: "media",
          required: true,
        },
        {
          name: "doc",
          label: "Документы",
          type: "upload",
          relationTo: "documents",
          required: true,
        },
      ],
    },
  ],
}
