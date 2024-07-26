import type { Meta, StoryObj } from '@storybook/react'

import React, { useState } from 'react'

import { Checkbox } from '.'

const meta = {
  argTypes: {},
  component: Checkbox,
  tags: ['autodocs'],
  title: 'Components/UI/Checkbox',
} satisfies Meta<typeof Checkbox>

export default meta
type Story = StoryObj<typeof meta>

export const Unchecked: Story = {
  args: {
    checked: false,
    label: 'Unchecked',
  },
}

export const Checked: Story = {
  args: {
    checked: true,
    label: 'Checked',
  },
}

export const DisabledChecked: Story = {
  args: {
    checked: true,
    disabled: true,
    label: 'Disabled checked',
  },
}

export const DisabledUnchecked: Story = {
  args: {
    checked: false,
    disabled: true,
    label: 'Disabled unchecked',
  },
}

export const Controlled: Story = {
  args: {
    checked: false,
    label: 'Click here',
  },
  render: args => {
    const [checked, setChecked] = useState(args.checked)

    return (
      <>
        <Checkbox {...args} checked={checked} onChange={() => setChecked(!checked)} />
        Current value: {checked.toString()}
      </>
    )
  },
}
