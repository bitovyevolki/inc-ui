import type { Meta, StoryObj } from '@storybook/react'

import { useState } from 'react'

import { DatePicker } from './DatePicker'

const meta: Meta<typeof DatePicker> = {
  component: DatePicker,
  decorators: [
    (Story: () => JSX.Element) => (
      <div style={{ height: '400px', margin: '10px' }}>
        <Story />
      </div>
    ),
  ],
  tags: ['autodocs'],
  title: 'Components/UI/DatePicker',
} satisfies Meta<typeof DatePicker>

export default meta
type Story = StoryObj<typeof meta>

export const BaseExample = () => {
  const [value, onChange] = useState<Date>()

  return <DatePicker label={'Date of birth'} onChange={onChange} value={value} />
}

export const WithErrorExample = () => {
  const [value, onChange] = useState<Date>()

  return (
    <DatePicker
      errorMessage={'Incorrect date'}
      label={'Date of birth'}
      onChange={onChange}
      value={value}
    />
  )
}

export const WithErrorLinkExample = () => {
  const [value, onChange] = useState<Date>()

  return (
    <DatePicker
      Link={
        <a href={'/'} style={{ marginLeft: '4px' }}>
          Privacy policy
        </a>
      }
      errorMessage={'Incorrect date'}
      label={'Date of birth'}
      onChange={onChange}
      value={value}
    />
  )
}

export const WithInitValueExample = () => {
  const [value, onChange] = useState<Date | undefined>(new Date())

  return <DatePicker label={'Date of birth'} onChange={onChange} value={value} />
}

export const DisabledExample: Story = {
  args: {
    disabled: true,
    label: 'Date of birth',
  },
}
