import { GlobalConfig } from "payload"
import { ActionButton } from "../fields/action"

export const HeaderOptions: GlobalConfig = {
  slug: "header-options",
  label: "Настройки шапки",
  fields: [
    {
      name: "navigation",
      label: "Элементы меню",
      type: "array",
      fields: [
        {
          type: "row",
          fields: [
            {
              name: "label",
              label: "Заголовок",
              type: "text",
              required: true,
            },
            {
              name: "color",
              label: "Цвет",
              type: "select",
              defaultValue: "default",
              options: [
                {
                  label: "Обычный",
                  value: "default",
                },
                {
                  label: "Акцент",
                  value: "accent",
                },
              ],
            },
          ],
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
    {
      name: "actionButtons",
      label: "Кнопки действий",
      type: "array",
      fields: ActionButton,
    },
  ],
}
