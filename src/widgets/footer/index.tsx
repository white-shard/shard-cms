"use client"

import { WhiteShard } from "@/components/icons/ws"
import { Button } from "@/components/ui/button"
import { useFooterOptions } from "@/lib/hooks/use-site-footer-options"
import { useSiteOptions } from "@/lib/hooks/use-site-options"
import {
  Calendar,
  Clock,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react"
import Link from "next/link"

export function Footer() {
  const { options } = useSiteOptions()
  const { footerOptions } = useFooterOptions()

  return (
    <footer className="bg-black flex flex-col text-gray-400 mt-16 pt-16">
      <div className="grid grid-cols-4 container mx-auto gap-4">
        <div className="flex flex-col">
          <span className="text-2xl md:text-4xl text-white uppercase">
            Dr.Koshakov
          </span>
          <span>{footerOptions?.thesis}</span>
        </div>
        <div>
          <span className="text-lg text-white">Контакты</span>
          <div className="flex flex-col gap-4 my-4 text-base">
            <div className="flex gap-2 items-center">
              <MapPin className="size-4" />
              <span className="flex-1">{options?.addressShort}</span>
            </div>
            <div className="flex gap-2 items-center">
              <Clock className="size-4 " />
              <span className="flex-1">
                Ежедневно: {options?.workTimeStart || "09:00"}-
                {options?.workTimeEnd || "21:00"}
              </span>
            </div>
            <div className="flex gap-2 items-center">
              <Phone className="size-4" />
              <Link
                href="tel:+73432877789"
                className="flex-1 hover:text-white transition-colors"
              >
                {options?.phones?.[0]?.phone || "+7 (123) 456-78-90"}
              </Link>
            </div>
            <div className="flex gap-2 items-center">
              <Mail className="size-4" />
              <Link
                className="flex-1 hover:text-white transition-colors"
                href="mailto:dr.koshakov.clinic@gmail.com"
              >
                {options?.emails?.[0]?.mail || "dr.koshakov.clinic@gmail.com"}
              </Link>
            </div>
          </div>
        </div>
        <div>
          <span className="text-lg text-white">Услуги</span>
          <div className="flex flex-col gap-2">
            {footerOptions?.services?.map((item) => (
              <Link
                className="hover:underline"
                href={`/${item.page?.slug}` || "#"}
                key={item.page?.id}
              >
                {item.title || item.page.title}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <span className="text-lg text-white">Быстрая запись</span>
          <p className="mb-4">Запишитесь на консультацию прямо сейчас</p>
          <Button className="w-full" size="lg" variant="accent">
            <Calendar className="size-6" />
            Записаться онлайн
          </Button>
          <Button
            className="w-full border-green-800 border-1 text-green-800 hover:border-green-700 hover:text-green-700"
            size="lg"
            variant="primary"
          >
            <MessageCircle className="size-6" />
            Написать в WhatsApp
          </Button>
        </div>
      </div>
      <hr className="opacity-25" />
      <div className="container mx-auto py-4">
        <span className="text-white">{options?.orgNameFull}</span>
        <p>{options?.addressFull}</p>
        <div className="flex gap-8 text-white py-4">
          <Link className="hover:underline" href="#">
            Первичные документы
          </Link>
          <Link className="hover:underline" href="#">
            Правовая информация
          </Link>
        </div>
        <p className="whitespace-pre-line">{footerOptions?.warning}</p>
        <div className="flex flex-wrap gap-8 py-4 text-white">
          {footerOptions?.documentLinks.map((document, index) => (
            <Link
              className="hover:underline"
              key={index}
              target="_blank"
              href={document.document.url || ""}
            >
              {document.document.title}
            </Link>
          ))}
        </div>
        <div className="text-white">
          ОГРН {options?.ogrn} / КПП {options?.kpp} / ИНН {options?.inn} / ОКПО{" "}
          {options?.okpo}
        </div>
      </div>
      <div className="w-screen uppercase text-center text-accent/25 hover:text-accent/50 transition-colors text-6xl my-4">
        ИМЕЮТСЯ ПРОТИВОПОКАЗАНИЯ НЕОБХОДИМА КОНСУЛЬТАЦИЯ СПЕЦИАЛИСТА
      </div>
      <hr className="opacity-25" />
      <div className="container mx-auto py-8 flex justify-between items-center">
        <span className="text-white">{footerOptions?.rights}</span>
        <Link
          href="https://white-shard.ru"
          className="text-gray-400 opacity-25 hover:opacity-100 transition-opacity"
          target="_blank"
        >
          Сайт разработан студией
          <span className="flex gap-2 items-center text-white">
            <WhiteShard className="size-4" />
            White Shard
          </span>
        </Link>
      </div>
    </footer>
  )
}
