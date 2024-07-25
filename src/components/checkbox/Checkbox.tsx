import * as RadixCheckbox from '@radix-ui/react-checkbox'
import { clsx } from 'clsx'
import { type ElementRef, forwardRef } from 'react'
import { CheckedIcon } from '../../assets/icons/checked'
import { Typography } from '../typography'
import s from './Checkbox.module.scss'

export type CheckboxProps = {
  checked: boolean
  className?: string
  disabled?: boolean
  id?: string
  label?: string
  onChange?: (checked: boolean) => void
}
export const Checkbox = forwardRef<ElementRef<typeof RadixCheckbox.Root>, CheckboxProps>(
  ({ checked, className, disabled, id, label, onChange }, ref) => {
    const styles = clsx(s.label, disabled && s.disabled, className)

    return (
      <Typography as={'label'} className={styles}>
        <RadixCheckbox.Root
          checked={checked}
          className={s.checkbox}
          disabled={disabled}
          id={id}
          onCheckedChange={onChange}
          ref={ref}
        >
          <div className={s.frame}></div>
          {checked && (
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
