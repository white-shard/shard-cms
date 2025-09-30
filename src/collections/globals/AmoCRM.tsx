import { GlobalConfig } from "payload"

export const AmoCRM: GlobalConfig = {
  slug: "amo-crm",
  label: "Настройки AmoCRM",
  fields: [
    {
      name: "subdomain",
      label: "Субдомен",
      admin: {
        description: "https://XXXXXXXXX.amocrm.ru/",
      },
      type: "text",
      required: true,
    },
    {
      name: "integrationId",
      label: "ID интеграции",
      type: "text",
      required: true,
    },
    {
      name: "integrationSecret",
      label: "Secret интеграции",
      type: "text",
      required: true,
    },
    {
      name: "status",
      label: "Статус подключения",
      type: "text",
      admin: {
        readOnly: true,
      },
      defaultValue: "❌ CRM не подключена",
    },
    {
      name: "connectButton",
      type: "ui",
      admin: {
        components: {
          Field: "@/components/payload/AmoConnectButton",
        },
      },
    },
    {
      name: "access_token",
      label: "Токен доступа",
      type: "text",
      hidden: true,
    },
    {
      name: "refresh_token",
      label: "Токен обновления",
      type: "text",
      hidden: false,
    },
    {
      name: "server_time",
      label: "Время сервера",
      type: "number",
      hidden: true,
    },
    {
      name: "expires_in",
      label: "Время истечения токена",
      type: "number",
      hidden: true,
    },
  ],
}
