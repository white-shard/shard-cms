import { IndicationsContraindicationsBlockFields } from "../types"

type Props = {
  fields: IndicationsContraindicationsBlockFields
}

export function IndicationsContraindicationsDefault({ fields }: Props) {
  return (
    <div className="container mx-auto flex justify-around relative gap-64 py-16">
      <div className="text-gray-400 mb-16">
        <span className="text-6xl">ПОКАЗАНИЯ</span>
        <ul className="text-2xl mt-4">
          {fields.indications.map((item, index) => (
            <li key={index}>— {item.item}</li>
          ))}
        </ul>
      </div>
      <div className="text-primary mt-16">
        <span className="text-6xl">ПРОТИВОПОКАЗАНИЯ</span>
        <ul className="text-2xl mt-4">
          {fields.indications.map((item, index) => (
            <li key={index}>— {item.item}</li>
          ))}
        </ul>
      </div>

      <svg
        width="100%"
        height="100%"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className="absolute top-0 stroke-accent"
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
  )
}
