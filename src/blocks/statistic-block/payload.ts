import { Block } from "payload"

export const StatisticBlock: Block = {
  slug: "statistic",
  labels: {
    singular: "Statistic Block",
    plural: "Statistic Blocks",
  },
  admin: {
    disableBlockName: true,
  },
  fields: [
    {
      type: "row",
      fields: [
        {
          name: "expirience",
          label: "Лет опыта",
          type: "number",
          required: true,
        },
        {
          name: "patients",
          label: "Довольных пациентов",
          type: "number",
          required: true,
        },
      ],
    },
    {
      type: "row",
      fields: [
        {
          name: "reviews",
          label: "Положительных отзывов",
          type: "number",
          min: 0,
          max: 100,
          required: true,
        },
        {
          name: "support",
          label: "Поддержка и консультация",
          type: "text",
          required: true,
        },
      ],
    },
  ],
}

/*
admin: {
        condition: (_, siblingData) => {
          return siblingData?.variant === "block2"
        },
      },
*/
