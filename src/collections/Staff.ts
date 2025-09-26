import type { CollectionConfig } from "payload"

export const Staff: CollectionConfig = {
  slug: "staff",
  admin: {
    useAsTitle: "fullname",
  },
  fields: [
    {
      name: "img",
      label: "Изображение",
      type: "upload",
      relationTo: "media",
      required: true,
    },
    {
      type: "row",
      fields: [
        {
          name: "fullname",
          label: "ФИО",
          type: "text",
          required: true,
        },
        {
          name: "experience",
          label: "Лет опыта",
          type: "number",
          required: true,
        },
      ],
    },
    {
      name: "description",
      label: "Описание",
      type: "textarea",
      required: false,
    },
    {
      name: "specialty",
      label: "Специальность",
      type: "relationship",
      relationTo: "specialties",
      hasMany: true,
      required: true,
    },
    {
      name: "alternativeSpecialty",
      label: "Альтернативные специализации",
      type: "text",
      required: false,
    },
    {
      name: "staffPage",
      label: "Страница врача",
      type: "relationship",
      relationTo: "pages",
      required: false,
    },
    {
      name: "bookingLink",
      label: "Ссылка на запись",
      type: "text",
      required: false,
    },
    {
      name: "features",
      label: "Преимущества",
      type: "array",
      fields: [
        {
          name: "item",
          label: "Преимущество",
          type: "text",
          required: true,
        },
      ],
    },
  ],
}
