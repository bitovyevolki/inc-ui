import {
  ChangeEventHandler,
  ComponentPropsWithoutRef,
  HTMLInputTypeAttribute,
  RefObject,
  forwardRef,
  useRef,
  useState,
} from 'react'

import clsx from 'clsx'

import s from './Input.module.scss'

import { SearchIcon } from '../../assets/icons/search-outline'
import { Typography } from '../typography'
import { Icon } from './Rigth-Left-Icons'
import { useGenerateId } from './useGenerateId'

export type InputProps = {
  clear?: (e: any) => void
  disabled?: boolean
  errorMessage?: string
  label?: string
  placeholder?: string
  rootClassName?: string
  type?: HTMLInputTypeAttribute
  value?: string
} & ComponentPropsWithoutRef<'input'>

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      clear,
      errorMessage,
      id,
      label,
      name,
      onChange,
      placeholder,
      required,
      rootClassName = '',
      type,
      value,
      ...rest
    },
    ref
  ) => {
    const isTypeSearch = type === 'search'
    const isTypePassword = type === 'password'
    const innerRef = useRef<HTMLInputElement>(null)
    const r = (ref as RefObject<HTMLInputElement>) ?? innerRef

    const [isViewPassword, setIsViewPassword] = useState(false)

    const switchView = () => {
      r?.current?.focus()
      setIsViewPassword(prevState => !prevState)
    }
    const onChangeHandler: ChangeEventHandler<HTMLInputElement> = event => {
      onChange?.(event)
    }

    const onClearHandler = (e: any) => {
      r?.current?.focus()
      clear?.(e)
    }

    const inputId = useGenerateId(name, id)

    return (
      <div className={s.rootClassName}>
        {label && (
          <label className={clsx(s.label, required && s.required)} htmlFor={inputId}>
            <Typography as={'p'} variant={'caption'}>
              {label}
            </Typography>
          </label>
        )}

        <div
          className={clsx(s.inputWrapper, {
            [s.error]: errorMessage,
            [s.isLeft]: isTypeSearch,
            [s.isRight]: isTypePassword || (isTypeSearch && value),
          })}
        >
          <input
            {...rest}
            className={clsx(s.input, { [s.error]: errorMessage }, className)}
            id={inputId}
            name={name}
            onChange={onChangeHandler}
            placeholder={placeholder}
            ref={r}
            type={isViewPassword && isTypePassword ? 'text' : type}
            value={value}
          />
          <div className={s.leftIcon}>{isTypeSearch && <SearchIcon />}</div>
          <div className={s.rightIcon}>
            <Icon
              clear={onClearHandler}
              isTypePassword={isTypePassword}
              isTypeSearch={isTypeSearch}
              isViewPassword={isViewPassword}
              switchView={switchView}
              value={value}
            />
          </div>
        </div>

        {errorMessage && (
          <Typography className={clsx(s.error, s.errorMessage)} variant={'caption'}>
            {errorMessage}
          </Typography>
        )}
      </div>
    )
  }
)
