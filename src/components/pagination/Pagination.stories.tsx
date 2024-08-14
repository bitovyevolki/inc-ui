import type { Meta } from '@storybook/react'

import { Pagination } from './Pagination'
import { useState } from 'react'

const meta: Meta<typeof Pagination> = {
  component: Pagination,
  decorators: [
    Story => (
      <div style={{ margin: '10px' }}>
        <Story />
      </div>
    ),
  ],
  tags: ['autodocs'],
  title: 'Components/UI/Pagination',
} satisfies Meta<typeof Pagination>

export default meta

export const BaseExample = () => {
  const [page, setPage] = useState(1)
  const [portionSize, setPortionSize] = useState(10)

  return (
    <Pagination
      page={page}
      onChangePage={setPage}
      portionSize={portionSize}
      onChangePortionSize={setPortionSize}
      totalCount={500}
    />
  )
}
