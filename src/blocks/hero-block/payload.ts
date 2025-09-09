import { Block } from "payload"

export const HeroBlock: Block = {
  slug: "hero",
  labels: {
    singular: "Hero Block",
    plural: "Hero Blocks",
  },
  admin: {
    disableBlockName: true,
  },
  fields: [
    {
      name: "variant",
      label: "Вариант",
      type: "select",
      defaultValue: "default",
      options: [
        {
          label: "Стандартный",
          value: "default",
        },
        {
          label: "Услуга 1",
          value: "service1",
        },
        {
          label: "Услуга 2",
          value: "service2",
        },
      ],
    },
    {
      name: "img",
      label: "Изображение",
      type: "upload",
      relationTo: "media",
    },
    {
      name: "beforeHeading",
      label: "Пред заголовок",
      type: "text",
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
      label: "Description",
      type: "textarea",
      required: false,
    },
    {
      name: "actions",
      label: "Действия",
      type: "array",
      fields: [
        {
          name: "name",
          label: "Название",
          type: "text",
          required: true,
        },
        {
          type: "row",
          fields: [
            {
              name: "icon",
              label: "Иконка",
              type: "select",
              options: [
                {
                  label: "Иконка 1",
                  value: "icon_1",
                },
              ],
            },
            {
              name: "color",
              label: "Цвет",
              type: "select",
              defaultValue: "black",
              options: [
                {
                  label: "Черный",
                  value: "black",
                },
                {
                  label: "Розовый",
                  value: "pink",
                },
                {
                  label: "Серый",
                  value: "gray",
                },
              ],
            },
          ],
        },
      ],
    },
  ],
}

/*
admin: {
        condition: (_, siblingData) => {
          return siblingData?.variant === "block2"
        },
      },
*/
