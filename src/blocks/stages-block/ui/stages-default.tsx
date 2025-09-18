import { StagesBlockFields } from "../types"

type Props = {
  fields: StagesBlockFields
}

export function StagesBlockDefault({ fields }: Props) {
  return (
    <div className="flex flex-col container mx-auto gap-4">
      <div className="grid gap-2">
        <span className="text-4xl">{fields.heading}</span>
        {fields.description && (
          <p className="text-xl text-gray-600 w-128">{fields.description}</p>
        )}
      </div>

      <div className="grid grid-cols-3 mt-8 ">
        {fields.stages.map((stage, index) => (
          <div
            key={index}
            style={{
              marginTop: `${(index % 3) * 50}px`,
              marginBottom: `${100 - (index % 3) * 50}px`,
            }}
            className="flex flex-col gap-2 bg-gray-200 rounded-lg p-4 w-4/5"
          >
            <span className="text-2xl">{stage.heading}</span>
            {stage.description && (
              <p className="text-xl text-gray-600">{stage.description}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
