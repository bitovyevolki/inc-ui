import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import type { ReactNode } from 'react'
import { Typography } from '../typography'
import s from './Dropdown.module.scss'

type DropdownType = {
  trigger: ReactNode
  children: ReactNode
  title?: string
}

export const Dropdown = ({ children, trigger, title }: DropdownType) => {
  return (
    <div className={s.wrapper}>
      <Typography variant="subTitle2">
        <DropdownMenu.Root>
          <DropdownMenu.Trigger asChild>
            <div className={s.trigger}>{trigger}</div>
          </DropdownMenu.Trigger>

          <DropdownMenu.Portal>
            <DropdownMenu.Content className={s.content} sideOffset={4} align={'end'}>
              {title && (
                <>
                  <p className={s.title}>{title}</p>
                  <DropdownMenu.Separator className={s.separator} />
                </>
              )}
              {children}
              <DropdownMenu.Arrow className={s.arrow} width={16} height={8} />
            </DropdownMenu.Content>
          </DropdownMenu.Portal>
        </DropdownMenu.Root>
      </Typography>
    </div>
  )
}

type DropdownItemType = {
  title: string
  icon: ReactNode
  arrow?: boolean
}

export const DropdownItem = ({ title, icon, arrow = true }: DropdownItemType) => {
  return (
    <Typography variant="caption">
      {arrow && <DropdownMenu.Separator className={s.separator} />}
      <DropdownMenu.Item className={s.item}>
        {icon}
        <p>{title}</p>
      </DropdownMenu.Item>
    </Typography>
  )
}
