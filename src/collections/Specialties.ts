import { CollectionConfig } from "payload"

export const Specialties: CollectionConfig = {
  slug: "specialties",
  labels: {
    singular: "Specialty",
    plural: "Specialties",
  },
  admin: {
    useAsTitle: "name",
  },
  fields: [
    {
      name: "name",
      label: "Название",
      type: "text",
      required: true,
    },
  ],
}
