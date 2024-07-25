import { Typography } from '../typography'
import { type IOption, Select } from '../select'
import s from './header.module.scss'
import { FlagRussia } from '../../assets/icons/flag-russia.tsx'
import { FlagUnitedKingdom } from '../../assets/icons/flag-united-kingdom.tsx'
import { BellIcon } from '../../assets/icons/bell.tsx'
import { Button } from '../button'
export type LanguageType = 'ru' | 'en'
export type HeaderProps = {
  isAuth: boolean
  signInSrc?: string
  signUpSrc?: string
  title: string
  onLanguageChange: (value: string) => void
  selectedLanguage?: LanguageType
}

const options: IOption[] = [
  {
    label: (
      <div className={s.selectItem}>
        <FlagRussia width={20} height={20} />
        <Typography variant={'body1'}>{'Russian'}</Typography>
      </div>
    ),
    value: 'ru',
  },
  {
    label: (
      <div className={s.selectItem}>
        <FlagUnitedKingdom width={20} height={20} />
        <Typography variant={'body1'}>{'English'}</Typography>
      </div>
    ),
    value: 'en',
  },
]
export const Header = ({
  isAuth,
  signInSrc,
  signUpSrc,
  title,
  onLanguageChange,
  selectedLanguage,
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

        <Typography variant={'link1'} as={'a'} href={signInSrc} className={s.loginButton}>
          {'Login'}
        </Typography>
        <Button as={'a'} href={signUpSrc} variant={'primary'}>
          {'Sing Up'}
        </Button>
      </div>
    </header>
  )
}
