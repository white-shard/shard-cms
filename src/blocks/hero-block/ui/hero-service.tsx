import { MediaRenderer } from "@/components/media-renderer"
import { ActionButton } from "@/lib/actions/action-button"
import { HeroBlockFields } from "../types"

// Функция для определения типа медиа
const isVideo = (media: { mimeType?: string | null }) => {
  return media?.mimeType?.startsWith("video/")
}

type Props = {
  fields: HeroBlockFields
}

export function HeroBlockService({ fields }: Props) {
  return (
    <div className="flex flex-col lg:flex-row items-center py-8 mx-auto w-full container px-4 sm:px-6 lg:px-8">
      {/* Заголовки - только на мобилке */}
      <div className="flex-1 flex flex-col w-full lg:w-auto order-1 lg:hidden">
        {fields.beforeHeading && (
          <h2 className="text-2xl sm:text-3xl lg:text-4xl text-gray-400 -mb-2 sm:-mb-4">
            {fields.beforeHeading}
          </h2>
        )}
        <h1 className="text-primary text-3xl sm:text-4xl lg:text-5xl drop-shadow-lg md:drop-shadow-none leading-tight">
          {fields.heading}
        </h1>
        {fields.thesis && (
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-full lg:max-w-128 mt-4 sm:mt-6 leading-relaxed">
            {fields.thesis}
          </p>
        )}
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 mt-4 sm:mt-6">
          {fields.price && (
            <p className="text-3xl sm:text-4xl lg:text-5xl text-accent">
              {fields.price} ₽
            </p>
          )}
          {fields.old_price && (
            <p className="text-2xl sm:text-3xl lg:text-4xl text-gray-400">
              <span className="line-through">{fields.old_price}</span> ₽
            </p>
          )}
        </div>
      </div>

      {/* Картинка/видео */}
      <div className="flex-1 flex items-center justify-center mt-8 lg:mt-0 w-full lg:w-auto order-2 lg:order-1">
        {fields.img?.url ? (
          <div className="flex-1 max-w-128 h-128 relative">
            <MediaRenderer media={fields.img} />{" "}
          </div>
        ) : null}
      </div>

      {/* Описание и кнопки - только на мобилке */}
      <div className="flex-1 flex flex-col w-full lg:w-auto order-3 lg:hidden">
        {!!fields.actions.length && (
          <div className="w-full flex flex-wrap flex-col sm:flex-row gap-4 sm:gap-5 mt-6 sm:mt-8">
            {fields.actions.map((action, index) => (
              <ActionButton key={index} data={action} />
            ))}
          </div>
        )}
        {fields.description && (
          <p className="text-base sm:text-lg lg:text-xl text-gray-400 max-w-full lg:max-w-120 mt-8 sm:mt-12 text-justify leading-relaxed">
            {fields.description}
          </p>
        )}
      </div>

      {/* Десктопная версия - все вместе */}
      <div className="hidden lg:flex flex-1 flex-col w-full lg:w-auto">
        {fields.beforeHeading && (
          <h2 className="text-2xl sm:text-3xl lg:text-4xl text-gray-400 -mb-2 sm:-mb-4">
            {fields.beforeHeading}
          </h2>
        )}
        <h1 className="text-primary text-3xl sm:text-4xl lg:text-5xl drop-shadow-lg md:drop-shadow-none leading-tight">
          {fields.heading}
        </h1>
        {fields.thesis && (
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-full lg:max-w-128 mt-4 sm:mt-6 leading-relaxed">
            {fields.thesis}
          </p>
        )}
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 mt-4 sm:mt-6">
          {fields.price && (
            <p className="text-3xl sm:text-4xl lg:text-5xl text-accent">
              {fields.price} ₽
            </p>
          )}
          {fields.old_price && (
            <p className="text-2xl sm:text-3xl lg:text-4xl text-gray-400">
              <span className="line-through">{fields.old_price}</span> ₽
            </p>
          )}
        </div>
        {!!fields.actions.length && (
          <div className="w-full flex flex-wrap flex-col sm:flex-row gap-4 sm:gap-5 mt-6 sm:mt-8">
            {fields.actions.map((action, index) => (
              <ActionButton key={index} data={action} />
            ))}
          </div>
        )}
        {fields.description && (
          <p className="text-base sm:text-lg lg:text-xl text-gray-400 max-w-full lg:max-w-120 mt-8 sm:mt-12 text-justify leading-relaxed">
            {fields.description}
          </p>
        )}
      </div>
    </div>
  )
}
