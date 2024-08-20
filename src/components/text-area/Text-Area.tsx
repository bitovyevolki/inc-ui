import { type ComponentPropsWithoutRef, type ElementRef, forwardRef } from 'react'

import { clsx } from 'clsx'

import s from './text-area.module.scss'

import { Typography } from '../typography'
export type TextAreaProps = {
  disabled?: boolean
  errorMessage?: string
  label?: string
  placeholder?: string
} & ComponentPropsWithoutRef<'textarea'>

export const TextArea = forwardRef<ElementRef<'textarea'>, TextAreaProps>((props, ref) => {
  const { className, disabled, errorMessage, label, placeholder, ...rest } = props

  return (
    <div className={clsx(s.wrapper)}>
      {label && (
        <label>
          <Typography className={clsx(s.label, disabled && s.disabled)} variant={'body2'}>
            {label}
          </Typography>
        </label>
      )}
      <textarea
        aria-invalid={!!errorMessage}
        className={clsx(s.textarea, disabled && s.disabled, errorMessage && s.error, className)}
        disabled={disabled}
        placeholder={placeholder}
        ref={ref}
        {...rest}
      />
      {errorMessage && (
        <Typography className={s.errorMessage} variant={'caption'}>
          {errorMessage}
        </Typography>
      )}
    </div>
  )
})
