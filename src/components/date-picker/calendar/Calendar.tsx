'use client'

import * as React from 'react'
import { DayPicker } from 'react-day-picker'

import s from './Calendar.module.scss'

export type CalendarProps = React.ComponentProps<typeof DayPicker>

export const Calendar = ({ showOutsideDays = true, ...props }: CalendarProps) => {
  return (
    <DayPicker
      captionLayout={'dropdown'}
      className={s.root}
      classNames={{
        button_next: s.navBtn,
        button_previous: s.navBtn,
        caption_label: s.captionLabel,
        chevron: s.chevron,
        day: s.day,
        dropdown: s.dropdown,
        dropdown_root: s.dropdownRoot,
        dropdowns: s.dropdowns,
        month: s.month,
        month_caption: s.monthCaption,
        months: s.months,
        months_dropdown: s.monthsDropdown,
        nav: s.nav,
        outside: s.outside,
        range_end: s.range_end,
        selected: s.selected,
        today: s.today,
        weekday: s.weekDay,
        weeks: s.weeks,
        years_dropdown: s.yearsDropdown,
      }}
      showOutsideDays={showOutsideDays}
      weekStartsOn={1}
      {...props}
    />
  )
}
Calendar.displayName = 'Calendar'
