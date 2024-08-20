import type { ComponentPropsWithoutRef, FC, ReactNode } from 'react'

import * as Modal from '@radix-ui/react-dialog'
import { clsx } from 'clsx'

import s from './modal.module.scss'

import { CloseIcon } from '../../assets/icons/close-outline'
import { Typography } from '../typography'
export type ModalProps = {
  children: ReactNode
  className?: string
  onOpenChange: (open: boolean) => void
  open: boolean
  title: string
} & Omit<ComponentPropsWithoutRef<typeof Modal.Dialog>, 'onOpenChange' | 'open'>
export const ModalWindow: FC<ModalProps> = (props: ModalProps) => {
  const { children, className, onOpenChange, open, title, ...rest } = props

  return (
    <Modal.Root onOpenChange={onOpenChange} open={open} {...rest}>
      <Modal.Portal>
        <Modal.Overlay className={s.ModalOverlay} />
        <Modal.Content className={clsx(s.ModalContent, className)}>
          <div className={s.ModalHeader}>
            <Modal.Title asChild>
              <Typography as={'h2'} variant={'h2'}>
                {title}
              </Typography>
            </Modal.Title>
            <Modal.Description />
            <Modal.Close className={s.closeButton}>
              <CloseIcon />
            </Modal.Close>
          </div>
          {children}
        </Modal.Content>
      </Modal.Portal>
    </Modal.Root>
  )
}
