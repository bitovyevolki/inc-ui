import { ReactNode, forwardRef } from 'react'

import * as Popover from '@radix-ui/react-popover'
import clsx from 'clsx'

import s from './DatePicker.module.scss'

import { CalendarIcon } from '../../assets/icons/calendar'
import { Typography } from '../typography'
import { Calendar } from './calendar/Calendar'
import { getDateViewWithSlash } from './utils/date'

export interface IDatePickerProps {
  Link?: ReactNode
  disabled?: boolean
  errorMessage?: string
  label?: string
  onChange: (date: Date | undefined) => void
  value?: Date
}

export const DatePicker = forwardRef<HTMLButtonElement, IDatePickerProps>(
  ({ Link, disabled, errorMessage, label, onChange, value }, ref) => {
    return (
      <div className={s.container}>
        <label>
          <Typography className={clsx(s.label, disabled && s.disabledTitle)} variant={'body2'}>
            {label}
          </Typography>
        </label>
        <Popover.Root>
          <Popover.Trigger className={clsx(s.PopoverTrigger, disabled && s.disabled)} ref={ref}>
            <div className={clsx(s.calBtn, errorMessage && s.calBtnError, disabled && s.disabled)}>
              <span className={s.date}>{value ? getDateViewWithSlash(value) : 'Pick a date'}</span>
              <CalendarIcon className={s.calIcon} />
            </div>
          </Popover.Trigger>
          <Popover.Content align={'start'} className={s.PopoverContent}>
            <Calendar mode={'single'} onSelect={onChange} selected={value} />
          </Popover.Content>
        </Popover.Root>
        {errorMessage && (
          <Typography className={s.error} variant={'caption'}>
            {errorMessage}
            {Link && Link}
          </Typography>
        )}
      </div>
    )
  }
)

DatePicker.displayName = 'DatePicker'
