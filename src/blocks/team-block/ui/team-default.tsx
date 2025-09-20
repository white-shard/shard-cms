"use client"

import { Specialty, Staff } from "@/payload-types"
import Image from "next/image"
import { useEffect, useState } from "react"
import { SpecialtyFields, StaffFields, TeamBlockFields } from "../types"
import { getSpecialties } from "../vm/get-specialties"
import { getStaff } from "../vm/get-staff"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ClipboardList } from "lucide-react"
import Link from "next/link"

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
    <div className="flex flex-col gap-16 container mx-auto">
      {fields.blockHeading && (
        <h2 className="text-4xl text-center">{fields.blockHeading}</h2>
      )}
      <div className="flex justify-around items-center gap-16 px-4">
        <Image
          className="flex-1"
          src={fields.img?.url || ""}
          alt={fields.img?.alt || ""}
          width={512}
          height={512}
        />
        <div className="flex flex-1 flex-col gap-4 w-full">
          <h2 className="text-6xl">{fields.heading}</h2>
          <p className="text-2xl text-gray-600 whitespace-pre-line">
            {fields.description}
          </p>
        </div>
      </div>

      <div className="flex justify-around gap-2 text-2xl">
        <span
          className={cn(activeSpecialty === "all" && "text-accent underline")}
          style={{ cursor: "pointer" }}
          onClick={() => setActiveSpecialty("all")}
        >
          все
        </span>
        {specialties.map((item) => (
          <span
            key={item.id}
            className={cn(
              activeSpecialty === item.name && "text-accent underline",
            )}
            style={{ cursor: "pointer" }}
            onClick={() => setActiveSpecialty(item.name)}
          >
            {item.name}
          </span>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
        {filteredStaff.map((item) => (
          <div
            key={item.id}
            className="rounded-lg overflow-hidden border-gray-200 border"
          >
            <Image
              src={typeof item.img === "number" ? "" : item.img.url || ""}
              alt={item.fullname}
              width={512}
              height={512}
              className="object-cover w-full aspect-square"
            />
            <div className="flex flex-col gap-4 p-8">
              <h3 className="text-2xl">{item.fullname}</h3>
              <div className="flex justify-between gap-2">
                <span className="text-gray-400 text-xl">
                  {item.alternativeSpecialty ||
                    item.specialty
                      .map((specialty) =>
                        typeof specialty === "number" ? "" : specialty.name,
                      )
                      .join(", ")}
                </span>
                <span className="text-gray-600 text-xl">
                  Стаж {item.experience} лет
                </span>
              </div>
              <div className="flex justify-between gap-8 mt-4">
                <Link className="flex-1" href={`/${item.staffPage?.slug}`}>
                  <Button size="lg" className="flex-1 text-xl md:text-base">
                    Подробнее
                  </Button>
                </Link>
                <Link
                  className="text-accent flex gap-2 items-center"
                  href={`/${item.staffPage?.slug}`}
                >
                  <ClipboardList />
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
