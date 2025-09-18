import { Block } from "payload"

export const ServicesCostBlock: Block = {
  slug: "services-cost",
  labels: {
    singular: "Services Cost Block",
    plural: "Services Cost Blocks",
  },
  admin: {
    disableBlockName: true,
  },
  fields: [
    {
      name: "heading",
      type: "text",
      defaultValue: "СТОИМОСТЬ УСЛУГ В КЛИНИКЕ  DR.KOSHAKOV",
      required: true,
    },
    {
      name: "description",
      type: "textarea",
      required: true,
    },
    {
      name: "services",
      type: "array",
      fields: [
        {
          name: "item",
          type: "relationship",
          relationTo: "services",
          required: true,
        },
      ],
    },
  ],
}
