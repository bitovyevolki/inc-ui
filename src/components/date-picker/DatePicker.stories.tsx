import type { Meta, StoryObj } from '@storybook/react'

import { DatePicker } from './DatePicker'
import React from 'react'

const meta: Meta<typeof DatePicker> = {
  component: DatePicker,
  decorators: [
    Story => (
      <div style={{ margin: '10px', height: '400px' }}>
        <Story />
      </div>
    ),
  ],
  tags: ['autodocs'],
  title: 'Components/UI/DatePicker',
} satisfies Meta<typeof DatePicker>

export default meta
type Story = StoryObj<typeof meta>

export const Base: Story = {
  args: {
    label: 'Date of birth',
  },
}

export const WithError: Story = {
  args: {
    label: 'Date of birth',
    error: 'Incorrect date',
  },
}

export const Disabled: Story = {
  args: {
    label: 'Date of birth',
    disabled: true,
  },
}
