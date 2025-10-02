import { GlobalConfig } from "payload"

export const SiteOptions: GlobalConfig = {
  slug: "options",
  label: "Настройки сайта",
  fields: [
    {
      type: "row",
      fields: [
        {
          name: "orgNameShort",
          label: "Название организации (короткое)",
          type: "text",
          defaultValue: "Dr.Koshakov",
        },
        {
          name: "orgNameFull",
          label: "Полное название организации",
          type: "text",
          defaultValue:
            'ОБЩЕСТВО С ОГРАНИЧЕННОЙ ОТВЕТСТВЕННОСТЬЮ "ДОКТОР КОШАКОВ"',
        },
      ],
    },
    {
      type: "row",
      fields: [
        {
          name: "addressShort",
          label: "Адрес организации (короткий)",
          type: "text",
          defaultValue:
            "г. Екатеринбург, метро ДинамоОлимпийская Набережная,  9/1 ",
        },
        {
          name: "addressFull",
          label: "Полный адрес организации",
          type: "text",
          defaultValue:
            "620027, РОССИЯ, обл СВЕРДЛОВСКАЯ, г  ЕКАТЕРИНБУРГ, наб ОЛИМПИЙСКАЯ, ДОМ 9/1, оф ЭТАЖ 1,2",
        },
      ],
    },
    {
      type: "row",
      fields: [
        {
          name: "ogrn",
          label: "ОГРН",
          type: "text",
          defaultValue: "1226600081718",
        },
        {
          name: "inn",
          label: "ИНН",
          type: "text",
          defaultValue: "6678126210",
        },
      ],
    },
    {
      type: "row",
      fields: [
        {
          name: "kpp",
          label: "КПП",
          type: "text",
          defaultValue: "667801001",
        },
        {
          name: "okpo",
          label: "ОКПО",
          type: "text",
          defaultValue: "79321316",
        },
      ],
    },
    {
      type: "row",
      fields: [
        {
          name: "workTimeStart",
          label: "Время работы (начало)",
          type: "text",
          defaultValue: "09:00",
          admin: {
            placeholder: "HH:MM",
          },
        },
        {
          name: "workTimeEnd",
          label: "Время работы (конец)",
          type: "text",
          defaultValue: "21:00",
          admin: {
            placeholder: "HH:MM",
          },
        },
      ],
    },
    {
      name: "phones",
      label: "Рабочие номера телефона",
      type: "array",
      defaultValue: [
        { phone: "+7 (343) 287-77-89", hasTelegram: false, hasWhatsapp: false },
        { phone: "+7 (343) 287-77-89", hasTelegram: false, hasWhatsapp: false },
      ],
      fields: [
        {
          type: "row",
          fields: [
            {
              name: "phone",
              label: "Номер телефона",
              type: "text",
              required: true,
            },
            {
              name: "hasTelegram",
              label: "Привязан телеграм",
              type: "checkbox",
              defaultValue: false,
              required: true,
            },
            {
              name: "hasWhatsapp",
              label: "Привязан whatsapp",
              type: "checkbox",
              defaultValue: false,
              required: true,
            },
          ],
        },
      ],
    },
    {
      name: "emails",
      label: "Рабочие адреса электронной почты",
      type: "array",
      defaultValue: [{ mail: "dr.koshakov.clinic@gmail.com" }],
      fields: [
        {
          type: "row",
          fields: [
            {
              name: "mail",
              label: "Почтовый адрес",
              type: "text",
              required: true,
            },
          ],
        },
      ],
    },
  ],
}
