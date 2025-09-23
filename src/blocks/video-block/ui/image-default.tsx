import Image from "next/image"
import { ImageBlockFields } from "../types"

type Props = {
  fields: ImageBlockFields
}

export function ImageDefault({ fields }: Props) {
  return (
    <div className="container mx-auto relative h-full flex justify-center">
      <Image
        src={fields?.img?.url || "/"}
        alt={fields?.img?.alt || ""}
        width={1920}
        height={1920}
        className="w-1/2 object-cover"
      />
    </div>
  )
}
