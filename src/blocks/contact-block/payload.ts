import { Block } from "payload"

export const ContactBlock: Block = {
  slug: "contact",
  labels: {
    singular: "Contact Block",
    plural: "Contact Blocks",
  },
  admin: {
    disableBlockName: true,
  },
  fields: [
    {
      name: "beforeHeading",
      label: "Пред заголовок",
      type: "text",
      defaultValue: "СТОМАТОЛОГИЯ",
      required: false,
    },
    {
      name: "heading",
      label: "Заголовок",
      type: "text",
      defaultValue: "DR.KOSHAKOV",
      required: true,
    },
  ],
}
