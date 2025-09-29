import type { CollectionConfig } from "payload"

export const Media: CollectionConfig = {
  slug: "media",
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "alt",
      type: "text",
      required: false,
    },
  ],
  upload: {
    mimeTypes: ["image/*", "video/*"],
    imageSizes: [
      {
        name: "lg",
        width: 2560,
        height: 1440,
      },
      {
        name: "md",
        width: 1920,
        height: 1080,
      },
      {
        name: "sm",
        width: 1080,
        height: 720,
      },
    ],
    adminThumbnail: ({ doc }: { doc: Record<string, unknown> }) => {
      if (
        typeof doc.mimeType === "string" &&
        doc.mimeType.startsWith("video/")
      ) {
        return (doc.thumbnail as string) || (doc.url as string)
      }
      return doc.url as string
    },
  },
}
