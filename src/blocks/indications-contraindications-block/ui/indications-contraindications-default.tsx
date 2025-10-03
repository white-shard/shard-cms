import { IndicationsContraindicationsBlockFields } from "../types"

type Props = {
  fields: IndicationsContraindicationsBlockFields
}

export function IndicationsContraindicationsDefault({ fields }: Props) {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
      <div className="flex flex-col lg:flex-row justify-center items-start relative gap-12 sm:gap-16 lg:gap-20 xl:gap-32">
        <div className="text-gray-400 w-full lg:flex-1">
          <span className="text-4xl sm:text-5xl lg:text-5xl xl:text-6xl block mb-6 sm:mb-8 leading-tight">
            ПОКАЗАНИЯ
          </span>
          <ul className="text-lg sm:text-xl lg:text-2xl xl:text-3xl space-y-3 sm:space-y-4 leading-relaxed">
            {fields.indications.map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="text-accent text-xl sm:text-2xl lg:text-3xl">
                  —
                </span>
                <span>{item.item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="text-primary w-full lg:flex-1 lg:mt-20">
          <span className="text-4xl sm:text-5xl lg:text-5xl xl:text-6xl block mb-6 sm:mb-8 leading-tight">
            ПРОТИВОПОКАЗАНИЯ
          </span>
          <ul className="text-lg sm:text-xl lg:text-2xl xl:text-3xl space-y-3 sm:space-y-4 leading-relaxed">
            {fields.contraindications.map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="text-accent text-xl sm:text-2xl lg:text-3xl">
                  —
                </span>
                <span>{item.item}</span>
              </li>
            ))}
          </ul>
        </div>

        <svg
          width="100%"
          height="100%"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="absolute top-0 stroke-accent hidden lg:block"
        >
          <line
            x1="52%"
            y1="0%"
            x2="48%"
            y2="100%"
            strokeOpacity="0.5"
            strokeWidth="4"
            strokeDasharray="8 8"
          />
        </svg>
      </div>
    </div>
  )
}
