import { iconList } from "@/lib/icons"
import { Block } from "payload"

export const GbtSubscribeBlock: Block = {
  slug: "gbt-subscribe",
  labels: {
    singular: "Gbt Subscribe Block",
    plural: "Gbt Subscribe Blocks",
  },
  admin: {
    disableBlockName: true,
  },
  fields: [
    {
      name: "description",
      label: "Описание",
      type: "textarea",
      required: true,
    },
    {
      name: "included",
      label: "Что включено",
      type: "array",
      fields: [
        {
          type: "row",
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
              name: "title",
              label: "Название",
              type: "text",
              required: true,
            },
          ],
        },
        {
          name: "description",
          label: "Описание",
          type: "textarea",
          required: true,
        },
      ],
    },
    {
      name: "price",
      label: "Цена",
      type: "text",
      required: true,
    },
    {
      name: "old_price",
      label: "Старая цена",
      type: "text",
      required: false,
    },
    {
      name: "motivation",
      label: "Мотивация",
      type: "textarea",
      required: false,
    },
    {
      name: "features",
      label: "Преимущества",
      type: "text",
      hasMany: true,
    },
    {
      name: "subscribe_form",
      label: "Форма подписки",
      type: "relationship",
      relationTo: "forms",
      required: false,
    },
  ],
}
