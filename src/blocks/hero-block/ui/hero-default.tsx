import { HeroBlockFields } from "../types"

type Props = {
  fields: HeroBlockFields
}

export function HeroBlockDefault({ fields }: Props) {
  return (
    <div className="flex justify-center items-center w-screen h-screen bg-gray-400 relative">
      <div className="flex flex-col items-center z-10">
        {fields.beforeHeading && (
          <h2 className="text-[40px] text-gray-400">{fields.beforeHeading}</h2>
        )}
        <h1 className="text-white text-8xl">{fields.heading}</h1>

        {fields.actions.length && (
          <div className="flex gap-[20px] my-8">
            {fields.actions.map((action, index) => (
              <div key={index}>{action.name}</div>
            ))}
          </div>
        )}

        {fields.description && (
          <p className="text-4xl text-center text-[#383838] max-w-[480px]">
            {fields.description}
          </p>
        )}
      </div>

      <div className="w-full h-full absolute bg-gradient-to-t from-[#454545] to-[#ffffff00] z-0" />
    </div>
  )
}
