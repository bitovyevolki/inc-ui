import type { Meta, StoryObj } from '@storybook/react'

import { DatePicker } from './DatePicker'
import { useState } from 'react'

const meta: Meta<typeof DatePicker> = {
  component: DatePicker,
  decorators: [
    Story => (
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

   return <DatePicker value={value} onChange={onChange} label='Date of birth'/>
}

export const WithErrorExample = () => {
   const [value, onChange] = useState<Date>()

   return <DatePicker  errorMessage={'Incorrect date'}  value={value} onChange={onChange} label='Date of birth'/>
}

export const WithErrorLinkExample = () => {
  const [value, onChange] = useState<Date>()

   return <DatePicker errorMessage={'Incorrect date'}  Link={<a href='/' style={{marginLeft: '4px'}}>Privacy policy</a>}   value={value} onChange={onChange} label='Date of birth'/>
 
}

export const WithInitValueExample = () => {
  const [value, onChange] = useState<Date | undefined>(new Date())

  return <DatePicker value={value} onChange={onChange} label='Date of birth'/>
}

export const DisabledExample: Story = {
  args: {
    disabled: true,
    label: 'Date of birth',
  },
}
