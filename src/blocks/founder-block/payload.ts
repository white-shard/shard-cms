import { Block } from "payload"

export const FounderBlock: Block = {
  slug: "founder",
  labels: {
    singular: "Founder Block",
    plural: "Founder Blocks",
  },
  admin: {
    disableBlockName: true,
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
      name: "heading",
      label: "Заголовок",
      type: "text",
      required: true,
    },
    {
      name: "description",
      label: "Описание",
      type: "textarea",
      required: true,
    },
    {
      name: "quote",
      label: "Цитата",
      type: "text",
      required: false,
    },
  ],
}
