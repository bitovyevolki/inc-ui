import type { Meta, StoryObj } from '@storybook/react'

import React from 'react'

import { DatePicker } from './DatePicker'

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

export const Base: Story = {
  args: {
    label: 'Date of birth',
  },
}

export const WithError: Story = {
  args: {
    error: 'Incorrect date',
    label: 'Date of birth',
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
    label: 'Date of birth',
  },
}
