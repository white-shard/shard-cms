import { registeredPageBlocks } from "@/blocks"
import { CollectionConfig } from "payload"

export const Pages: CollectionConfig = {
  slug: "pages",
  labels: {
    singular: "Page",
    plural: "Pages",
  },
  admin: {
    useAsTitle: "title",
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "title",
      label: "Title",
      type: "text",
      required: true,
      admin: {
        position: "sidebar",
      },
    },
    {
      name: "slug",
      label: "Slug",
      type: "text",
      required: true,
      admin: {
        position: "sidebar",
      },
    },
    {
      name: "description",
      label: "Description",
      type: "textarea",
      required: false,
      admin: {
        position: "sidebar",
      },
    },
    {
      name: "keywords",
      label: "Keywords",
      type: "text",
      required: false,
      hasMany: true,
      admin: {
        position: "sidebar",
      },
    },
    {
      name: "layout",
      label: "Layout",
      type: "blocks",
      blocks: registeredPageBlocks.map((block) => block.payload),
    },
  ],
}
