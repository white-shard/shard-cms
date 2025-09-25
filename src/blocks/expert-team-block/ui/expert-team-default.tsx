import { ClipboardList } from "lucide-react"
import { ExpertTeamBlockFields } from "../types"

type Props = {
  fields: ExpertTeamBlockFields
}

export function ExpertTeamBlockDefault({ fields }: Props) {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
      <div className="text-center mb-8 sm:mb-10 lg:mb-12">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold">
          {fields.heading}
        </h2>
      </div>

      {/* Мобильная версия - вертикальная компоновка */}
      <div className="block lg:hidden space-y-4 sm:space-y-6">
        {fields.experts.map((expert) => {
          const fullname = expert.fullname.split(" ")
          const alternativeSpecialty =
            expert.alternativeSpecialty ||
            expert.specialty.map((spec) => spec.name).join(", ")

          return (
            <div
              key={expert.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex flex-col sm:flex-row">
                <div className="w-full sm:w-48 h-48 sm:h-64 flex-shrink-0">
                  <div
                    style={{ backgroundImage: `url(${expert.img.url})` }}
                    className="w-full h-full bg-no-repeat bg-cover bg-center"
                  />
                </div>
                <div className="p-4 sm:p-6 flex flex-col justify-center space-y-2 sm:space-y-3">
                  <h3 className="text-lg sm:text-xl font-semibold text-primary">
                    {expert.fullname}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600">
                    стоматолог {alternativeSpecialty}
                  </p>
                  <p className="text-sm sm:text-base text-gray-500">
                    Опыт работы: {expert.experience} лет
                  </p>
                  <button className="flex items-center gap-2 text-accent text-sm sm:text-base font-medium hover:underline mt-2 sm:mt-3">
                    <ClipboardList className="size-4 sm:size-5" />
                    Записаться на прием
                  </button>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Десктопная версия - горизонтальная компоновка с hover эффектами */}
      <div className="hidden lg:block">
        <div className="flex gap-4 xl:gap-6 max-w-full justify-center overflow-x-auto pb-4">
          {fields.experts.map((expert) => {
            const fullname = expert.fullname.split(" ")
            const alternativeSpecialty =
              expert.alternativeSpecialty ||
              expert.specialty.map((spec) => spec.name).join(", ")

            return (
              <div
                key={expert.id}
                className="relative w-32 xl:w-36 h-96 xl:h-[400px] hover:w-80 xl:hover:w-96 transition-all duration-500 rounded-lg overflow-hidden group cursor-pointer"
              >
                <div
                  style={{ backgroundImage: `url(${expert.img.url})` }}
                  className="w-full h-full bg-no-repeat bg-cover transition-all duration-500 bg-center group-hover:h-80 xl:group-hover:h-96 group-hover:rounded-lg"
                />

                <div className="flex flex-col absolute bottom-0 left-0 right-0 p-3 xl:p-4 text-sm xl:text-base">
                  <span className="text-white group-hover:hidden transition-none font-medium">
                    {fullname[0]} {fullname[1]}
                  </span>
                  <span className="text-primary group-hover:block hidden transition-none font-semibold text-lg xl:text-xl">
                    {expert.fullname}
                  </span>
                  <span className="text-gray-300 text-sm xl:text-base hidden transition-none group-hover:block">
                    стоматолог {alternativeSpecialty}
                  </span>
                  <div className="flex gap-2 items-center justify-between mt-2">
                    <span className="text-gray-300 text-xs xl:text-sm">
                      {expert.experience} лет опыта
                    </span>
                    <span className="hidden group-hover:flex gap-2 text-accent text-xs xl:text-sm font-medium">
                      <ClipboardList className="size-3 xl:size-4" /> Записаться
                    </span>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
