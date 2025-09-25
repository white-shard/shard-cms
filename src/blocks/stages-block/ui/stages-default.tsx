import { StagesBlockFields } from "../types"

type Props = {
  fields: StagesBlockFields
}

export function StagesBlockDefault({ fields }: Props) {
  return (
    <div className="flex flex-col container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 gap-6 sm:gap-8">
      <div className="grid gap-3 sm:gap-4">
        <span className="text-3xl sm:text-4xl lg:text-5xl leading-tight">
          {fields.heading}
        </span>
        {fields.description && (
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-full lg:max-w-128 leading-relaxed">
            {fields.description}
          </p>
        )}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 sm:mt-8 gap-4 sm:gap-6 lg:gap-8">
        {fields.stages.map((stage, index) => (
          <div
            key={index}
            className="flex flex-col gap-2 sm:gap-3 bg-gray-200 rounded-lg p-3 sm:p-4 lg:p-6 h-40 sm:h-48 lg:h-56 overflow-hidden"
          >
            <span className="text-base sm:text-lg lg:text-xl leading-tight line-clamp-2">
              {stage.heading}
            </span>
            {stage.description && (
              <p className="text-xs sm:text-sm lg:text-base text-gray-600 leading-relaxed line-clamp-4 flex-1">
                {stage.description}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
