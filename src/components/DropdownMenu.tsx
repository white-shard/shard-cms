"use client"

import { Navigation } from "@/payload-types"
import { useState } from "react"

type Props = {
  categories: Navigation["items"][number]["categories"] | null
}

export function DropdownMenu({ categories }: Props) {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)

  if (!items || items.length === 0) {
    return null
  }

  return (
    <nav className="relative">
      <ul className="flex space-x-6">
        {items.map((item) => (
          <li
            key={item.id}
            className="relative"
            onMouseEnter={() => setHoveredItem(item.id || null)}
            onMouseLeave={() => setHoveredItem(null)}
          >
            <a
              href={item.url || "#"}
              className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors"
            >
              {item.label}
            </a>

            {/* Dropdown для категорий */}
            {item.hasCategories &&
              item.categories &&
              item.categories.length > 0 && (
                <div
                  className={`absolute top-full left-0 mt-1 w-64 bg-white border border-gray-200 rounded-md shadow-lg z-50 transition-all duration-200 ${
                    hoveredItem === item.id
                      ? "opacity-100 visible"
                      : "opacity-0 invisible"
                  }`}
                  onMouseEnter={() => setHoveredItem(item.id || null)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <div className="py-2">
                    {item.categories.map((category) => (
                      <div key={category.id} className="px-4 py-2">
                        <a
                          href={category.url || "#"}
                          className="block text-sm font-medium text-gray-900 hover:text-blue-600 transition-colors"
                        >
                          {category.label}
                        </a>

                        {/* Подэлементы категории */}
                        {category.hasItems &&
                          category.items &&
                          category.items.length > 0 && (
                            <div className="mt-2 ml-4 space-y-1">
                              {category.items.map((subItem) => (
                                <a
                                  key={subItem.id}
                                  href={subItem.url || "#"}
                                  className="block text-sm text-gray-600 hover:text-blue-600 transition-colors"
                                >
                                  {subItem.label}
                                </a>
                              ))}
                            </div>
                          )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
          </li>
        ))}
      </ul>
    </nav>
  )
}
