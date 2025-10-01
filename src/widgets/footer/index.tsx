"use client"

import { WhiteShard } from "@/components/icons/ws"
import { ActionButton } from "@/lib/actions/action-button"
import { useFooterOptions } from "@/lib/hooks/use-site-footer-options"
import { useSiteOptions } from "@/lib/hooks/use-site-options"
import { cn } from "@/lib/utils"
import { Clock, Mail, MapPin, Phone } from "lucide-react"
import Link from "next/link"

export function Footer() {
  const { options } = useSiteOptions()
  const { footerOptions } = useFooterOptions()

  return (
    <footer className="bg-black flex flex-col text-gray-400 mt-16 pt-8 sm:pt-12 lg:pt-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 container mx-auto gap-6 sm:gap-8 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:col-span-2 lg:col-span-1">
          <span className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-white uppercase">
            Dr.Koshakov
          </span>
          <span className="text-sm sm:text-base mt-2 sm:mt-4 leading-relaxed">
            {footerOptions?.thesis}
          </span>
          {footerOptions?.actionButtons &&
            footerOptions.actionButtons.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-4 sm:mt-6">
                {footerOptions.actionButtons.map((button, index) => (
                  <div
                    key={index}
                    className={cn(
                      "flex items-center",
                      button.variant === "default" && "w-full",
                    )}
                  >
                    <ActionButton
                      data={{
                        name: button.name,
                        icon: button.icon || "1",
                        color: button.color || "primary",
                        variant: button.variant || "default",
                        action: button.action || "link",
                        url: button.url || undefined,
                        form:
                          typeof button.form === "number"
                            ? undefined
                            : button.form || undefined,
                      }}
                    />
                  </div>
                ))}
              </div>
            )}
        </div>
        <div className="mt-6 sm:mt-0">
          <span className="text-lg sm:text-xl text-white">Контакты</span>
          <div className="flex flex-col gap-3 sm:gap-4 my-3 sm:my-4 text-sm sm:text-base">
            <div className="flex gap-2 items-start">
              <MapPin className="size-4 mt-0.5 flex-shrink-0" />
              <span className="flex-1 leading-relaxed">
                {options?.addressShort}
              </span>
            </div>
            <div className="flex gap-2 items-start">
              <Clock className="size-4 mt-0.5 flex-shrink-0" />
              <span className="flex-1 leading-relaxed">
                Ежедневно: {options?.workTimeStart || "09:00"}-
                {options?.workTimeEnd || "21:00"}
              </span>
            </div>
            <div className="flex gap-2 items-start">
              <Phone className="size-4 mt-0.5 flex-shrink-0" />
              <Link
                href="tel:+73432877789"
                className="flex-1 hover:text-white transition-colors leading-relaxed"
              >
                {options?.phones?.[0]?.phone || "+7 (123) 456-78-90"}
              </Link>
            </div>
            <div className="flex gap-2 items-start">
              <Mail className="size-4 mt-0.5 flex-shrink-0" />
              <Link
                className="flex-1 hover:text-white transition-colors leading-relaxed"
                href="mailto:dr.koshakov.clinic@gmail.com"
              >
                {options?.emails?.[0]?.mail || "dr.koshakov.clinic@gmail.com"}
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-6 sm:mt-0">
          <span className="text-lg sm:text-xl text-white">Услуги</span>
          <div className="flex flex-col gap-2 sm:gap-3 mt-3 sm:mt-4">
            {footerOptions?.services?.map((item) => (
              <Link
                className="hover:underline text-sm sm:text-base leading-relaxed"
                href={`/${item.page?.slug}` || "#"}
                key={item.page?.id}
              >
                {item.title || item.page.title}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-3 sm:gap-4 mt-6 sm:mt-0 sm:col-span-2 lg:col-span-1">
          <span className="text-lg sm:text-xl text-white">Быстрая запись</span>
          <p className="text-sm sm:text-base leading-relaxed">
            Запишитесь на консультацию прямо сейчас
          </p>
          {footerOptions?.quickActions &&
            footerOptions.quickActions.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-4 sm:mt-6">
                {footerOptions.quickActions.map((button, index) => (
                  <div
                    key={index}
                    className={cn(
                      "flex items-center",
                      button.variant === "default" && "w-full",
                    )}
                  >
                    <ActionButton
                      data={{
                        name: button.name,
                        icon: button.icon || "1",
                        color: button.color || "primary",
                        variant: button.variant || "default",
                        action: button.action || "link",
                        url: button.url || undefined,
                        form:
                          typeof button.form === "number"
                            ? undefined
                            : button.form || undefined,
                      }}
                    />
                  </div>
                ))}
              </div>
            )}
        </div>
      </div>
      <hr className="opacity-25 my-8" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <span className="text-base sm:text-lg text-white">
          {options?.orgNameFull}
        </span>
        <p className="text-sm sm:text-base mt-2 leading-relaxed">
          {options?.addressFull}
        </p>
        {footerOptions?.footerLinks && footerOptions.footerLinks.length > 0 && (
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 text-white py-4 sm:py-6">
            {footerOptions.footerLinks.map((link, index) => (
              <Link
                key={index}
                className="hover:underline text-sm sm:text-base"
                href={link.url || "#"}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
        <p className="whitespace-pre-line text-sm sm:text-base leading-relaxed">
          {footerOptions?.warning}
        </p>
        <div className="flex flex-wrap gap-4 sm:gap-6 lg:gap-8 py-4 sm:py-6 text-white">
          {footerOptions?.documentLinks.map((document, index) => (
            <Link
              className="hover:underline text-sm sm:text-base"
              key={index}
              target="_blank"
              href={document.document.url || ""}
            >
              {document.document.title}
            </Link>
          ))}
        </div>
        <div className="text-sm sm:text-base text-white leading-relaxed">
          ОГРН {options?.ogrn} / КПП {options?.kpp} / ИНН {options?.inn} / ОКПО{" "}
          {options?.okpo}
        </div>
      </div>
      <div className="w-full uppercase text-center text-accent/25 hover:text-accent/50 transition-colors text-lg sm:text-2xl lg:text-4xl xl:text-6xl my-4 sm:my-6 px-4 sm:px-6 lg:px-8 leading-tight">
        ИМЕЮТСЯ ПРОТИВОПОКАЗАНИЯ НЕОБХОДИМА КОНСУЛЬТАЦИЯ СПЕЦИАЛИСТА
      </div>
      <hr className="opacity-25" />
      <div className="container mx-auto py-6 sm:py-8 px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-0">
        <span className="text-sm sm:text-base text-white">
          {footerOptions?.rights}
        </span>
        <Link
          href="https://white-shard.ru"
          className="text-gray-400 opacity-25 hover:opacity-100 transition-opacity text-sm sm:text-base"
          target="_blank"
        >
          Сайт разработан студией
          <span className="flex gap-2 items-center text-white mt-1">
            <WhiteShard className="size-3 sm:size-4" />
            White Shard
          </span>
        </Link>
      </div>
    </footer>
  )
}
