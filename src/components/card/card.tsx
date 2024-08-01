import { ComponentPropsWithoutRef, ElementType, forwardRef } from 'react'

import clsx from 'clsx'

import s from './card.module.scss'

const DEFAULT_TYPE = 'div'

type CardProps<T extends ElementType = typeof DEFAULT_TYPE> = {
  as?: T
} & ComponentPropsWithoutRef<T>

const Card = <T extends ElementType = typeof DEFAULT_TYPE>({
  as,
  className,
  ...rest
}: CardProps<T>) => {
  const Component = as ?? DEFAULT_TYPE

  return <Component {...rest} className={clsx(s.card, className)} />
}

const CardWithFRef = forwardRef(Card)

CardWithFRef.displayName = 'Card'

export { CardWithFRef as Card }
