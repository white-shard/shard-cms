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

export function useDialogWithForm(form?: Form) {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const openDialog = () => setIsOpen(true)
  const closeDialog = () => setIsOpen(false)

  const dialog = (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="w-[95vw] max-w-[600px] max-h-[90vh] overflow-y-auto">
        <div className="w-full h-128 bg-red-300"></div>
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
