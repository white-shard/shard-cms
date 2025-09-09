import { Button } from "@/components/ui/button"
import { HeroBlockFields } from "../types"
import Image from "next/image"

type Props = {
  fields: HeroBlockFields
}

export function HeroBlockDefault({ fields }: Props) {
  return (
    <div className="flex justify-center items-center w-screen h-screen bg-gray-400 relative">
      <div className="flex flex-col items-center z-10 mt-16">
        {fields.beforeHeading && (
          <h2 className="text-[40px] text-gray-400">{fields.beforeHeading}</h2>
        )}
        <h1 className="text-white text-8xl">{fields.heading}</h1>

        {fields.actions.length && (
          <div className="w-full flex flex-wrap justify-center gap-[20px] my-12">
            {fields.actions.map((action, index) => (
              <Button className="flex-1" size="lg" key={index}>
                {action.name}
              </Button>
            ))}
          </div>
        )}

        {fields.description && (
          <p className="text-3xl text-center text-[#383838] max-w-[480px]">
            {fields.description}
          </p>
        )}
      </div>

      <div
        className="w-full h-full absolute bg-no-repeat bg-cover bg-center"
        style={{ backgroundImage: `url(${fields.img.url})` }}
      />
      <div className="w-full h-full absolute bg-gradient-to-t from-[#454545] to-[#ffffff00] z-0" />
    </div>
  )
}
