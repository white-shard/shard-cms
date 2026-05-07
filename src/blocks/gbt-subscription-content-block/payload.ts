import { Block } from "payload"

export const GbtSubscriptionContentBlock: Block = {
  slug: "gbt-subscription-content",
  labels: {
    singular: "GBT Subscription Content Block",
    plural: "GBT Subscription Content Blocks",
  },
  admin: {
    disableBlockName: true,
  },
  fields: [
    {
      name: "img",
      label: "Левое изображение",
      type: "upload",
      relationTo: "media",
      required: false,
    },
    {
      name: "imgRight",
      label: "Правое изображение",
      type: "upload",
      relationTo: "media",
      required: false,
    },
  ],
}
