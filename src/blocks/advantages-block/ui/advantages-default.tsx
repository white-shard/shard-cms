import { AdvantagesBlockFields } from "../types"
import { AdvantagesCard } from "./adventages-card"

type Props = {
  fields: AdvantagesBlockFields
}

export function AdvantagesBlockDefault({ fields }: Props) {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl leading-tight">
        {fields.heading}
      </h2>
      <p className="text-base sm:text-lg lg:text-xl w-full lg:w-104 text-gray-600 mt-3 sm:mt-4 mb-6 sm:mb-8 lg:mb-12 leading-relaxed">
        {fields.description}
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
        {fields.advantages.map((advantage, index) => (
          <AdvantagesCard key={`advantage-${index}`} advantage={advantage} />
        ))}
      </div>
    </div>
  )
}
