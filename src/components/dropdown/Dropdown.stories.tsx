import type { Meta, StoryObj } from '@storybook/react'

import { BellIcon } from '../../assets/icons/bell'
import { Dropdown, DropdownItem } from './Dropdown'

const meta: Meta<typeof Dropdown> = {
  argTypes: {
    title: {
      control: { type: 'text' },
    },
  },
  component: Dropdown,
  tags: ['autodocs'],
  title: 'Components/UI/DropdownMenu',
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    title: 'Dropdown menu',
  },
  render: args => (
    <Dropdown title={args.title} trigger={<BellIcon />}>
      <DropdownItem arrow={false} icon={<BellIcon />} title={'Learn'} />
      <DropdownItem icon={<BellIcon />} title={'Edit'} />
      <DropdownItem icon={<BellIcon />} title={'Delete'} />
    </Dropdown>
  ),
}
