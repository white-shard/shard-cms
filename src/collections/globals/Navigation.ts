import { GlobalConfig } from "payload"

export const Navigation: GlobalConfig = {
  slug: "navigation",
  fields: [
    {
      name: "items",
      label: "Элементы меню",
      type: "array",
      fields: [
        {
          name: "label",
          label: "Заголовок",
          type: "text",
          required: true,
        },
        {
          name: "url",
          label: "Ссылка /URL",
          type: "text",
          required: false,
        },
        {
          name: "hasCategories",
          label: "Есть категории",
          type: "checkbox",
          required: false,
          defaultValue: false,
        },
        {
          name: "categories",
          label: "Категории",
          type: "array",
          admin: {
            condition: (_, siblingData) => {
              return siblingData?.hasCategories
            },
          },
          fields: [
            {
              name: "label",
              label: "Заголовок",
              type: "text",
              required: true,
            },
            {
              name: "url",
              label: "Ссылка /URL",
              type: "text",
              required: false,
            },
            {
              name: "hasItems",
              label: "Есть элементы",
              type: "checkbox",
              required: false,
              defaultValue: false,
            },
            {
              name: "items",
              label: "Элементы",
              type: "array",
              admin: {
                condition: (_, siblingData) => {
                  return siblingData?.hasItems
                },
              },
              fields: [
                {
                  name: "label",
                  label: "Заголовок",
                  type: "text",
                  required: true,
                },
                {
                  name: "url",
                  label: "Ссылка /URL",
                  type: "text",
                  required: false,
                },
              ],
            },
          ],
        },
      ],
    },
  ],
}
