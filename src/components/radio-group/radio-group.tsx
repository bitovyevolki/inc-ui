import * as RadioGroupRadix from '@radix-ui/react-radio-group'
import { clsx } from 'clsx'

import { Typography } from '../typography'
import s from './radio-group.module.scss'

export type Option = {
  label: string
  value: string
}

export type RadioGroupProps = {
  options: Option[]
  name?: string
  value?: string
  onValueChange?: (value: string) => void
  disabled?: boolean
}

export const RadioGroup = ({ options, ...rest }: RadioGroupProps) => {
  const labelClasses = clsx(s.item, rest.disabled && s.disabled)

  return (
    <RadioGroupRadix.Root aria-label={'Aria label'} {...rest} className={s.root}>
      {options.map(el => (
        <Typography as={'label'} variant={'body2'} key={el.value} className={labelClasses}>
          <RadioGroupRadix.Item value={el.value} className={s.radio}>
            <div className={s.frame}></div>
            <RadioGroupRadix.Indicator className={s.indicator} />
          </RadioGroupRadix.Item>
          {el.label}
        </Typography>
      ))}
    </RadioGroupRadix.Root>
  )
}
