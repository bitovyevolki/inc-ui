'use client'

import * as React from 'react'
import { DayPicker } from 'react-day-picker'

import s from './Calendar.module.scss'

export type CalendarProps = React.ComponentProps<typeof DayPicker>

function Calendar({ showOutsideDays = true, ...props }: CalendarProps) {
  return (
    <DayPicker
      className={s.root}
      classNames={{
        button_next: s.navBtn,
        button_previous: s.navBtn,
        caption_label: s.captionLabel,
        day: s.day,
        month: s.month,
        months: s.months,
        nav: s.nav,
        outside: s.outside,
        range_end: s.range_end,
        selected: s.selected,
        today: s.today,
        weekday: s.weekDay,
        weeks: s.weeks,
      }}
      showOutsideDays={showOutsideDays}
      weekStartsOn={1}
      {...props}
    />
  )
}
Calendar.displayName = 'Calendar'

export { Calendar }
