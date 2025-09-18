import { Block } from "payload"

export const StagesBlock: Block = {
  slug: "stages",
  labels: {
    singular: "Stages Block",
    plural: "Stages Blocks",
  },
  admin: {
    disableBlockName: true,
  },
  fields: [
    {
      name: "heading",
      type: "text",
      required: true,
    },
    {
      name: "description",
      type: "textarea",
      required: true,
    },
    {
      name: "stages",
      type: "array",
      fields: [
        {
          name: "heading",
          type: "text",
          required: true,
        },
        {
          name: "description",
          type: "textarea",
          required: false,
        },
      ],
    },
  ],
}
