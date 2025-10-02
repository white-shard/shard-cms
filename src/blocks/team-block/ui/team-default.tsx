"use client"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { ClipboardList } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import { SpecialtyFields, StaffFields, TeamBlockFields } from "../types"
import { getSpecialties } from "../vm/get-specialties"
import { getStaff } from "../vm/get-staff"

type Props = {
  fields: TeamBlockFields
}

export function TeamBlockDefault({ fields }: Props) {
  const [activeSpecialty, setActiveSpecialty] = useState<string>("all")

  const [staff, setStaff] = useState<StaffFields[]>([])
  const [specialties, setSpecialties] = useState<SpecialtyFields[]>([])

  const filteredStaff = staff.filter((item) => {
    if (activeSpecialty === "all") return true
    return item.specialty.some((spec) => {
      if (typeof spec === "number") return false
      return spec.name === activeSpecialty
    })
  })

  useEffect(() => {
    getStaff().then((staff) => {
      setStaff(staff as unknown as StaffFields[])
    })
  }, [])

  useEffect(() => {
    getSpecialties().then((specialties) => {
      setSpecialties(specialties)
    })
  }, [])

  return (
    <div className="flex flex-col gap-8 sm:gap-12 lg:gap-16 container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
      {fields.blockHeading && (
        <h2 className="text-2xl sm:text-3xl lg:text-4xl text-center">
          {fields.blockHeading}
        </h2>
      )}
      <div className="flex flex-col lg:flex-row justify-around items-center gap-8 sm:gap-12 lg:gap-16">
        <Image
          className="flex-1 w-full lg:w-auto max-w-md lg:max-w-none"
          src={fields.img?.url || ""}
          alt={fields.img?.alt || ""}
          width={512}
          height={512}
        />
        <div className="flex flex-1 flex-col gap-3 sm:gap-4 w-full">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl">
            {fields.heading}
          </h2>
          <p className="text-base sm:text-lg lg:text-xl xl:text-2xl text-gray-600 whitespace-pre-line leading-relaxed">
            {fields.description}
          </p>
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-3 sm:gap-4 lg:gap-6 text-lg sm:text-xl lg:text-2xl">
        <span
          className={cn(
            activeSpecialty === "all" && "text-accent underline",
            "cursor-pointer hover:text-accent transition-colors px-2 py-1 rounded",
          )}
          onClick={() => setActiveSpecialty("all")}
        >
          все
        </span>
        {specialties.map((item) => (
          <span
            key={item.id}
            className={cn(
              activeSpecialty === item.name && "text-accent underline",
              "cursor-pointer hover:text-accent transition-colors px-2 py-1 rounded",
            )}
            onClick={() => setActiveSpecialty(item.name)}
          >
            {item.name}
          </span>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 xl:gap-16">
        {filteredStaff.map((item) => (
          <div
            key={item.id}
            className="rounded-lg overflow-hidden border-gray-200 border hover:shadow-lg transition-shadow duration-300"
          >
            <Image
              src={typeof item.img === "number" ? "" : item.img.url || ""}
              alt={item.fullname}
              width={512}
              height={512}
              className="object-cover w-full aspect-square"
            />
            <div className="flex flex-col gap-3 sm:gap-4 p-4 sm:p-6 lg:p-8">
              <h3 className="text-lg sm:text-xl lg:text-2xl">
                {item.fullname}
              </h3>
              <div className="flex flex-col sm:flex-row justify-between gap-2 sm:gap-3">
                <span className="text-gray-400 text-sm sm:text-base lg:text-lg">
                  {item.alternativeSpecialty ||
                    item.specialty
                      .map((specialty) =>
                        typeof specialty === "number" ? "" : specialty.name,
                      )
                      .join(", ")}
                </span>
                <span className="text-gray-600 text-sm sm:text-base lg:text-lg">
                  Стаж {item.experience}
                </span>
              </div>
              <div className="flex flex-col sm:flex-row justify-between gap-3 sm:gap-4 mt-2 sm:mt-4">
                <Link className="flex-1" href={`/${item.staffPage?.slug}`}>
                  <Button
                    size="lg"
                    className="w-full max-w-64 text-sm sm:text-base lg:text-lg px-4 sm:px-6 py-2 sm:py-3"
                  >
                    Подробнее
                  </Button>
                </Link>
                <Link
                  className="text-accent flex gap-2 items-center text-sm sm:text-base lg:text-lg hover:underline"
                  href={item.bookingLink || `/${item.staffPage?.slug}`}
                >
                  <ClipboardList className="size-4 sm:size-5" />
                  Записаться на консультацию
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
