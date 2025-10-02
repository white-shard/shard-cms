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
          type: "row",
          fields: [
            {
              name: "icon",
              label: "Иконка",
              type: "text",
              admin: {
                components: {
                  Field: "@/components/payload/IconPicker",
                },
              } as any,
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
      required: false,
    },
  ],
}
