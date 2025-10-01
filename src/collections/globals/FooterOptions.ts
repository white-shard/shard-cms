import { iconList } from "@/lib/icons"
import { GlobalConfig } from "payload"
import { ActionButton } from "../fields/action"

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
      name: "actionButtons",
      label: "Кнопки действий",
      type: "array",
      fields: ActionButton,
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
      name: "quickActions",
      label: "Быстрые действия",
      type: "array",
      fields: ActionButton,
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
      name: "footerLinks",
      label: "Ссылки",
      type: "array",
      fields: [
        {
          type: "row",
          fields: [
            {
              name: "label",
              label: "Название",
              type: "text",
              required: true,
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
      name: "rights",
      label: "Права защищены",
      type: "text",
      defaultValue: "© 2024 Dr.Koshakov. Все права защищены.",
    },
  ],
}
