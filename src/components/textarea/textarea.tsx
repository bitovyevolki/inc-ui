import type { ComponentPropsWithoutRef, ElementType } from 'react'
import clsx from 'clsx'
import s from './textarea.module.scss'

const DEFAULT_TYPE = 'textarea'

export type TextAreaProps<T extends ElementType = typeof DEFAULT_TYPE> = {
  as?: T
  placeholder?: string
} & ComponentPropsWithoutRef<T>

export function TextArea<T extends ElementType = typeof DEFAULT_TYPE>({
  className,
  as,
  placeholder,
  ...rest
}: TextAreaProps<T>) {
  const Component = as ?? DEFAULT_TYPE

  return <Component {...rest} placeholder={placeholder} className={clsx(s.textArea, className)} />
}

TextArea.displayName = 'TextArea'
