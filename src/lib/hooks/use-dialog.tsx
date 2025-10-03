"use client"

import { ServiceRecordForm } from "@/components/fields/form/service-record.form"
import { MediaRenderer } from "@/components/media-renderer"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Form, Media } from "@/payload-types"
import { useState } from "react"
const cover = "/form-cover.jpg"

export function useDialogWithForm(form?: Form) {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const openDialog = () => setIsOpen(true)
  const closeDialog = () => setIsOpen(false)

  const dialog = (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="w-[95vw] max-w-[500px] max-h-[90vh] overflow-y-auto px-0 pt-0 border-0">
        <div className="w-full h-84 relative">
          <MediaRenderer media={form?.img as Media} />
        </div>
        <div>
          <DialogHeader className="gap-0">
            <DialogTitle className="font-normal text-xl lg:text-2xl text-center">
              {form?.heading}
            </DialogTitle>
            {form?.description && (
              <DialogDescription className="text-sm lg:text-base text-center">
                {form.description}
              </DialogDescription>
            )}
          </DialogHeader>

          <div className="px-8 my-8">
            {form && (
              <ServiceRecordForm
                options={form}
                onSuccess={() => {
                  closeDialog()
                }}
              />
            )}
          </div>
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
