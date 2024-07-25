import { type Meta, type StoryObj } from '@storybook/react'
import { Header, type LanguageType } from './Header'
import { useState } from 'react'

const meta = {
  component: Header,
  tags: ['autodocs'],
  title: 'Components/Header',
} satisfies Meta<typeof Header>

export default meta

type Story = StoryObj<typeof Header>

export const WithOutAuthExample: Story = {
  args: {
    isAuth: false,
    title: 'User no Auth',
  },
} satisfies Story
export const AuthExample: Story = {
  args: {
    isAuth: true,
    title: 'User Authorized',
  },
} satisfies Story
export const ChangeLanguageExample: Story = {
  render: args => {
    const [selectedLanguage, setSelectedLanguage] = useState<LanguageType>('en')

    const handleLanguageChange = (value: string) => {
      setSelectedLanguage(value as LanguageType)
    }

    return (
      <Header
        {...args}
        onLanguageChange={handleLanguageChange}
        isAuth={true}
        title="Inctagram"
        selectedLanguage={selectedLanguage}
      />
    )
  },
} satisfies Story
