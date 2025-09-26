"use client"

import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogHeader,
  DialogDescription,
} from "@/components/ui/dialog"
import { FormComponent } from "@/components/ui/form"
import { Form } from "@/payload-types"
import { useState } from "react"
import cover from "public/form-cover.jpg"
import Image from "next/image"

export function useDialogWithForm(form?: Form) {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const openDialog = () => setIsOpen(true)
  const closeDialog = () => setIsOpen(false)

  const dialog = (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="w-[95vw] max-w-[600px] max-h-[90vh] overflow-y-auto px-0 pt-0">
        <div className="w-full h-72 relative">
          <Image src={cover} fill alt="" />
        </div>
        <div className="px-8 py-4">
          <DialogHeader>
            <DialogTitle className="font-normal text-xl sm:text-2xl lg:text-3xl text-center">
              {form?.heading}
            </DialogTitle>
            {form?.description && (
              <DialogDescription className="text-sm sm:text-base lg:text-lg text-center">
                {form.description}
              </DialogDescription>
            )}
          </DialogHeader>

          {form && <FormComponent form={form} onClose={closeDialog} />}
        </div>
      </DialogContent>
    </Dialog>
  )

  return {
    dialog,
    openDialog,
    closeDialog,
    isOpen,
  }
}
