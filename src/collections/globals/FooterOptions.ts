import { iconList } from "@/lib/icons"
import { GlobalConfig } from "payload"

export const FooterOptions: GlobalConfig = {
  slug: "footer-options",
  label: "Настройки подвала",
  fields: [
    {
      name: "thesis",
      label: "Тезис (текст под логотипом)",
      type: "text",
      defaultValue: "Европейское лечение в Екатеринбурге",
    },
    {
      name: "links",
      label: "Ссылки (социальные сети)",
      type: "array",
      fields: [
        {
          type: "row",
          fields: [
            {
              name: "icon",
              label: "Иконка",
              type: "select",
              required: true,
              options: Object.keys(iconList).map((key) => ({
                label: key,
                value: key,
              })),
            },
            {
              name: "url",
              label: "URL",
              type: "text",
              required: true,
            },
          ],
        },
      ],
    },
    {
      name: "services",
      label: "Отображать услуги",
      type: "array",
      fields: [
        {
          type: "row",
          fields: [
            {
              name: "page",
              label: "Страница",
              type: "relationship",
              relationTo: "pages",
              required: true,
            },
            {
              name: "title",
              label: "Альтернативное название",
              type: "text",
              required: false,
            },
          ],
        },
      ],
    },
    {
      name: "warning",
      label: "Предупреждение",
      type: "textarea",
    },
    {
      name: "documentLinks",
      label: "Ссылки на документы",
      type: "array",
      fields: [
        {
          name: "document",
          label: "Документ",
          relationTo: "documents",
          type: "relationship",
          required: true,
        },
      ],
    },
    {
      name: "rights",
      label: "Права защищены",
      type: "text",
      defaultValue: "© 2024 Dr.Koshakov. Все права защищены.",
    },
  ],
}
