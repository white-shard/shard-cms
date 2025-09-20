import { Block } from "payload"

export const TeamBlock: Block = {
  slug: "team",
  labels: {
    singular: "Team Block",
    plural: "Team Blocks",
  },
  admin: {
    disableBlockName: true,
  },
  fields: [
    {
      name: "blockHeading",
      label: "Заголовок блока",
      type: "text",
      required: false,
    },
    {
      name: "img",
      label: "Изображение",
      type: "upload",
      relationTo: "media",
      required: false,
    },
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
}
