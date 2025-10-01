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
      name: "contactPhoneField",
      label: "ID поля телефона контакта",
      type: "number",
      admin: {
        placeholder: "ID поля в amoCRM",
        condition: (data) => data.status === "✅ CRM подключена",
      },
    },
    {
      name: "utm_source",
      label: "ID поля utm_source",
      type: "number",
      admin: {
        placeholder: "ID поля в amoCRM",
        condition: (data) => data.status === "✅ CRM подключена",
      },
    },
    {
      name: "utm_medium",
      label: "ID поля utm_medium",
      type: "number",
      admin: {
        placeholder: "ID поля в amoCRM",
        condition: (data) => data.status === "✅ CRM подключена",
      },
    },
    {
      name: "utm_content",
      label: "ID поля utm_content",
      type: "number",
      admin: {
        placeholder: "ID поля в amoCRM",
        condition: (data) => data.status === "✅ CRM подключена",
      },
    },
    {
      name: "utm_term",
      label: "ID поля utm_term",
      type: "number",
      admin: {
        placeholder: "ID поля в amoCRM",
        condition: (data) => data.status === "✅ CRM подключена",
      },
    },
    {
      name: "utm_campaign",
      label: "ID поля utm_campaign",
      type: "number",
      admin: {
        placeholder: "ID поля в amoCRM",
        condition: (data) => data.status === "✅ CRM подключена",
      },
    },
    {
      name: "_ga",
      label: "ID поля Google Analytics",
      type: "number",
      admin: {
        placeholder: "ID поля в amoCRM",
        condition: (data) => data.status === "✅ CRM подключена",
      },
    },
    {
      name: "_ym_uid",
      label: "ID поля Yandex Metrica",
      type: "number",
      admin: {
        placeholder: "ID поля в amoCRM",
        condition: (data) => data.status === "✅ CRM подключена",
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
      hidden: true,
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
