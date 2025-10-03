"use client"

import { VideoPlayer } from "@/components/ui/video-player"
import { ChevronLeft, ChevronRight, ClipboardList } from "lucide-react"
import { useState } from "react"
import { ExpertTeamBlockFields } from "../types"

type Props = {
  fields: ExpertTeamBlockFields
}

// Функция для определения типа медиа
const isVideo = (media: { mimeType?: string | null }) => {
  return media?.mimeType?.startsWith("video/")
}

export function ExpertTeamBlockDefault({ fields }: Props) {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % fields.experts.length)
  }

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + fields.experts.length) % fields.experts.length,
    )
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
      <div className="text-center mb-8 sm:mb-10 lg:mb-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
          {fields.heading}
        </h2>
      </div>

      {/* Мобильная версия - слайдер */}
      <div className="block lg:hidden">
        <div className="relative">
          {/* Слайдер */}
          <div className="overflow-hidden rounded-lg">
            <div
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {fields.experts.map((expert) => {
                const alternativeSpecialty =
                  expert.alternativeSpecialty ||
                  expert.specialty.map((spec) => spec.name).join(", ")

                return (
                  <div key={expert.id} className="w-full flex-shrink-0">
                    <div className="bg-white rounded-lg overflow-hidden">
                      <div className="flex flex-col">
                        <div className="w-full aspect-square flex-shrink-0">
                          {isVideo(expert.img) ? (
                            <VideoPlayer
                              src={expert.img.url || ""}
                              className="w-full h-full"
                            />
                          ) : (
                            <div
                              style={{
                                backgroundImage: `url(${expert.img.url})`,
                              }}
                              className="w-full h-full bg-no-repeat bg-cover bg-center"
                            />
                          )}
                        </div>
                        <div className="p-4 sm:p-6 flex flex-col justify-center space-y-2 sm:space-y-3">
                          <h3 className="text-xl sm:text-2xl text-primary">
                            {expert.fullname}
                          </h3>
                          <p className="text-sm sm:text-base text-gray-600">
                            стоматолог {alternativeSpecialty}
                          </p>
                          <p className="text-sm sm:text-base text-gray-500">
                            Опыт работы: {expert.experience}
                          </p>
                          {expert.bookingLink && (
                            <a
                              href={
                                expert.bookingLink ||
                                `/${expert.staffPage?.slug}`
                              }
                              className="flex items-center gap-2 text-accent text-sm sm:text-base hover:underline mt-2 sm:mt-3"
                            >
                              <ClipboardList className="size-4 sm:size-5" />
                              Записаться на прием
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Кнопки навигации */}
          <button
            onClick={prevSlide}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg transition-colors"
            disabled={fields.experts.length <= 1}
          >
            <ChevronLeft className="w-5 h-5 text-gray-700" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg transition-colors"
            disabled={fields.experts.length <= 1}
          >
            <ChevronRight className="w-5 h-5 text-gray-700" />
          </button>
        </div>

        {/* Индикаторы */}
        {fields.experts.length > 1 && (
          <div className="flex justify-center mt-4 space-x-2">
            {fields.experts.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentSlide ? "bg-accent" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        )}
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
                className="relative w-32 xl:w-36 h-96 xl:h-[400px] hover:w-80 xl:hover:w-96 transition-all duration-500 rounded-lg overflow-hidden group cursor-pointer flex flex-col"
              >
                {/* Картинка - занимает 2/3 высоты в активном состоянии */}
                <div className="w-full h-full group-hover:h-2/3 transition-all duration-500">
                  {isVideo(expert.img) ? (
                    <VideoPlayer
                      src={expert.img.url || ""}
                      className="w-full h-full rounded-t-lg object-cover"
                    />
                  ) : (
                    <div
                      style={{ backgroundImage: `url(${expert.img.url})` }}
                      className="w-full h-full bg-no-repeat bg-cover bg-center rounded-t-lg"
                    />
                  )}
                </div>

                {/* Градиент для читаемости текста */}
                <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/80 to-transparent group-hover:hidden"></div>

                {/* Текст поверх картинки в неактивном состоянии */}
                <div className="flex flex-col absolute bottom-0 left-0 right-0 p-3 xl:p-4 text-sm xl:text-base group-hover:hidden z-10">
                  <span className="text-white">
                    {fullname[0]} <br /> {fullname[1]}
                  </span>
                  <span className="text-gray-300 text-xs xl:text-sm">
                    {expert.experience}
                  </span>
                </div>

                {/* Текст внизу в активном состоянии */}
                <div className="absolute bottom-0 left-0 right-0 bg-white p-2 xl:p-3 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 rounded-b-lg h-1/3">
                  <div className="flex flex-col space-y-1 h-full justify-center">
                    <span className="text-primary text-sm xl:text-base">
                      {expert.fullname}
                    </span>
                    <span className="text-gray-600 text-xs xl:text-sm">
                      стоматолог {alternativeSpecialty}
                    </span>
                    <div className="flex gap-1 items-center justify-between flex-wrap">
                      <span className="text-gray-500 text-xs xl:text-sm">
                        {expert.experience}
                      </span>
                      {expert.bookingLink && (
                        <a
                          href={
                            expert.bookingLink || `/${expert.staffPage?.slug}`
                          }
                          className="flex gap-1 min-w-16 items-center justify-end text-accent text-xs xl:text-sm hover:underline"
                        >
                          <ClipboardList className="size-3" /> Записаться
                        </a>
                      )}
                    </div>
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
