import { ActionButton } from "@/collections/fields/action"
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
          label: "Услуга",
          value: "service",
        },
        {
          label: "Особый",
          value: "custom",
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
      name: "logo",
      label: "Логотип услуги",
      type: "upload",
      relationTo: "media",
      admin: {
        condition: (_, siblingData) => {
          return siblingData?.variant === "custom"
        },
      },
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
      name: "thesis",
      label: "Тезис",
      type: "textarea",
      required: false,
      admin: {
        condition: (_, siblingData) => {
          return siblingData?.variant === "service"
        },
      },
    },
    {
      type: "row",
      fields: [
        {
          name: "price",
          label: "Цена",
          type: "text",
          required: false,
        },
        {
          name: "old_price",
          label: "Старая цена",
          type: "text",
          required: false,
        },
      ],
      admin: {
        condition: (_, siblingData) => {
          return siblingData?.variant !== "default"
        },
      },
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
      fields: ActionButton,
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
