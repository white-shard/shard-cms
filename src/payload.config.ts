// storage-adapter-import-placeholder
import { postgresAdapter } from "@payloadcms/db-postgres"
import { payloadCloudPlugin } from "@payloadcms/payload-cloud"
import { lexicalEditor } from "@payloadcms/richtext-lexical"
import path from "path"
import { buildConfig } from "payload"
import sharp from "sharp"
import { fileURLToPath } from "url"

import { GlobalSettings } from "./collections/globals/GeneralSettings"
import { Navigation } from "./collections/globals/Navigation"
import { Media } from "./collections/Media"
import { Pages } from "./collections/Pages"
import { Services } from "./collections/Services"
import { Users } from "./collections/Users"
import { Staff } from "./collections/Staff"

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

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
  collections: [Users, Media, Pages, Services, Staff],
  globals: [Navigation, GlobalSettings],
  // email: nodemailerAdapter(smtpNodemailerConfig),
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || "",
  typescript: {
    outputFile: path.resolve(dirname, "payload-types.ts"),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI || "",
    },
  }),
  sharp,
  plugins: [
    payloadCloudPlugin(),
    // s3Storage({
    //   collections: {
    //     media: true,
    //   },
    //   bucket: process.env.S3_BUCKET_NAME || "",
    //   config: {
    //     region: process.env.S3_REGION || "",
    //     endpoint: process.env.S3_ENDPOINT || "",
    //     credentials: {
    //       accessKeyId: process.env.S3_ACCESS_KEY || "",
    //       secretAccessKey: process.env.S3_SECRET_KEY || "",
    //     },
    //   },
    // }),
    // storage-adapter-placeholder
  ],
})
