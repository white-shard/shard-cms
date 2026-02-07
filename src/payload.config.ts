// storage-adapter-import-placeholder
// Загружаем переменные окружения из .env файла
import { config } from "dotenv"
import { fileURLToPath } from "url"
import path from "path"

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)
// Определяем корневую директорию проекта (на уровень выше src)
const rootDir = path.resolve(dirname, "..")
// Загружаем .env файл из корневой директории
config({ path: path.resolve(rootDir, ".env") })

import { postgresAdapter } from "@payloadcms/db-postgres"
import { lexicalEditor } from "@payloadcms/richtext-lexical"
import { buildConfig } from "payload"
import sharp from "sharp"

import { s3Storage } from "@payloadcms/storage-s3"
import { Documents } from "./collections/Documents"
import { Forms } from "./collections/Forms"
import { Media } from "./collections/Media"
import { Pages } from "./collections/Pages"
import { Redirects } from "./collections/Redirects"
import { Services } from "./collections/Services"
import { Specialties } from "./collections/Specialties"
import { Staff } from "./collections/Staff"
import { Users } from "./collections/Users"
import { AmoCRM } from "./collections/globals/AmoCRM"
import { FooterOptions } from "./collections/globals/FooterOptions"
import { HeaderOptions } from "./collections/globals/HeaderOptions"
import { RedirectOptions } from "./collections/globals/RedirectOptions"
import { SEOOptions } from "./collections/globals/SEOptions"
import { SiteOptions } from "./collections/globals/SiteOptions"
import { migrations } from "./migrations"

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
    components: {
      graphics: {
        Icon: "/components/payload/Icon",
        Logo: "/components/payload/Logo",
      },
    },
  },
  collections: [
    Users,
    Media,
    Documents,
    Pages,
    Redirects,
    Services,
    Staff,
    Specialties,
    Forms,
  ],
  globals: [
    HeaderOptions,
    FooterOptions,
    SiteOptions,
    SEOOptions,
    AmoCRM,
    RedirectOptions,
  ],
  // email: nodemailerAdapter(smtpNodemailerConfig),
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || "",
  typescript: {
    outputFile: path.resolve(dirname, "payload-types.ts"),
  },
  db: postgresAdapter({
    pool: {
      connectionString: (() => {
        const uri = process.env.DATABASE_URI
        if (!uri) {
          const envPath = path.resolve(rootDir, ".env")
          throw new Error(
            `DATABASE_URI environment variable is not set. ` +
            `Please set it in your .env file (expected at: ${envPath}) or environment variables. ` +
            `Current working directory: ${process.cwd()}`
          )
        }
        return uri
      })(),
    },
    push: true, // Автоматическое создание схемы из конфигурации
    prodMigrations: migrations, // Миграции для production
  }),
  sharp,
  plugins: [
    s3Storage({
      collections: {
        media: true,
      },
      bucket: process.env.S3_BUCKET_NAME || "",
      config: {
        region: process.env.S3_REGION || "",
        endpoint: process.env.S3_ENDPOINT || "",
        credentials: {
          accessKeyId: process.env.S3_ACCESS_KEY || "",
          secretAccessKey: process.env.S3_SECRET_KEY || "",
        },
        requestHandler: {
          requestTimeout: 30000,
          connectionTimeout: 10000,
        },
        maxAttempts: 3,
        retryMode: "adaptive",
        forcePathStyle: true,
      },
    }),
  ],
})
