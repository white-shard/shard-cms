import { Block } from "payload"

export const WorksPhotosBlock: Block = {
  slug: "works-photos",
  labels: {
    singular: "Works Photos Block",
    plural: "Works Photos Blocks",
  },
  admin: {
    disableBlockName: true,
  },
  fields: [
    {
      name: "heading",
      type: "text",
      defaultValue: "Фото наших работ",
      required: true,
    },
    {
      name: "description",
      type: "textarea",
      defaultValue:
        "Посмотрите на впечатляющие результаты наших пациентов до и после лечения",
      required: true,
    },
    {
      name: "photos",
      type: "array",
      fields: [
        {
          name: "beforeImg",
          type: "upload",
          relationTo: "media",
          required: true,
        },
        {
          name: "afterImg",
          type: "upload",
          relationTo: "media",
          required: true,
        },
        {
          name: "heading",
          type: "text",
          required: true,
        },
      ],
    },
  ],
}
