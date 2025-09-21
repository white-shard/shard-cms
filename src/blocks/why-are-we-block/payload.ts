import { iconList } from "@/lib/icons"
import { Block } from "payload"

export const WhyAreWeBlock: Block = {
  slug: "why-are-we",
  labels: {
    singular: "Why Are We Block",
    plural: "Why Are We Blocks",
  },
  admin: {
    disableBlockName: true,
  },
  fields: [
    {
      name: "heading",
      label: "Заголовок",
      type: "text",
      defaultValue: "Почему вы выбираете именно нас?",
      required: true,
    },
    {
      name: "items",
      label: "Элементы",
      type: "array",
      fields: [
        {
          name: "icon",
          label: "Иконка",
          type: "select",
          options: Object.keys(iconList).map((key) => ({
            label: key,
            value: key,
          })),
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
      ],
    },
  ],
}
