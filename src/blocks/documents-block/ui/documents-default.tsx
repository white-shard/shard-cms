"use client"

import { DocumentsBlockFields } from "../types"
import { getDocuments } from "../vm/get-documents"
import { useEffect, useState, Suspense } from "react"
import { Document } from "@/payload-types"
import { Button } from "@/components/ui/button"
import { Download, FileText } from "lucide-react"
import { useSearchParams, useRouter, usePathname } from "next/navigation"

type Props = {
  fields: DocumentsBlockFields
}

const folderLabels = {
  first: "Первичные документы",
  right: "Правовая информация",
}

const folderOptions = [
  { value: "first", label: "Первичные документы" },
  { value: "right", label: "Правовая информация" },
]

function DocumentsBlockContent({ fields }: Props) {
  const [documents, setDocuments] = useState<Document[]>([])
  const [loading, setLoading] = useState(true)
  const searchParams = useSearchParams()
  const router = useRouter()
  const pathname = usePathname()

  // Получаем папку из URL параметров, по умолчанию "first"
  const currentFolder = searchParams.get("folder") || "first"

  useEffect(() => {
    const fetchDocuments = async () => {
      setLoading(true)
      try {
        const docs = await getDocuments(currentFolder)
        setDocuments(docs)
      } catch (error) {
        console.error("Error fetching documents:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchDocuments()
  }, [currentFolder])

  const handleFolderChange = (folder: string) => {
    const params = new URLSearchParams(searchParams.toString())
    params.set("folder", folder)
    router.push(`${pathname}?${params.toString()}`)
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl text-primary mb-6 sm:mb-8">
            {folderLabels[currentFolder as keyof typeof folderLabels]}
          </h2>

          {/* Навигация по папкам */}
          <div className="flex flex-wrap gap-3 sm:gap-4 mb-8 sm:mb-12">
            {folderOptions.map((option) => (
              <Button
                key={option.value}
                onClick={() => handleFolderChange(option.value)}
                variant={
                  currentFolder === option.value ? "primary" : "secondary"
                }
                size="lg"
                className="text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-3"
              >
                {option.label}
              </Button>
            ))}
          </div>
        </div>

        {/* Список документов */}
        {loading ? (
          <div className="flex justify-center items-center py-16 sm:py-20">
            <div className="animate-spin rounded-full h-8 w-8 sm:h-12 sm:w-12 border-b-2 border-primary"></div>
          </div>
        ) : documents.length > 0 ? (
          <div className="grid gap-4 sm:gap-6 lg:gap-8">
            {documents.map((doc) => (
              <div
                key={doc.id}
                className="bg-gray-100 rounded-xl p-4 sm:p-6 lg:p-8 border-t-6 border-t-primary border-1 border-gray-200 hover:shadow-lg transition-all duration-200 hover:border-primary/20"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 sm:gap-4 mb-2 sm:mb-3">
                      <div className="size-8 sm:size-10 lg:size-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                        <FileText className="size-4 sm:size-5 lg:size-6 text-white" />
                      </div>
                      <h3 className="text-lg sm:text-xl lg:text-2xl text-primary leading-tight">
                        {doc.title}
                      </h3>
                    </div>
                    <p className="text-sm sm:text-base text-gray-600 ml-11 sm:ml-14 lg:ml-16">
                      Папка:{" "}
                      {folderLabels[doc.folder as keyof typeof folderLabels]}
                    </p>
                  </div>
                  <div className="flex-shrink-0 ml-11 sm:ml-0">
                    <Button
                      asChild
                      variant="primary"
                      size="lg"
                      className="text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-3"
                    >
                      <a
                        href={doc.url || ""}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Download className="size-4 sm:size-5" />
                        <span className="ml-2">Скачать PDF</span>
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 sm:py-20">
            <div className="text-gray-600 text-lg sm:text-xl">
              В выбранной папке документы не найдены
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export function DocumentsBlockDefault({ fields }: Props) {
  return (
    <Suspense fallback={<div>Загрузка...</div>}>
      <DocumentsBlockContent fields={fields} />
    </Suspense>
  )
}
