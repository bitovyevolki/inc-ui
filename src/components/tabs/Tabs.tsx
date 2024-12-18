import type { IOption } from '../select'

import * as T from '@radix-ui/react-tabs'
import { clsx } from 'clsx'

import s from './Tabs.module.scss'

interface ITabsProps {
  defaultValue?: string
  onChange: (value: string) => void
  options: ({
    disabled?: boolean
  } & IOption)[]
  value: string
}

export const Tabs = ({ defaultValue, onChange, options, value }: ITabsProps) => {
  return (
    <T.Root
      className={s.TabsRoot}
      defaultValue={defaultValue}
      onValueChange={onChange}
      value={value}
    >
      <T.List className={s.TabsList}>
        {options.map(t => (
          <T.Trigger
            className={clsx(s.TabsTrigger, t.value === value && s.active)}
            key={t.value}
            value={t.value}
          >
            <h3>{t.label}</h3>
          </T.Trigger>
        ))}
      </T.List>
      {/* {options.map((t, ind) => (
        <T.Content className={s.TabsContent} key={t.value + '---' + ind} value={t.value}>
          {t.label}
        </T.Content>
      ))} */}
    </T.Root>
  )
}

Tabs.displayName = 'Tabs'
