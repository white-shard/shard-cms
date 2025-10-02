import { Block } from "payload"

export const ReviewsBlock: Block = {
  slug: "reviews",
  labels: {
    singular: "Reviews Block",
    plural: "Reviews Blocks",
  },
  admin: {
    disableBlockName: true,
  },
  fields: [
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
    {
      name: "showOnlyPositive",
      label: "Показывать только положительные отзывы",
      type: "checkbox",
      defaultValue: true,
    },
    {
      name: "videoReviews",
      label: "Видео отзывы",
      type: "array",
      fields: [
        {
          name: "title",
          label: "Название отзыва",
          type: "text",
          required: true,
        },
        {
          name: "videoUrl",
          label: "URL видео",
          type: "text",
          required: true,
          admin: {
            description: "Ссылка на видео (YouTube, Vimeo и т.д.)",
          },
        },
        {
          name: "thumbnail",
          label: "Превью",
          type: "upload",
          relationTo: "media",
          admin: {
            description: "Изображение превью для видео",
          },
        },
        {
          name: "author",
          label: "Автор отзыва",
          type: "text",
        },
        {
          name: "avatar",
          label: "Аватар пациента",
          type: "upload",
          relationTo: "media",
          admin: {
            description: "Фото пациента для отображения в отзыве",
          },
        },
        {
          name: "procedure",
          label: "Название процедуры",
          type: "text",
          admin: {
            description: "Например: Имплантация, Отбеливание зубов",
          },
        },
        {
          name: "rating",
          label: "Рейтинг",
          type: "number",
          min: 1,
          max: 5,
          admin: {
            description: "Оценка от 1 до 5 звезд",
          },
        },
      ],
    },
  ],
}
