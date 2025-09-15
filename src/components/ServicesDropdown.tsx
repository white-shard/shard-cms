"use client"

import { Navigation } from "@/payload-types"
import { useState } from "react"
import { NavigationMenuContent } from "./ui/navigation-menu"

type Props = {
  servicesItem: NonNullable<Navigation["items"]>[0]
}

export function ServicesDropdown({ servicesItem }: Props) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(
    servicesItem.categories?.[0]?.id || null,
  )

  if (!servicesItem.categories) return null

  return (
    <NavigationMenuContent className="w-screen left-0">
      <div className="w-full px-4 py-6">
        <div className="grid grid-cols-12 gap-8">
          {/* Левая колонка - категории */}
          <div className="col-span-3">
            <h3 className="text-lg font-semibold mb-4 text-gray-900">
              Направления
            </h3>
            <ul className="space-y-2">
              {servicesItem.categories.map((category) => (
                <li key={category.id}>
                  <button
                    onClick={() => setSelectedCategory(category.id || null)}
                    className={`w-full text-left px-3 py-2 rounded-md transition-colors ${
                      selectedCategory === category.id
                        ? "bg-blue-50 text-blue-700 font-semibold"
                        : "text-gray-700 hover:bg-gray-50"
                    }`}
                  >
                    {category.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Правая колонка - услуги выбранной категории */}
          <div className="col-span-9">
            {selectedCategory && (
              <>
                <h3 className="text-lg font-semibold mb-4 text-gray-900">
                  {
                    servicesItem.categories.find(
                      (c) => c.id === selectedCategory,
                    )?.label
                  }
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {servicesItem.categories
                    .find((c) => c.id === selectedCategory)
                    ?.items?.map((item) => (
                      <a
                        key={item.id}
                        href={item.url || "/"}
                        className="block p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:shadow-sm transition-all"
                      >
                        <h4 className="font-medium text-gray-900 mb-1">
                          {item.label}
                        </h4>
                        {item.url && (
                          <p className="text-sm text-gray-500">Подробнее →</p>
                        )}
                      </a>
                    ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </NavigationMenuContent>
  )
}
