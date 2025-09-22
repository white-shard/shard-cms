import { Block } from "payload"

export const FounderBlock: Block = {
  slug: "gbt-hello",
  labels: {
    singular: "GBT Hello Block",
    plural: "GBT Hello Blocks",
  },
  admin: {
    disableBlockName: true,
  },
  fields: [
    {
      name: "staff",
      label: "Сотрудник",
      type: "relationship",
      relationTo: "staff",
      required: true,
    },
    {
      name: "quote",
      label: "Цитата",
      type: "text",
      required: false,
    },
    {
      name: "description",
      label: "Описание",
      type: "textarea",
      required: true,
    },
  ],
}
