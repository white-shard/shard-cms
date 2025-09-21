import { ClipboardList } from "lucide-react"
import { ExpertTeamBlockFields } from "../types"

type Props = {
  fields: ExpertTeamBlockFields
}

export function ExpertTeamBlockDefault({ fields }: Props) {
  return (
    <div className="flex flex-col container mx-auto gap-8">
      <span className="text-2xl md:text-4xl text-center">{fields.heading}</span>
      <div className="flex gap-4 max-w-screen justify-center overflow-x-auto">
        {fields.experts.map((expert) => {
          const fullname = expert.fullname.split(" ")
          const alternativeSpecialty =
            expert.alternativeSpecialty ||
            expert.specialty.map((spec) => spec.name).join(", ")

          return (
            <div
              key={expert.id}
              className="relative w-32 h-128 hover:w-128 transition-all duration-300 rounded-lg overflow-hidden group"
            >
              <div
                style={{ backgroundImage: `url(${expert.img.url})` }}
                className="w-full h-full bg-no-repeat bg-cover transition-all duration-300  bg-center group-hover:h-100 group-hover:rounded-lg"
              />

              <div className="flex flex-col absolute bottom-0 left-0 right-0 p-2 text-xl">
                <span className="text-white group-hover:hidden transition-none">
                  {fullname[0]} {fullname[1]}
                </span>
                <span className="text-primary group-hover:block hidden transition-none">
                  {expert.fullname}
                </span>
                <span className="text-gray-400 text-xl hidden transition-none group-hover:block">
                  стоматолог {alternativeSpecialty}
                </span>
                <div className="flex gap-2 items-center justify-between">
                  <span className="text-gray-400">{expert.experience} лет</span>
                  <span className="hidden group-hover:flex gap-2 text-accent">
                    <ClipboardList /> Записаться на прием
                  </span>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
