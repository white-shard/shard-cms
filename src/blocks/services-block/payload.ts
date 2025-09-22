import { Block } from "payload"

export const ServicesBlock: Block = {
  slug: "services",
  labels: {
    singular: "Services Block",
    plural: "Services Blocks",
  },
  admin: {
    disableBlockName: true,
  },
  fields: [
    {
      name: "main",
      label: "Главная услуга",
      type: "relationship",
      relationTo: "services",
      required: false,
    },
    {
      name: "services",
      label: "Отображаемые услуги",
      type: "array",
      fields: [
        {
          name: "service",
          label: "Услуга",
          type: "relationship",
          relationTo: "services",
          required: true,
        },
      ],
      required: true,
    },
  ],
}
