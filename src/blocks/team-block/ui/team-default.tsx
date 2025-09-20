"use client"

import { Specialty, Staff } from "@/payload-types"
import Image from "next/image"
import { useEffect, useState } from "react"
import { TeamBlockFields } from "../types"
import { getSpecialties } from "../vm/get-specialties"
import { getStaff } from "../vm/get-staff"

type Props = {
  fields: TeamBlockFields
}

export function TeamBlockDefault({ fields }: Props) {
  const [activeSpecialty, setActiveSpecialty] = useState<string>("all")

  const [staff, setStaff] = useState<Staff[]>([])
  const [specialties, setSpecialties] = useState<Specialty[]>([])

  const filteredStaff = staff.filter((item) => {
    if (activeSpecialty === "all") return true
    return item.specialty.some((item) => item.name === activeSpecialty)
  })

  useEffect(() => {
    getStaff().then((staff) => {
      setStaff(staff)
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
    </div>
  )
}
