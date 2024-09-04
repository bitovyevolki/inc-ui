import { forwardRef } from 'react'

import * as RadixDialog from '@radix-ui/react-dialog'

const Dialog = RadixDialog.Root

const DialogTrigger = forwardRef<
  HTMLButtonElement,
  { className?: string } & RadixDialog.DialogTriggerProps
>(({ className, ...props }, ref) => <RadixDialog.Trigger asChild ref={ref} {...props} />)

const DialogPortal = RadixDialog.Portal

const DialogOverlay = forwardRef<
  HTMLDivElement,
  { className?: string } & RadixDialog.DialogOverlayProps
>(({ className, ...props }, ref) => (
  <RadixDialog.Overlay className={className} ref={ref} {...props} />
))

const DialogContent = forwardRef<
  HTMLDivElement,
  { className?: string } & RadixDialog.DialogContentProps
>(({ className, ...props }, ref) => (
  <RadixDialog.Content className={className} ref={ref} {...props} />
))

const DialogTitle = forwardRef<
  HTMLHeadingElement,
  { className?: string } & RadixDialog.DialogTitleProps
>(({ className, ...props }, ref) => (
  <RadixDialog.Title className={className} ref={ref} {...props} />
))

const DialogDescription = forwardRef<
  HTMLParagraphElement,
  { className?: string } & RadixDialog.DialogDescriptionProps
>(({ className, ...props }, ref) => (
  <RadixDialog.Description className={className} ref={ref} {...props} />
))

const DialogClose = forwardRef<
  HTMLButtonElement,
  { className?: string } & RadixDialog.DialogCloseProps
>(({ className, ...props }, ref) => <RadixDialog.Close asChild ref={ref} {...props} />)

export {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
}
