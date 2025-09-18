import { Block } from "payload"

export const MethodsBlock: Block = {
  slug: "methods",
  labels: {
    singular: "Methods Block",
    plural: "Methods Blocks",
  },
  admin: {
    disableBlockName: true,
  },
  fields: [
    {
      name: "methods",
      type: "array",
      fields: [
        {
          name: "img",
          type: "upload",
          relationTo: "media",
          required: false,
        },
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
      ],
    },
  ],
}
