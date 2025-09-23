import { Block } from "payload"

export const VideoBlock: Block = {
  slug: "video",
  labels: {
    singular: "Video Block",
    plural: "Video Blocks",
  },
  admin: {
    disableBlockName: true,
  },
  fields: [
    {
      name: "video",
      type: "upload",
      relationTo: "media",
      required: true,
    },
  ],
}
