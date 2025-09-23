import { VideoBlockFields } from "../types"
type Props = {
  fields: VideoBlockFields
}

export function VideoBlockDefault({ fields }: Props) {
  if (!fields?.video?.url) {
    return (
      <div className="container mx-auto relative h-full flex justify-center items-center">
        <div className="text-center text-gray-500">
          <p>Видео не загружено</p>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto relative h-full flex justify-center py-8">
      <div className="w-full max-w-6xl">
        <video
          src={fields.video.url}
          className="w-full h-auto rounded-lg shadow-lg"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={
            fields.video.sizes?.md?.url ||
            fields.video.sizes?.sm?.url ||
            undefined
          }
        >
          <source
            src={fields.video.url}
            type={fields.video.mimeType || "video/mp4"}
          />
          Ваш браузер не поддерживает видео.
        </video>
        {fields.video.alt && (
          <p className="text-sm text-gray-600 mt-2 text-center">
            {fields.video.alt}
          </p>
        )}
      </div>
    </div>
  )
}
