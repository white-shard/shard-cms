import { Check } from "lucide-react"
import { AdvantagesChallangesBlockFields } from "../types"
import Image from "next/image"

type Props = {
  fields: AdvantagesChallangesBlockFields
}

export function ACDefault({ fields }: Props) {
  return (
    <div className="stroke-accent relative pt-16 sm:pt-24 lg:pt-32 py-16 sm:py-24 lg:py-32">
      <div className="container mx-auto grid grid-rows-1 lg:grid-rows-2 px-4 sm:px-6 lg:px-8 gap-16 sm:gap-24 lg:gap-32">
        <div className="flex flex-col gap-4 sm:gap-6">
          <span className="text-3xl sm:text-4xl lg:text-5xl leading-tight lg:max-w-1/2 lg:px-4">
            {fields.advantages.heading}
          </span>
          {fields.advantages.description && (
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed max-w-full lg:max-w-2/5">
              {fields.advantages.description}
            </p>
          )}
          <div className="flex flex-col lg:flex-row gap-8 sm:gap-12 lg:gap-16 xl:gap-32 justify-between mt-6 sm:mt-8">
            <div className="flex flex-1 order-2 lg:order-1 max-w-md mx-auto lg:max-w-none items-center">
              <div className="relative aspect-square w-full">
                {fields.advantages.img ? (
                  <Image
                    src={fields.advantages.img.url!}
                    fill
                    alt={fields.advantages.img.alt || ""}
                    className="object-contain"
                  />
                ) : null}
              </div>
            </div>
            <div className="flex-1 flex flex-col gap-4 sm:gap-6 order-1 lg:order-2">
              {fields.advantages.advantages.map((advantage, index) => (
                <div key={index} className="flex gap-3 sm:gap-4">
                  <Check className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-accent flex-shrink-0 mt-1" />
                  <div className="flex flex-col items-start gap-2 sm:gap-3">
                    <span className="text-xl sm:text-2xl lg:text-3xl leading-tight">
                      {advantage.heading}
                    </span>
                    {advantage.description && (
                      <p className="text-sm sm:text-base lg:text-xl text-gray-600 leading-relaxed">
                        {advantage.description}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 sm:gap-6">
          <div className="w-full flex flex-col items-start lg:items-end gap-4 sm:gap-6">
            <span className="text-3xl sm:text-4xl lg:text-5xl leading-tight text-left lg:max-w-1/2 lg:px-4 lg:text-right">
              {fields.challenges.heading}
            </span>
            {fields.challenges.description && (
              <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed max-w-full lg:max-w-2/5 text-left lg:text-right">
                {fields.challenges.description}
              </p>
            )}
          </div>
          <div className="flex flex-col lg:flex-row gap-8 sm:gap-12 lg:gap-16 xl:gap-32 justify-between mt-6 sm:mt-8">
            <div className="flex-1 flex flex-col gap-4 sm:gap-6 order-1 lg:order-1">
              {fields.challenges.challenges.map((challenge, index) => (
                <div key={index} className="flex gap-3 sm:gap-4">
                  <Check className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-accent flex-shrink-0 mt-1" />
                  <div className="flex flex-col items-start gap-2 sm:gap-3">
                    <span className="text-xl sm:text-2xl lg:text-3xl leading-tight">
                      {challenge.heading}
                    </span>
                    {challenge.description && (
                      <p className="text-sm sm:text-base lg:text-xl text-gray-600 leading-relaxed">
                        {challenge.description}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <div className="flex flex-1 order-2 lg:order-2 max-w-md mx-auto lg:max-w-none items-center">
              <div className="relative aspect-square w-full">
                {fields.challenges.img ? (
                  <Image
                    src={fields.challenges.img.url!}
                    fill
                    alt={fields.challenges?.img?.alt || ""}
                    className="object-contain"
                  />
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
      <svg
        width="100%"
        height="100%"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className="absolute top-0 hidden lg:block"
      >
        <line
          x1="0%"
          y1="0%"
          x2="40%"
          y2="50"
          strokeOpacity="0.5"
          strokeWidth="4"
          strokeDasharray="8 8"
        />
        <line
          x1="40%"
          y1="50"
          x2="50%"
          y2="150"
          strokeOpacity="0.5"
          strokeWidth="4"
          strokeDasharray="8 8"
        />
        <line
          x1="50%"
          y1="150"
          x2="50%"
          y2="50%"
          strokeOpacity="0.5"
          strokeWidth="4"
          strokeDasharray="8 8"
        />
        <line
          x1="100%"
          y1="48%"
          x2="50%"
          y2="50%"
          strokeOpacity="0.5"
          strokeWidth="4"
          strokeDasharray="8 8"
        />
        <line
          x1="50%"
          y1="50%"
          x2="0%"
          y2="57%"
          strokeOpacity="0.5"
          strokeWidth="4"
          strokeDasharray="8 8"
        />
      </svg>
    </div>
  )
}
