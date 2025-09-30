import { GlobalConfig } from "payload"

export const SEOOptions: GlobalConfig = {
  slug: "seo-options",
  label: "Настройки SEO",
  fields: [
    {
      name: "headScript",
      label: "Скрипт для head",
      type: "textarea",
      required: false,
      admin: {
        placeholder: "<!-- Вставьте HTML код скрипта -->",
        description:
          "HTML код скрипта, который будет добавлен в <head> страницы",
      },
    },
  ],
}
