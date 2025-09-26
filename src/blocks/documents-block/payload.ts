import { Block } from "payload"

export const DocumentsBlock: Block = {
  slug: "documents",
  labels: {
    singular: "Documents Block",
    plural: "Documents Blocks",
  },
  admin: {
    disableBlockName: true,
  },
  fields: [
    {
      name: "folder",
      label: "Папка",
      type: "select",
      required: true,
      defaultValue: "first",
      admin: {
        hidden: true,
      },
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
}
