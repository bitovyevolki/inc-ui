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

export const LeftArrow = () => {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="36" height="36" rx="18" fill="#4C4C4C" />
      <mask id="mask0_74201_991" maskUnits="userSpaceOnUse" x="8" y="8" width="20" height="20">
        <rect x="8" y="8" width="20" height="20" fill="#D9D9D9" />
      </mask>
      <g mask="url(#mask0_74201_991)">
        <path d="M20 23L15 18L20 13L21.062 14.062L17.125 18L21.062 21.938L20 23Z" fill="white" />
      </g>
    </svg>
  )
}

export const RightArrow = () => {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="36" height="36" rx="18" fill="#4C4C4C" />
      <mask id="mask0_74201_996" maskUnits="userSpaceOnUse" x="8" y="8" width="20" height="20">
        <rect x="8" y="8" width="20" height="20" fill="#D9D9D9" />
      </mask>
      <g mask="url(#mask0_74201_996)">
        <path d="M16 23L14.938 21.938L18.875 18L14.938 14.062L16 13L21 18L16 23Z" fill="white" />
      </g>
    </svg>
  )
}
