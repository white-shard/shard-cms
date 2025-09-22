import { Check } from "lucide-react"
import { AdvantagesChallangesBlockFields } from "../types"
import Image from "next/image"

type Props = {
  fields: AdvantagesChallangesBlockFields
}

export function ACDefault({ fields }: Props) {
  return (
    <div className="stroke-accent relative pt-32 py-32">
      <div className="container mx-auto grid grid-rows-2 px-8 gap-32">
        <div className="flex flex-col gap-4">
          <span className="text-4xl">{fields.advantages.heading}</span>
          {fields.advantages.description && (
            <p className="text-xl text-gray-600">
              {fields.advantages.description}
            </p>
          )}
          <div className="flex gap-32 justify-between mt-8">
            <div className="flex-1 aspect-square relative">
              {fields.advantages.img ? (
                <Image
                  src={fields.advantages.img.url!}
                  fill
                  alt={fields.advantages.img.alt || ""}
                  className="object-contain"
                />
              ) : null}
            </div>
            <div className="flex-1 flex flex-col gap-6 w-4/5">
              {fields.advantages.advantages.map((advantage, index) => (
                <div key={index} className="flex gap-2">
                  <Check className="size-10 text-accent" />
                  <div className="flex flex-col items-start gap-2">
                    <span className="text-2xl">{advantage.heading}</span>
                    {advantage.description && (
                      <p className="text-xl text-gray-600">
                        {advantage.description}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="w-full flex flex-col items-end gap-4">
            <span className="text-4xl">{fields.challenges.heading}</span>
            {fields.challenges.description && (
              <p className="text-xl text-gray-600">
                {fields.challenges.description}
              </p>
            )}
          </div>
          <div className="flex gap-32 justify-between mt-8">
            <div className="flex-1 flex flex-col gap-6 w-4/5">
              {fields.challenges.challenges.map((challenge, index) => (
                <div key={index} className="flex gap-2">
                  <Check className="size-10 text-accent" />
                  <div className="flex flex-col items-start gap-2">
                    <span className="text-2xl">{challenge.heading}</span>
                    {challenge.description && (
                      <p className="text-xl text-gray-600">
                        {challenge.description}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <div className="flex-1 aspect-square relative">
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
      <svg
        width="100%"
        height="100%"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className="absolute top-0"
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
