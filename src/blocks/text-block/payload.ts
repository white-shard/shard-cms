import { Block } from "payload"

export const TextBlock: Block = {
  slug: "text",
  labels: {
    singular: "Text Block",
    plural: "Text Blocks",
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
      type: "text",
      required: false,
    },
    {
      name: "text",
      label: "Текст",
      type: "richText",
      required: true,
    },
  ],
}
