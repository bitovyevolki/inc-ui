import { type ElementRef, type ReactNode, forwardRef } from 'react'

import * as S from '@radix-ui/react-select'
import clsx from 'clsx'

import s from './Select.module.scss'
import { Typography } from '../typography'
import { ArrowDownIcon } from '../../assets/icons/arrow-down'

type SelectVariantType = 'large' | 'small'

export interface IOption {
  label: ReactNode | string
  value: string
}

export interface ISelectProps {
  defaultValue?: string
  disabled?: boolean
  errorMessage?: string
  onChange: (value: string) => void
  options: IOption[]
  title?: string
  value: string
  variant: SelectVariantType
  placeholder?: string
}

export const Select = forwardRef<ElementRef<typeof S.Root>, ISelectProps>(
  (
    { defaultValue, disabled, onChange, options, title, value, variant, placeholder, errorMessage },
    ref
  ) => {
    return (
      <>
        {title && (
          <Typography variant="body1" className={s.title}>
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
            className={clsx(s.SelectTrigger, {
              [s.disabled]: disabled,
              [s.large]: variant === 'large',
              [s.small]: variant === 'small',
            })}
            ref={ref}
          >
            <S.Value placeholder={placeholder} />
            <S.Icon>
              <ArrowDownIcon className={s.Icon} />
            </S.Icon>
          </S.Trigger>
          <S.Portal>
            <S.Content className={clsx(s.SelectContent)} position={'popper'}>
              <S.Viewport>
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
              </S.Viewport>
            </S.Content>
          </S.Portal>
        </S.Root>
        {errorMessage && (
          <Typography variant="body1" className={s.errorMessage}>
            {errorMessage}
          </Typography>
        )}
      </>
    )
  }
)

Select.displayName = 'Select'
