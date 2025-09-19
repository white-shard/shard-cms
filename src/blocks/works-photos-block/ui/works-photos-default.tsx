import { WorksPhotosBlockFields } from "../types"
import { BeforeAfterSlider } from "@/components/ui/before-after-slider"

type Props = {
  fields: WorksPhotosBlockFields
}

export function WorksPhotosBlockDefault({ fields }: Props) {
  return (
    <div className="container mx-auto py-12">
      <span className="text-4xl">{fields.heading}</span>
      {fields.description && (
        <p className="text-xl text-gray-600 w-128">{fields.description}</p>
      )}

      <div className="grid gap-8 md:gap-12 mt-8">
        {fields.photos.map((photo, index) => (
          <div key={index} className={`gap-6 items-center`}>
            {index % 2 === 1 ? (
              <div className="grid grid-cols-2">
                <div className="flex items-center justify-center">
                  <h3 className="text-4xl mb-4 text-center">{photo.heading}</h3>
                </div>
                <div>
                  <BeforeAfterSlider
                    beforeImage={photo.beforeImg}
                    afterImage={photo.afterImg}
                  />
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-2">
                <div>
                  <BeforeAfterSlider
                    beforeImage={photo.beforeImg}
                    afterImage={photo.afterImg}
                  />
                </div>
                <div className="flex items-center justify-center">
                  <h3 className="text-4xl mb-4 text-center">{photo.heading}</h3>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
