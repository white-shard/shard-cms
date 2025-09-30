import z from "zod"

export const recordSchema = z.object({
  fullname: z
    .string()
    .min(1, "Имя обязательно для заполнения")
    .min(2, "Имя должно содержать минимум 2 символа")
    .max(64, "Имя не должно превышать 64 символа"),

  phone: z
    .string()
    .min(1, "Телефон обязателен для заполнения")
    .refine((value) => {
      const cleanPhone = value.replace(/[\s\-\(\)]/g, "")
      return cleanPhone.startsWith("+7") || cleanPhone.startsWith("8")
    }, "Номер телефона должен начинаться с +7 или 8")
    .refine((value) => {
      const cleanPhone = value.replace(/[\s\-\(\)]/g, "")
      const phoneRegex = /^(\+7|8)[0-9]{10}$/
      return phoneRegex.test(cleanPhone)
    }, "Введите корректный номер телефона"),

  agreement: z
    .boolean()
    .refine(
      (val) => val === true,
      "Необходимо согласие на обработку персональных данных",
    ),
})

export type RecordSchema = z.infer<typeof recordSchema>
