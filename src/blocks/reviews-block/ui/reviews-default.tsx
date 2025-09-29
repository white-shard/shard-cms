"use client"

import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import { useState } from "react"
import { ReviewsBlockFields } from "../types"

type Props = {
  fields: ReviewsBlockFields
}

export function ReviewsBlockDefault({ fields }: Props) {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0)

  const nextVideo = () => {
    setCurrentVideoIndex((prev) =>
      prev === fields.videoReviews.length - 1 ? 0 : prev + 1,
    )
  }

  const prevVideo = () => {
    setCurrentVideoIndex((prev) =>
      prev === 0 ? fields.videoReviews.length - 1 : prev - 1,
    )
  }

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating ? "text-yellow-400 fill-current" : "text-gray-300"
        }`}
      />
    ))
  }

  return (
    <div id="reviews" className="container mx-auto py-8 sm:py-12 lg:py-16 px-4">
      {/* Заголовок и описание */}
      <div className="text-left mb-12">
        <h2 className="text-3xl sm:text-4xl md:text-5xl">{fields.heading}</h2>
        <p className="text-lg sm:text-xl text-gray-600 max-w-3xl ">
          {fields.description}
        </p>
      </div>

      {/* Видео отзывы слайдер */}
      {fields.videoReviews && fields.videoReviews.length > 0 && (
        <div className="mb-16">
          <h3 className="text-2xl sm:text-3xl font-bold text-center mb-8">
            Видео отзывы
          </h3>
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
              {/* Левая часть - видео */}
              <div className="lg:col-span-3">
                <div className="relative aspect-video bg-gray-100 rounded-lg overflow-hidden">
                  {fields.videoReviews[currentVideoIndex] && (
                    <div className="relative w-full h-full">
                      <iframe
                        src={fields.videoReviews[currentVideoIndex].videoUrl}
                        className="w-full h-full"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                  )}
                </div>
              </div>

              {/* Правая часть - информация о пациенте */}
              <div className="lg:col-span-2 bg-black text-white p-8 rounded-lg">
                <div className="flex items-start space-x-4 mb-6">
                  {/* Аватар пациента */}
                  <div className="w-16 h-16 bg-gray-600 rounded-full flex-shrink-0 flex items-center justify-center overflow-hidden">
                    {fields.videoReviews[currentVideoIndex]?.avatar ? (
                      <img
                        src={fields.videoReviews[currentVideoIndex].avatar}
                        alt={
                          fields.videoReviews[currentVideoIndex].author ||
                          "Пациент"
                        }
                        className="w-full h-full object-cover"
                      />
                    ) : fields.videoReviews[currentVideoIndex]?.author ? (
                      <span className="text-xl font-bold">
                        {fields.videoReviews[currentVideoIndex].author.charAt(
                          0,
                        )}
                      </span>
                    ) : (
                      <span className="text-xl">👤</span>
                    )}
                  </div>

                  {/* Информация о процедуре */}
                  <div>
                    <h4 className="text-xl font-semibold mb-2">
                      {fields.videoReviews[currentVideoIndex]?.procedure ||
                        fields.videoReviews[currentVideoIndex]?.title ||
                        "Имплантация"}
                    </h4>
                    {fields.videoReviews[currentVideoIndex]?.rating && (
                      <div className="flex space-x-1">
                        {renderStars(
                          fields.videoReviews[currentVideoIndex].rating,
                        )}
                      </div>
                    )}
                  </div>
                </div>

                {/* Навигация */}
                {fields.videoReviews.length > 1 && (
                  <div className="flex items-center justify-between">
                    <button
                      onClick={prevVideo}
                      className="w-10 h-10 bg-gray-600 hover:bg-gray-500 rounded-full flex items-center justify-center transition-colors"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>

                    <div className="text-center">
                      <p className="text-sm text-gray-300 mb-1">
                        Смотрите следующий видео отзыв
                      </p>
                      <div className="flex justify-center space-x-1">
                        {fields.videoReviews.map((_, index) => (
                          <button
                            key={index}
                            onClick={() => setCurrentVideoIndex(index)}
                            className={`w-2 h-2 rounded-full transition-colors ${
                              index === currentVideoIndex
                                ? "bg-pink-500"
                                : "bg-gray-500"
                            }`}
                          />
                        ))}
                      </div>
                    </div>

                    <button
                      onClick={nextVideo}
                      className="w-10 h-10 bg-pink-500 hover:bg-pink-600 rounded-full flex items-center justify-center transition-colors"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
      {/* Отзывы из внешних сервисов */}
      <div className="space-y-8">
        {/* Яндекс отзывы */}
        {fields.yandexIframeCode && (
          <div className="relative">
            <div
              dangerouslySetInnerHTML={{ __html: fields.yandexIframeCode }}
              className="overflow-hidden"
            />
          </div>
        )}

        {/* 2ГИС отзывы */}
        {fields.twoGisIframeCode && (
          <div className="relative">
            <div
              dangerouslySetInnerHTML={{ __html: fields.twoGisIframeCode }}
              className="overflow-hidden"
            />
          </div>
        )}
      </div>
    </div>
  )
}
