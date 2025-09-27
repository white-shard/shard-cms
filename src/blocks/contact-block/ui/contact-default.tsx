"use client"

import { Clock, MapPin } from "lucide-react"
import { ContactBlockFields } from "../types"

type Props = {
  fields: ContactBlockFields
}

export function ContactBlockDefault({ fields }: Props) {
  return (
    <div
      id="contacts"
      className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 xl:gap-20 items-center">
        {/* Контактная информация */}
        <div className="flex flex-col lg:order-2 space-y-4 sm:space-y-6 lg:space-y-8">
          <div className="space-y-2 sm:space-y-3">
            <span className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-gray-400 block">
              {fields.beforeHeading}
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl">
              {fields.heading}
            </h2>
          </div>

          <div className="flex flex-col gap-3 sm:gap-4 lg:gap-6 text-gray-400">
            <div className="flex gap-2 sm:gap-3 items-start">
              <MapPin className="text-primary size-4 sm:size-5 md:size-6 flex-shrink-0 mt-1" />
              <span className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed">
                Екатеринбург, Олимпийская набережная, 9/1
              </span>
            </div>

            <div className="flex gap-2 sm:gap-3 items-start">
              <Clock className="text-primary size-4 sm:size-5 md:size-6 flex-shrink-0 mt-1" />
              <span className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed">
                Ежедневно: 9:00-21:00
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-3 sm:gap-4 lg:gap-6 mt-6 sm:mt-8 lg:mt-10">
            <a
              href="tel:+73432877789"
              className="text-primary text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl hover:underline transition-colors duration-200"
            >
              +7 (343) 287-77-89
            </a>
            <a
              href="tel:+79617711774"
              className="text-primary text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl hover:underline transition-colors duration-200"
            >
              +7 (961) 771-17-74
            </a>
          </div>
        </div>

        {/* Карта/изображение */}
        <div className="w-full aspect-square rounded-lg sm:rounded-xl lg:order-1 min-h-[300px] sm:min-h-[400px] lg:min-h-[500px] overflow-hidden relative">
          <iframe
            src="https://yandex.ru/map-widget/v1/?um=constructor%3Acdf595fab5cba7b57d81c19e2d1ac3b91f6e8e19d194fc86580c7373f202744d&amp;source=constructor&amp;lang=ru_RU&amp;scroll=true"
            width="628"
            height="628"
            frameBorder="0"
            className="grayscale hover:grayscale-0 transition-all duration-300"
            style={{
              filter: "grayscale(100%)",
              position: "relative",
              zIndex: 1,
            }}
          />
          <style jsx>{`
            iframe:hover {
              filter: grayscale(0%) !important;
            }
            iframe::before {
              content: "";
              position: absolute;
              top: 0;
              left: 0;
              right: 0;
              bottom: 0;
              background: rgba(0, 0, 255, 0.1);
              pointer-events: none;
              z-index: 2;
            }
          `}</style>
        </div>
      </div>
    </div>
  )
}
