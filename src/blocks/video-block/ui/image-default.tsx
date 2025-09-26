import { VideoBlockFields } from "../types"
type Props = {
  fields: VideoBlockFields
}

export function VideoBlockDefault({ fields }: Props) {
  if (!fields?.video?.url) {
    return (
      <div className="container mx-auto relative h-full flex justify-center items-center px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <div className="text-center text-gray-500">
          <p className="text-base sm:text-lg lg:text-xl">Видео не загружено</p>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto relative h-full flex justify-center px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
      <div className="w-full max-w-4xl lg:max-w-6xl">
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
          <p className="text-sm sm:text-base lg:text-lg text-gray-600 mt-3 sm:mt-4 text-center leading-relaxed">
            {fields.video.alt}
          </p>
        )}
      </div>
    </div>
  )
}
