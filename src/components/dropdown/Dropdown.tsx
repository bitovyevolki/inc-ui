import type { ReactNode } from 'react'

import * as DropdownMenu from '@radix-ui/react-dropdown-menu'

import s from './Dropdown.module.scss'

import { Typography } from '../typography'

type DropdownProps = {
  children: ReactNode
  title?: string
  trigger: ReactNode
} & DropdownMenu.DropdownMenuProps

export const Dropdown = ({ children, title, trigger, ...rest }: DropdownProps) => {
  return (
    <div className={s.wrapper}>
      <Typography variant={'subTitle2'}>
        <DropdownMenu.Root>
          <DropdownMenu.Trigger asChild>
            <div className={s.trigger}>{trigger}</div>
          </DropdownMenu.Trigger>

          <DropdownMenu.Portal>
            <DropdownMenu.Content align={'end'} className={s.content} sideOffset={4} {...rest}>
              {title && (
                <>
                  <p className={s.title}>{title}</p>
                  <DropdownMenu.Separator className={s.separator} />
                </>
              )}
              {children}
              <DropdownMenu.Arrow className={s.arrow} height={8} width={16} />
            </DropdownMenu.Content>
          </DropdownMenu.Portal>
        </DropdownMenu.Root>
      </Typography>
    </div>
  )
}

type DropdownItemProps = {
  arrow?: boolean
  icon: ReactNode
  title: string
} & DropdownMenu.DropdownMenuItemProps

export const DropdownItem = ({ arrow = true, icon, title, ...rest }: DropdownItemProps) => {
  return (
    <Typography variant={'caption'}>
      {arrow && <DropdownMenu.Separator className={s.separator} />}
      <DropdownMenu.Item className={s.item} {...rest}>
        {icon}
        <p>{title}</p>
      </DropdownMenu.Item>
    </Typography>
  )
}
