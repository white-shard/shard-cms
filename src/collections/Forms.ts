import { randomUUID } from "crypto"
import type { CollectionConfig } from "payload"

export const Forms: CollectionConfig = {
  slug: "forms",
  labels: {
    singular: "Форма",
    plural: "Формы",
  },
  access: {
    read: () => true,
  },
  admin: {
    useAsTitle: "heading",
  },
  fields: [
    {
      name: "form_id",
      label: "Идентификатор формы",
      type: "text",
      defaultValue: randomUUID().toString(),
      required: true,
    },
    {
      name: "img",
      label: "Изображение",
      type: "upload",
      relationTo: "media",
      required: true,
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
    },
    {
      name: "fields",
      label: "Поля",
      type: "group",
      fields: [
        {
          name: "fullname",
          type: "number",
          label: "Имя",
          admin: {
            placeholder: "ID поля в amoCRM",
          },
          required: true,
        },
        {
          name: "phone",
          type: "number",
          label: "Телефон",
          admin: {
            placeholder: "ID поля в amoCRM",
          },
          required: true,
        },
        {
          name: "hidden_fields",
          label: "Скрытые поля",
          type: "array",
          fields: [
            {
              type: "row",
              fields: [
                {
                  name: "name",
                  label: "Название поля",
                  type: "text",
                  required: true,
                },
                {
                  name: "amo_id",
                  label: "ID поля в amoCRM",
                  type: "number",
                  required: true,
                },
              ],
            },
            {
              name: "value",
              label: "Значение поля",
              type: "text",
              required: true,
            },
          ],
        },
      ],
    },
    {
      name: "submitText",
      label: "Текст кнопки отправки",
      type: "text",
      defaultValue: "Отправить",
      required: true,
    },
  ],
}
