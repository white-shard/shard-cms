import { Block } from "payload"

export const ExpertTeamBlock: Block = {
  slug: "expert-team",
  labels: {
    singular: "Expert Team Block",
    plural: "Expert Team Blocks",
  },
  admin: {
    disableBlockName: true,
  },
  fields: [
    {
      name: "heading",
      label: "Заголовок",
      type: "text",
      defaultValue: "DR.KOSHAKOV",
      required: true,
    },
    {
      name: "experts",
      label: "Эксперты",
      type: "relationship",
      relationTo: "staff",
      hasMany: true,
      required: true,
    },
  ],
}
