import { Block } from "payload"

export const StaffBlock: Block = {
  slug: "staff",
  labels: {
    singular: "Staff Block",
    plural: "Staff Blocks",
  },
  admin: {
    disableBlockName: true,
  },
  fields: [
    {
      name: "staff",
      label: "Сотрудник",
      type: "relationship",
      relationTo: "staff",
      required: true,
    },
  ],
}
