import { ComponentPropsWithoutRef, ElementType, forwardRef } from 'react'

import clsx from 'clsx'

import s from './button.module.scss'

export type ButtonProps<T extends ElementType = 'button'> = {
  as?: T
  fullWidth?: boolean
  variant?: 'ghost' | 'outlined' | 'primary' | 'secondary'
} & ComponentPropsWithoutRef<T>

function Button<T extends ElementType = 'button'>(props: ButtonProps<T>) {
  const { as, className, fullWidth = false, variant = 'primary', ...rest } = props
  const Component = as ?? 'button'

  return (
    <Component
      {...rest}
      className={clsx(s.button, s[variant], fullWidth && s.fullWidth, className)}
    />
  )
}

const ButtonWithFRef = forwardRef(Button)

ButtonWithFRef.displayName = 'Button'

export { ButtonWithFRef as Button }
