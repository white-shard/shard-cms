import { GlobalConfig } from "payload"

export const SEOOptions: GlobalConfig = {
  slug: "seo-options",
  fields: [
    {
      type: "group",
      name: "yandexMetrika",
      label: "Яндекс.Метрика",
      fields: [
        {
          type: "row",
          fields: [
            {
              name: "enabled",
              label: "Включить Яндекс.Метрику",
              type: "checkbox",
              defaultValue: false,
            },
            {
              name: "counterId",
              label: "ID счетчика",
              type: "text",
              admin: {
                placeholder: "12345678",
                description: "Введите ID счетчика Яндекс.Метрики",
              },
            },
          ],
        },
        {
          name: "webvisor",
          label: "Включить Вебвизор",
          type: "checkbox",
          defaultValue: true,
          admin: {
            description: "Записывает видео сессий пользователей",
          },
        },
        {
          name: "clickmap",
          label: "Включить Карту кликов",
          type: "checkbox",
          defaultValue: true,
          admin: {
            description: "Показывает места кликов на странице",
          },
        },
        {
          name: "trackLinks",
          label: "Отслеживать внешние ссылки",
          type: "checkbox",
          defaultValue: true,
          admin: {
            description: "Отслеживает переходы по внешним ссылкам",
          },
        },
        {
          name: "accurateTrackBounce",
          label: "Точный показатель отказов",
          type: "checkbox",
          defaultValue: true,
          admin: {
            description: "Улучшает точность измерения отказов",
          },
        },
      ],
    },
    {
      type: "group",
      name: "metaTags",
      label: "Мета-теги по умолчанию",
      fields: [
        {
          name: "defaultTitle",
          label: "Заголовок по умолчанию",
          type: "text",
          admin: {
            placeholder: "Название сайта",
          },
        },
        {
          name: "defaultDescription",
          label: "Описание по умолчанию",
          type: "textarea",
          admin: {
            placeholder: "Описание сайта для поисковых систем",
          },
        },
        {
          name: "defaultKeywords",
          label: "Ключевые слова по умолчанию",
          type: "text",
          admin: {
            placeholder: "ключевые, слова, через, запятую",
          },
        },
      ],
    },
  ],
}
