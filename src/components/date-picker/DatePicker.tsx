import s from './DatePicker.module.scss'

import { Calendar } from './calendar/Calendar'

import * as Popover from '@radix-ui/react-popover'

import clsx from 'clsx'
import { getDateViewWithSlash } from './utils/date'
import { forwardRef, ReactNode } from 'react'
import { CalendarIcon } from '../../assets/icons/calendar'

export interface IDatePickerProps {
  value: Date
  disabled?: boolean
  errorMessage?: string
  label?: string
  onChange: (date: Date | undefined) => void
  Link?: ReactNode
}

export const DatePicker = forwardRef<HTMLButtonElement, IDatePickerProps>(
  ({ value, disabled, errorMessage, label, onChange, Link }, ref) => {
    return (
      <div className={s.container}>
        <div className={clsx(s.label, disabled && s.disabledTitle)}>{label}</div>
        <Popover.Root>
          <Popover.Trigger ref={ref} className={clsx(s.PopoverTrigger, disabled && s.disabled)}>
            <div
              className={clsx(s.calBtn, errorMessage && s.calBtnError, disabled && s.disabled)}
            >
              <span className={s.date}>{value ? getDateViewWithSlash(value) : 'Pick a date'}</span>
              <CalendarIcon className={s.calIcon} />
            </div>
          </Popover.Trigger>
          <Popover.Content align={'start'} className={s.PopoverContent}>
            <Calendar mode={'single'} onSelect={onChange} selected={value} />
          </Popover.Content>
        </Popover.Root>
        {errorMessage && <div className={s.error}>{errorMessage}
          {errorMessage.includes('13') && Link && Link}
          </div>}
      </div>
    )
  }
)

DatePicker.displayName = 'DatePicker'
