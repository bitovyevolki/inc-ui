import { type ElementRef, forwardRef } from 'react'

import * as RadixCheckbox from '@radix-ui/react-checkbox'
import { clsx } from 'clsx'

import s from './Checkbox.module.scss'

import { CheckedIcon } from '../../assets/icons/checked'
import { Typography } from '../typography'

export type CheckboxProps = {
  checked: boolean
  label?: string
  onChange: (checked: boolean) => void
} & RadixCheckbox.CheckboxProps

export const Checkbox = forwardRef<ElementRef<typeof RadixCheckbox.Root>, CheckboxProps>(
  ({ label, ...rest }, ref) => {
    const styles = clsx(s.label, rest.disabled && s.disabled, rest.className)

    return (
      <Typography as={'label'} className={styles}>
        <RadixCheckbox.Root
          {...rest}
          className={s.checkbox}
          onCheckedChange={rest.onChange}
          ref={ref}
        >
          <div className={s.frame}></div>
          {rest.checked && (
            <RadixCheckbox.Indicator className={s.indicator} forceMount>
              <CheckedIcon />
            </RadixCheckbox.Indicator>
          )}
        </RadixCheckbox.Root>
        {label}
      </Typography>
    )
  }
)

Checkbox.displayName = 'Checkbox'
