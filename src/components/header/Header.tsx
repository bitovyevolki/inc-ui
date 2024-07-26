import s from './header.module.scss'

import { BellIcon } from '../../assets/icons/bell.tsx'
import { FlagRussia } from '../../assets/icons/flag-russia.tsx'
import { FlagUnitedKingdom } from '../../assets/icons/flag-united-kingdom.tsx'
import { Button } from '../button'
import { type IOption, Select } from '../select'
import { Typography } from '../typography'
export type LanguageType = 'en' | 'ru'
export type HeaderProps = {
  isAuth: boolean
  onLanguageChange: (value: string) => void
  selectedLanguage?: LanguageType
  signInSrc?: string
  signUpSrc?: string
  title: string
}

const options: IOption[] = [
  {
    label: (
      <div className={s.selectItem}>
        <FlagRussia height={20} width={20} />
        <Typography variant={'body1'}>{'Russian'}</Typography>
      </div>
    ),
    value: 'ru',
  },
  {
    label: (
      <div className={s.selectItem}>
        <FlagUnitedKingdom height={20} width={20} />
        <Typography variant={'body1'}>{'English'}</Typography>
      </div>
    ),
    value: 'en',
  },
]

export const Header = ({
  isAuth,
  onLanguageChange,
  selectedLanguage,
  signInSrc,
  signUpSrc,
  title,
}: HeaderProps) => {
  return isAuth ? (
    <header className={s.header}>
      <Typography variant={'h1'}>{title}</Typography>
      <div className={s.actions}>
        <BellIcon />

        <Select
          onValueChange={onLanguageChange}
          options={options}
          value={selectedLanguage || 'ru'}
          variant={'large'}
        />
      </div>
    </header>
  ) : (
    <header className={s.header}>
      <Typography variant={'h1'}>{title}</Typography>
      <div className={s.actions}>
        <Select
          onValueChange={() => {}}
          options={options}
          value={selectedLanguage || 'ru'}
          variant={'large'}
        />

        <Typography as={'a'} className={s.loginButton} href={signInSrc} variant={'link1'}>
          {'Login'}
        </Typography>
        <Button as={'a'} href={signUpSrc} variant={'primary'}>
          {'Sing Up'}
        </Button>
      </div>
    </header>
  )
}
