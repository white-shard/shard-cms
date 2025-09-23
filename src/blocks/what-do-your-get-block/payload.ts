import { Block } from "payload"

export const WhatDoYoutGetBlock: Block = {
  slug: "what-do-your-get",
  labels: {
    singular: "What Do Your Get Block",
    plural: "What Do Yout Get Blocks",
  },
  admin: {
    disableBlockName: true,
  },
  fields: [
    {
      name: "items",
      label: "Вы получаете",
      type: "array",
      fields: [
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
          required: true,
        },
      ],
    },
  ],
}
