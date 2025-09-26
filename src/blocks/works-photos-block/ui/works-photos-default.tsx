import { WorksPhotosBlockFields } from "../types"
import { BeforeAfterSlider } from "@/components/ui/before-after-slider"

type Props = {
  fields: WorksPhotosBlockFields
}

export function WorksPhotosBlockDefault({ fields }: Props) {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
      <div className="text-center lg:text-left mb-8 sm:mb-10 lg:mb-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-3 sm:mb-4 lg:mb-6">
          {fields.heading}
        </h2>
        {fields.description && (
          <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-gray-600 max-w-3xl mx-auto lg:mx-0 leading-relaxed">
            {fields.description}
          </p>
        )}
      </div>

      <div className="space-y-8 sm:space-y-12 lg:space-y-16">
        {fields.photos.map((photo, index) => (
          <div key={index} className="w-full">
            {/* Мобильная версия - вертикальная компоновка */}
            <div className="block lg:hidden space-y-4 sm:space-y-6">
              <h3 className="text-xl sm:text-2xl md:text-3xl text-center">
                {photo.heading}
              </h3>
              <div className="w-full">
                <BeforeAfterSlider
                  beforeImage={photo.beforeImg}
                  afterImage={photo.afterImg}
                />
              </div>
            </div>

            {/* Десктопная версия - горизонтальная компоновка */}
            <div className="hidden lg:block">
              {index % 2 === 1 ? (
                <div className="grid grid-cols-2 gap-6 lg:gap-8 xl:gap-12 items-center">
                  <div className="flex items-center justify-center order-1">
                    <h3 className="text-2xl lg:text-3xl xl:text-4xl text-center">
                      {photo.heading}
                    </h3>
                  </div>
                  <div className="order-2">
                    <BeforeAfterSlider
                      beforeImage={photo.beforeImg}
                      afterImage={photo.afterImg}
                    />
                  </div>
                </div>
              ) : (
                <div className="grid grid-cols-2 gap-6 lg:gap-8 xl:gap-12 items-center">
                  <div className="order-1">
                    <BeforeAfterSlider
                      beforeImage={photo.beforeImg}
                      afterImage={photo.afterImg}
                    />
                  </div>
                  <div className="flex items-center justify-center order-2">
                    <h3 className="text-2xl lg:text-3xl xl:text-4xl text-center">
                      {photo.heading}
                    </h3>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
