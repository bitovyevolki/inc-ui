import { type ComponentPropsWithoutRef, type ElementRef, forwardRef } from 'react'

import { Slot } from '@radix-ui/react-slot'
import { clsx } from 'clsx'

import s from './button.module.scss'

type Props = {
  asChild?: boolean
  fullWidth?: boolean
  variant?: 'ghost' | 'outlined' | 'primary' | 'secondary'
} & ComponentPropsWithoutRef<'button'>

export const Button = forwardRef<ElementRef<'button'>, Props>(
  ({ asChild, className, fullWidth, variant = 'primary', ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'

    console.log('New DEV Button Comp: ', Comp)

    return (
      <Comp
        {...props}
        className={clsx(s.button, s[variant], fullWidth && s.fullWidth, className)}
        ref={ref}
      />
    )
  }
)
