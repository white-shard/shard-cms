import { AdvantagesBlockFields } from "../types"
import { AdvantagesCard } from "./adventages-card"

type Props = {
  fields: AdvantagesBlockFields
}

export function AdvantagesBlockDefault({ fields }: Props) {
  return (
    <div className="container mx-auto px-4">
      <h2 className="text-2xl md:text-4xl">{fields.heading}</h2>
      <p className="text-lg md:text-xl w-full lg:w-104 text-gray-600 mt-2 mb-8">
        {fields.description}
      </p>
      <div className="flex gap-4 flex-wrap">
        {fields.advantages.map((advantage, index) => (
          <AdvantagesCard key={`advantage-${index}`} advantage={advantage} />
        ))}
      </div>
    </div>
  )
}
