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
      name: "count",
      label: "Количество отображаемых услуг",
      type: "number",
      defaultValue: 4,
      min: 0,
      required: true,
    },
  ],
}
