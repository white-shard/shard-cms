import { Block } from "payload"

export const IndicationsContraindicationsBlock: Block = {
  slug: "indications-contraindications",
  labels: {
    singular: "Indications Contraindications Block",
    plural: "Indications Contraindications Blocks",
  },
  admin: {
    disableBlockName: true,
  },
  fields: [
    {
      name: "indications",
      label: "Показания",
      type: "array",
      fields: [
        {
          name: "item",
          label: "Показание",
          type: "text",
          required: true,
        },
      ],
    },
    {
      name: "contraindications",
      label: "Противопоказания",
      type: "array",
      fields: [
        {
          name: "item",
          label: "Противопоказание",
          type: "text",
          required: true,
        },
      ],
    },
  ],
}
