import { ComponentPropsWithoutRef, type ElementRef, type ReactNode, forwardRef } from 'react'

import * as ScrollArea from '@radix-ui/react-scroll-area'
import * as S from '@radix-ui/react-select'
import { clsx } from 'clsx'

import s from './Select.module.scss'

import { Typography } from '../typography'
import { SelectIcon } from './select-icon'

type SelectVariantType = 'large' | 'small'

export interface IOption {
  label: ReactNode | string
  value: string
}

export type ISelectProps = {
  defaultValue?: string
  disabled?: boolean
  errorMessage?: string
  onChange: (value: string) => void
  options: IOption[]
  placeholder?: string
  title?: string
  value: string
  variant: SelectVariantType
} & Omit<ComponentPropsWithoutRef<'select'>, 'onChange'>

export const Select = forwardRef<ElementRef<typeof S.Root>, ISelectProps>((props, ref) => {
  const {
    className,
    defaultValue,
    disabled,
    errorMessage,
    onChange,
    options,
    placeholder,
    title,
    value,
    variant,
  } = props

  return (
    <>
      {title && (
        <Typography className={s.title} variant={'body2'}>
          {title}
        </Typography>
      )}
      <S.Root
        defaultValue={defaultValue}
        disabled={disabled}
        onValueChange={onChange}
        value={value}
      >
        <S.Trigger
          className={clsx(s.SelectTrigger, className, {
            [s.disabled]: disabled,
            [s.large]: variant === 'large',
            [s.small]: variant === 'small',
          })}
          ref={ref}
        >
          <S.Value placeholder={placeholder} />
          <S.Icon>
            <SelectIcon className={s.Icon} />
          </S.Icon>
        </S.Trigger>
        <S.Portal>
          <S.Content className={clsx(s.SelectContent)} position={'popper'}>
            <ScrollArea.Root type={'auto'}>
              <S.Viewport>
                <ScrollArea.Viewport>
                  {options.map(option => (
                    <S.Item
                      className={clsx(
                        s.SelectItem,
                        variant === 'large' && s.large,
                        variant === 'small' && s.small
                      )}
                      key={option.value}
                      value={option.value}
                    >
                      <S.ItemText>
                        <span>{option.label}</span>
                      </S.ItemText>
                    </S.Item>
                  ))}
                </ScrollArea.Viewport>
                <ScrollArea.Scrollbar orientation={'vertical'}>
                  <ScrollArea.Thumb />
                </ScrollArea.Scrollbar>
              </S.Viewport>
            </ScrollArea.Root>
          </S.Content>
        </S.Portal>
      </S.Root>

      {errorMessage && (
        <Typography className={s.errorMessage} variant={'caption'}>
          {errorMessage}
        </Typography>
      )}
    </>
  )
})

Select.displayName = 'Select'
