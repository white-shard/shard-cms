import { iconList } from "@/lib/icons"
import { GlobalConfig } from "payload"

export const GlobalSettings: GlobalConfig = {
  slug: "globalSettings",
  fields: [
    {
      name: "display",
      type: "group",
      fields: [
        {
          name: "thesis",
          type: "text",
          defaultValue: "Европейское лечение в Екатеринбурге",
          required: true,
        },
        {
          name: "links",
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
      ],
    },
    {
      name: "footer",
      label: "Footer",
      type: "group",
      fields: [
        {
          name: "services",
          label: "Services",
          type: "array",
          fields: [
            {
              name: "item",
              type: "relationship",
              relationTo: "services",
            },
          ],
        },
      ],
    },
  ],
}
