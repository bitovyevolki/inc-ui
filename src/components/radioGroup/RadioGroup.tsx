import * as RadioGroupRadix from '@radix-ui/react-radio-group'
import { clsx } from 'clsx'

import s from './RadioGroup.module.scss'

import { Typography } from '../typography'

export type Option = {
  label: string
  value: string
}

export type RadioGroupProps = {
  onValueChange: (value: string) => void
  options: Option[]
  value: string
} & RadioGroupRadix.RadioGroupProps

export const RadioGroup = ({ options, ...rest }: RadioGroupProps) => {
  const labelClasses = clsx(s.item, rest.disabled && s.disabled)

  return (
    <RadioGroupRadix.Root {...rest} className={s.root}>
      {options.map(el => (
        <Typography as={'label'} className={labelClasses} key={el.value} variant={'body2'}>
          <RadioGroupRadix.Item className={s.radio} value={el.value}>
            <div className={s.frame}></div>
            <RadioGroupRadix.Indicator className={s.indicator} />
          </RadioGroupRadix.Item>
          {el.label}
        </Typography>
      ))}
    </RadioGroupRadix.Root>
  )
}
