import Image from "next/image"
import { ImageBlockFields } from "../types"

type Props = {
  fields: ImageBlockFields
}

export function ImageDefault({ fields }: Props) {
  return (
    <div className="container mx-auto relative h-full flex justify-center px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
      <Image
        src={fields?.img?.url || "/"}
        alt={fields?.img?.alt || ""}
        width={1920}
        height={1920}
        className="w-full sm:w-3/4 lg:w-1/2 object-cover rounded-lg shadow-lg"
        priority
      />
    </div>
  )
}
