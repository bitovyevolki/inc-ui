import type { Meta, StoryObj } from '@storybook/react'

import { useState } from 'react'

import { RadioGroup } from './RadioGroup'

const meta = {
  component: RadioGroup,
  tags: ['autodocs'],
  title: 'Components/UI/RadioGroup',
} satisfies Meta<typeof RadioGroup>

const baseData = [
  { label: 'First', value: '1' },
  { label: 'Second', value: '2' },
]

export default meta
type Story = StoryObj<typeof meta>

export const DefaultControlledGroup: Story = {
  args: {
    options: baseData,
  },

  render: args => {
    const [value, setValue] = useState('1')

    return (
      <>
        <RadioGroup {...args} onValueChange={setValue} value={value} />
        <div style={{ marginTop: '10px' }}>Selected value: {value}</div>
      </>
    )
  },
}

export const DisabledGroup: Story = {
  args: {
    disabled: true,
    options: baseData,
    value: '1',
  },
}
