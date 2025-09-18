import { Block } from "payload"

export const AdvantagesChallengesBlock: Block = {
  slug: "advantages-challenges",
  labels: {
    singular: "Advantages Challenges Block",
    plural: "Advantages Challenges Blocks",
  },
  admin: {
    disableBlockName: true,
  },
  fields: [
    {
      name: "advantages",
      type: "group",
      fields: [
        {
          name: "img",
          type: "upload",
          relationTo: "media",
          required: false,
        },
        {
          name: "heading",
          type: "text",
          required: true,
        },
        {
          name: "description",
          type: "textarea",
          required: false,
        },
        {
          name: "advantages",
          type: "array",
          fields: [
            {
              name: "heading",
              type: "text",
              required: true,
            },
            {
              name: "description",
              type: "textarea",
              required: false,
            },
          ],
        },
      ],
    },
    {
      name: "challenges",
      type: "group",
      fields: [
        {
          name: "img",
          type: "upload",
          relationTo: "media",
          required: false,
        },
        {
          name: "heading",
          type: "text",
          required: true,
        },
        {
          name: "description",
          type: "textarea",
          required: false,
        },
        {
          name: "challenges",
          type: "array",
          fields: [
            {
              name: "heading",
              type: "text",
              required: true,
            },
            {
              name: "description",
              type: "textarea",
              required: false,
            },
          ],
        },
      ],
    },
  ],
}
