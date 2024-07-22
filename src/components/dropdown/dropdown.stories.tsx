import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { Icon } from '../icon'
import { Dropdown, DropdownItem } from './dropdown'

const meta: Meta<typeof Dropdown> = {
  component: Dropdown,
  tags: ['autodocs'],
  title: 'Components/UI/DropdownMenu',
  argTypes: {
    title: {
      control: { type: 'text' },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    title: 'Уведомления',
  },
  render: args => (
    <Dropdown trigger={<Icon name="more" width={24} height={24} />} title={args.title}>
      <DropdownItem title="Learn" icon={<Icon name="play" />} arrow={false} />
      <DropdownItem title="Edit" icon={<Icon name="edit" />} />
      <DropdownItem title="Delete" icon={<Icon name="delete" />} />
    </Dropdown>
  ),
}
