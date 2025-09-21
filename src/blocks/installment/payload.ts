import { Block } from "payload"

export const InstallmentBlock: Block = {
  slug: "installment",
  labels: {
    singular: "Installment Block",
    plural: "Installment Blocks",
  },
  admin: {
    disableBlockName: true,
  },
  fields: [
    {
      name: "img",
      type: "upload",
      relationTo: "media",
      required: false,
    },
  ],
}
