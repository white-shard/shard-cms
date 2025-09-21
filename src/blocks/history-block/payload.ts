import { Block } from "payload"

export const HistoryBlock: Block = {
  slug: "history",
  labels: {
    singular: "History Block",
    plural: "History Blocks",
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
      required: false,
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
