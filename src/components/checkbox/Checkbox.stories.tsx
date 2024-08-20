import type { Meta, StoryObj } from '@storybook/react'

import { useState } from 'react'

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
    onChange: () => {},
  },
}

export const Checked: Story = {
  args: {
    checked: true,
    label: 'Checked',
    onChange: () => {},
  },
}

export const DisabledChecked: Story = {
  args: {
    checked: true,
    disabled: true,
    label: 'Disabled checked',
    onChange: () => {},
  },
}

export const DisabledUnchecked: Story = {
  args: {
    checked: false,
    disabled: true,
    label: 'Disabled unchecked',
    onChange: () => {},
  },
}

export const Controlled: Story = {
  args: {
    checked: false,
    label: 'Click here',
    onChange: () => {},
  },
  render: args => {
    const [checkedState, setCheckedState] = useState(args.checked)

    return (
      <>
        <Checkbox
          {...args}
          checked={checkedState}
          onChange={() => setCheckedState(prev => !prev)}
        />
        Current value: {checkedState.toString()}
      </>
    )
  },
}
