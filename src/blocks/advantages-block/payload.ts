import { Block } from "payload"

export const AdvantagesBlock: Block = {
  slug: "advantages",
  labels: {
    singular: "Advantages Block",
    plural: "Advantages Blocks",
  },
  admin: {
    disableBlockName: true,
  },
  fields: [
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
        {
          name: "description",
          label: "Описание",
          type: "textarea",
          required: true,
        },
      ],
      required: false,
    },
  ],
}
