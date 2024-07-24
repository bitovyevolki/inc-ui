'use client'

import * as React from 'react'
import { DayPicker } from 'react-day-picker'
import s from './Calendar.module.scss'

export type CalendarProps = React.ComponentProps<typeof DayPicker>

function Calendar({ showOutsideDays = true, ...props }: CalendarProps) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={s.root}
      weekStartsOn={1}
      classNames={{
        months: s.months,
        month: s.month,
        caption_label: s.captionLabel,
        nav: s.nav,
        button_next: s.navBtn,
        button_previous: s.navBtn,
        weekday: s.weekDay,
        weeks: s.weeks,
        day: s.day,
        today: s.today,
        selected: s.selected,
        outside: s.outside,
        range_end: s.range_end,
      }}
      {...props}
    />
  )
}
Calendar.displayName = 'Calendar'

export { Calendar }
