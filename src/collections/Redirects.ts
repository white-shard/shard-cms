import { CollectionConfig } from "payload"

export const Redirects: CollectionConfig = {
  slug: "redirects",
  labels: {
    singular: "Переадресация",
    plural: "Переадресации",
  },
  admin: {
    useAsTitle: "shortUrl",
    defaultColumns: ["shortUrl", "targetUrl", "clicks", "createdAt"],
  },
  fields: [
    {
      name: "shortUrl",
      label: "Короткая ссылка",
      type: "text",
      required: true,
      unique: true,
      admin: {
        description: `Короткая ссылка для переадресации (2-50 символов, только буквы, цифры, дефисы и подчеркивания). Будет доступна по адресу ${process.env.NEXT_PUBLIC_ORIGIN}/l/<ваша-ссылка>`,
      },
      validate: (val: any) => {
        if (!val || typeof val !== "string")
          return "Короткая ссылка обязательна"
        if (!/^[a-zA-Z0-9-_]+$/.test(val)) {
          return "Короткая ссылка может содержать только буквы, цифры, дефисы и подчеркивания"
        }
        if (val.length < 2) {
          return "Короткая ссылка должна содержать минимум 2 символа"
        }
        if (val.length > 50) {
          return "Короткая ссылка не должна превышать 50 символов"
        }
        return true
      },
    },
    {
      name: "targetUrl",
      label: "Целевая ссылка",
      type: "text",
      required: true,
      admin: {
        description:
          "Полная ссылка, на которую будет перенаправлен пользователь",
        placeholder: "https://example.com/page",
      },
      validate: (val: any) => {
        if (!val || typeof val !== "string") return "Целевая ссылка обязательна"
        try {
          new URL(val)
          return true
        } catch {
          return "Введите корректный URL"
        }
      },
    },
    {
      name: "title",
      label: "Название",
      type: "text",
      admin: {
        description: "Описание переадресации для удобства управления",
        placeholder: "Промо-акция на импланты",
      },
    },
    {
      name: "active",
      label: "Активна",
      type: "checkbox",
      defaultValue: true,
      admin: {
        description: "Включить или отключить переадресацию",
      },
    },
    {
      name: "clicks",
      label: "Количество переходов",
      type: "number",
      defaultValue: 0,
      admin: {
        readOnly: true,
        description: "Автоматически подсчитывается при каждом переходе",
      },
    },
    {
      name: "lastClick",
      label: "Последний переход",
      type: "date",
      admin: {
        readOnly: true,
        description: "Дата и время последнего перехода",
      },
    },
    {
      name: "expiresAt",
      label: "Истекает",
      type: "date",
      admin: {
        description: "Дата истечения переадресации (необязательно)",
      },
    },
    {
      name: "utmSource",
      label: "UTM Source",
      type: "text",
      admin: {
        description: "Источник трафика для аналитики",
        placeholder: "google",
      },
    },
    {
      name: "utmMedium",
      label: "UTM Medium",
      type: "text",
      admin: {
        description: "Канал трафика для аналитики",
        placeholder: "cpc",
      },
    },
    {
      name: "utmCampaign",
      label: "UTM Campaign",
      type: "text",
      admin: {
        description: "Название кампании для аналитики",
        placeholder: "spring_promo",
      },
    },
  ],
}
