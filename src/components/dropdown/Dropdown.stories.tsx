import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { BellIcon } from '../../assets/icons/bell'
import { Dropdown, DropdownItem } from './Dropdown'

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
    title: 'Dropdown menu',
  },
  render: args => (
    <Dropdown
      trigger={<BellIcon />}
      title={args.title}
    >
      <DropdownItem title="Learn" icon={<BellIcon />} arrow={false} />
      <DropdownItem title="Edit" icon={<BellIcon />} />
      <DropdownItem title="Delete" icon={<BellIcon />} />
    </Dropdown>
  ),
}
