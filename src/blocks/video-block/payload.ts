import { Block } from "payload"

export const ImageBlock: Block = {
  slug: "image",
  labels: {
    singular: "Image Block",
    plural: "Image Blocks",
  },
  admin: {
    disableBlockName: true,
  },
  fields: [
    {
      name: "img",
      type: "upload",
      relationTo: "media",
      required: true,
    },
  ],
}
