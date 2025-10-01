import { createAmoCRMService, getAmoCRMAuth } from "@/config/amo-crm.config"
import { AmoCRMService, CRMAuth } from "./amocrm.service"

/**
 * Получить настроенный сервис AmoCRM
 * @returns Promise<AmoCRMService | null>
 */
export async function getAmoCRMService(): Promise<AmoCRMService | null> {
  return await createAmoCRMService()
}

/**
 * Получить данные авторизации AmoCRM
 * @returns Promise<CRMAuth | null>
 */
export async function getAmoCRMAuthData(): Promise<CRMAuth | null> {
  return await getAmoCRMAuth()
}

/**
 * Проверить, настроен ли AmoCRM
 * @returns Promise<boolean>
 */
export async function isAmoCRMConfigured(): Promise<boolean> {
  const service = await getAmoCRMService()
  const auth = await getAmoCRMAuthData()
  return service !== null && auth !== null
}

// Re-export types and service
export { AmoCRMService, type CRMAuth, type CRMEntity } from "./amocrm.service"
