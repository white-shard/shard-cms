import { iconList } from "@/lib/icons"
import { Field } from "payload"

export const ActionButton: Field[] = [
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
        options: Object.keys(iconList).map((key) => ({
          label: key,
          value: key,
        })),
      },
      {
        name: "variant",
        label: "Вариант",
        type: "select",
        defaultValue: "default",
        options: [
          {
            label: "Обычная кнопка",
            value: "default",
          },
          {
            label: "Только иконка",
            value: "icon",
          },
          {
            label: "Иконка и текст без фона",
            value: "icon-text",
          },
        ],
      },
      {
        name: "color",
        label: "Цвет",
        type: "select",
        defaultValue: "primary",
        options: [
          {
            label: "Черный",
            value: "primary",
          },
          {
            label: "Розовый",
            value: "accent",
          },
          {
            label: "Серый",
            value: "secondary",
          },
          {
            label: "Белый",
            value: "white",
          },
        ],
      },
    ],
  },
  {
    type: "row",
    fields: [
      {
        name: "action",
        label: "Действие",
        type: "select",
        defaultValue: "link",
        options: [
          {
            label: "Ссылка",
            value: "link",
          },
          {
            label: "Модальное окно с формой",
            value: "form",
          },
        ],
      },
      {
        name: "url",
        label: "Ссылка",
        type: "text",
        defaultValue: "#",
        required: false,
        admin: {
          condition: (_, siblingData) => {
            return siblingData?.action === "link"
          },
        },
      },
      {
        name: "form",
        label: "Форма",
        type: "relationship",
        relationTo: "forms",
        required: false,
        admin: {
          condition: (_, siblingData) => {
            return siblingData?.action === "form"
          },
        },
      },
    ],
  },
]
