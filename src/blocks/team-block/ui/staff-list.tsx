"use client"

import { cn } from "@/lib/utils"
import { Specialty, Staff } from "@/payload-types"
import Image from "next/image"
import { useState } from "react"

type Props = {
  staff: Staff[]
  specialties: Specialty[]
}

export function StaffList({ staff, specialties }: Props) {
  const filteredStaff = staff?.filter((item) => {
    if (activeSpecialty === "all") return true
    return item.specialty.some(
      (specialty) => specialty?.name === activeSpecialty,
    )
  })

  return (
    <div className="flex flex-col gap-8 px-4">
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
              activeSpecialty === item.id && "text-accent underline",
            )}
            style={{ cursor: "pointer" }}
            onClick={() => setActiveSpecialty(item.id)}
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
              src={item.img.url!}
              alt={item.fullname}
              width={512}
              height={512}
              className="object-cover w-full aspect-square"
            />
            <div className="flex flex-col gap-2 p-4">
              <h3 className="text-2xl">{item.fullname}</h3>
              <div className="flex justify-between gap-2">
                <span>
                  {item.alternativeSpecialty ||
                    item.specialty
                      .map((specialty) => specialty.name)
                      .join(", ")}
                </span>
                <span>{item.experience} лет опыта</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
