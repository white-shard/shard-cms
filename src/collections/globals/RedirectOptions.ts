import { GlobalConfig } from "payload"

export const RedirectOptions: GlobalConfig = {
  slug: "redirect-options",
  label: "Настройки переадресаций",
  fields: [
    {
      name: "enabled",
      label: "Включить систему переадресаций",
      type: "checkbox",
      defaultValue: true,
      admin: {
        description: "Включить или отключить обработку коротких ссылок",
      },
    },
    {
      name: "defaultRedirect",
      label: "Страница по умолчанию для несуществующих ссылок",
      type: "relationship",
      relationTo: "pages",
      admin: {
        description:
          "Страница, на которую будет перенаправлен пользователь, если короткая ссылка не найдена",
      },
    },
    {
      name: "trackClicks",
      label: "Отслеживать клики по ссылкам",
      type: "checkbox",
      defaultValue: true,
      admin: {
        description:
          "Включить подсчет количества переходов по коротким ссылкам",
      },
    },
  ],
}
