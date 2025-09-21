import { Block } from "payload"

export const GalleryBlock: Block = {
  slug: "gallery",
  labels: {
    singular: "Gallery Block",
    plural: "Gallery Blocks",
  },
  admin: {
    disableBlockName: true,
  },
  fields: [
    {
      name: "heading",
      label: "Заголовок",
      type: "text",
      defaultValue: "Пространство, где приятно лечиться",
      required: true,
    },
    {
      name: "description",
      label: "Описание",
      type: "textarea",
      defaultValue:
        "Мы создали пространство, в котором каждая деталь продумана для вашего удобства и спокойствия — от мягкого освещения до изысканных деталей интерьера.",
      required: true,
    },
    {
      name: "images",
      label: "Изображения",
      type: "array",
      fields: [
        {
          name: "img",
          type: "upload",
          relationTo: "media",
          required: true,
        },
      ],
    },
  ],
}
