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
      name: "webhook",
      label: "Вебхук / Webhook",
      type: "text",
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
      type: "array",
      fields: [
        {
          type: "row",
          fields: [
            {
              name: "name",
              label: "Имя поля на латинице",
              type: "text",
              required: true,
            },
            {
              name: "type",
              label: "Тип поля",
              type: "select",
              required: true,
              options: [
                {
                  label: "Текст (одна строка)",
                  value: "text",
                },
                {
                  label: "Текст (многострочный)",
                  value: "textarea",
                },
                {
                  label: "Число",
                  value: "number",
                },
                {
                  label: "Чекбокс (одна строка)",
                  value: "checkbox",
                },
                {
                  label: "Выбор",
                  value: "select",
                },
              ],
            },
          ],
        },
        {
          type: "row",
          fields: [
            {
              name: "label",
              label: "Название поля (можно на русском)",
              type: "text",
              required: false,
            },
            {
              name: "placeholder",
              label: "Подсказка",
              type: "text",
              required: false,
            },
          ],
        },
        {
          name: "required",
          label: "Обязательное поле",
          type: "checkbox",
        },
        {
          name: "textOptions",
          label: "Валидация",
          type: "group",
          required: false,
          admin: {
            condition: (data, siblingData) => {
              return (
                siblingData?.type === "text" || siblingData?.type === "textarea"
              )
            },
          },
          fields: [
            {
              name: "validation",
              label: "Валидация",
              type: "select",
              defaultValue: "off",
              options: [
                {
                  label: "Нет",
                  value: "off",
                },
                {
                  label: "Телефон",
                  value: "phone",
                },
                {
                  label: "Электронная почта",
                  value: "email",
                },
                {
                  label: "URL",
                  value: "url",
                },
              ],
            },
            {
              name: "minLength",
              label: "Минимум символов",
              type: "number",
              defaultValue: 0,
            },
            {
              name: "maxLength",
              label: "Максимум символов",
              type: "number",
              defaultValue: 0,
            },
          ],
        },
        {
          name: "numberOptions",
          label: "Настройки числа",
          type: "group",
          admin: {
            condition: (data, siblingData) => {
              return siblingData?.type === "number"
            },
          },
          fields: [
            {
              name: "min",
              label: "Минимальное значение",
              type: "number",
            },
            {
              name: "max",
              label: "Максимальное значение",
              type: "number",
            },
          ],
        },
        {
          name: "selectOptions",
          label: "Опции для выбора",
          type: "array",
          admin: {
            condition: (data, siblingData) => {
              return siblingData?.type === "select"
            },
          },
          fields: [
            {
              name: "label",
              label: "Название опции",
              type: "text",
              required: true,
            },
            {
              name: "value",
              label: "Значение опции",
              type: "text",
              required: true,
            },
          ],
        },
      ],
    },
  ],
}
