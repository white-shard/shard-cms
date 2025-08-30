import { NodemailerAdapterArgs } from "@payloadcms/email-nodemailer"

const smtpNodemailerConfig: NodemailerAdapterArgs = {
  defaultFromAddress: process.env.SMTP_USERNAME as string,
  defaultFromName: process.env.PROJECT_NAME || "ShardCMS",
  transportOptions: {
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: false,
    auth: {
      user: process.env.SMTP_USERNAME as string,
      pass: process.env.SMTP_PASSWORD as string,
    },
  },
}

export default smtpNodemailerConfig
