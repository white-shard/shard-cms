import { Navigation as PayloadNavigation } from "@/payload-types"
import { Clock, Mail, MapPin, Phone } from "lucide-react"
import { Navigation } from "./types"
import Link from "next/link"

export type Props = {
  navigation: PayloadNavigation
}

export function Footer({ navigation }: Props) {
  const data = navigation as Navigation

  return (
    <footer className="bg-black flex flex-col text-gray-400 mt-16 py-16">
      <div className="grid grid-cols-4 container mx-auto">
        <div className="flex flex-col">
          <span className="text-2xl md:text-4xl text-white uppercase">
            Dr.Koshakov
          </span>
          <span>Европейское лечение в Екатеринбурге</span>
        </div>
        <div>
          <span className="text-lg text-white">Контакты</span>
          <div className="flex flex-col gap-4 my-4 text-base">
            <div className="flex gap-2 items-center">
              <MapPin className="size-4" />
              <span className="flex-1">
                Екатеринбург, Олимпийская набережная, 9/1
              </span>
            </div>
            <div className="flex gap-2 items-center">
              <Clock className="size-4 " />
              <span className="flex-1">Ежедневно: 9:00-21:00</span>
            </div>
            <div className="flex gap-2 items-center">
              <Phone className="size-4" />
              <Link
                href="tel:+73432877789"
                className="flex-1 hover:text-white transition-colors"
              >
                +7 (343) 287-77-89
              </Link>
            </div>
            <div className="flex gap-2 items-center">
              <Mail className="size-4" />
              <Link
                className="flex-1 hover:text-white transition-colors"
                href="mailto:dr.koshakov.clinic@gmail.com"
              >
                dr.koshakov.clinic@gmail.com
              </Link>
            </div>
          </div>
        </div>
        <div>Services</div>
        <div>Actions</div>
      </div>
    </footer>
  )
}
