import type { CollectionConfig } from "payload"

export const Users: CollectionConfig = {
  slug: "users",
  labels: {
    singular: "Пользователь",
    plural: "Пользователи",
  },
  admin: {
    useAsTitle: "email",
    hidden: true,
  },
  auth: true,
  fields: [
    // Email added by default
    // Add more fields as needed
  ],
}
