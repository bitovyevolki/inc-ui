import type { Meta, StoryObj } from '@storybook/react'

import { IPaginationProps, Pagination } from './Pagination'

const meta: Meta<typeof Pagination> = {
  argTypes: {
    onChangePage: { control: 'number' },
    portionSize: {
      control: 'select',
      options: ['10', '20', '50', '100'],
    },
  },
  component: Pagination,
  decorators: [
    (Story: () => JSX.Element) => (
      <div style={{ margin: '10px' }}>
        <Story />
      </div>
    ),
  ],
  tags: ['autodocs'],
  title: 'Components/UI/Pagination',
} satisfies Meta<typeof Pagination>

export default meta

type Story = StoryObj<typeof meta>

export const BaseExample: Story = (args: IPaginationProps) => {
  return <Pagination {...args} />
}

BaseExample.args = {
  page: 1,
  portionSize: 10,
  totalCount: 500,
}
