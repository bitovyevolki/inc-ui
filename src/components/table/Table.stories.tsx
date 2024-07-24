import type { Meta, StoryObj } from '@storybook/react'

import React from 'react'
import { Table } from './'

const meta = {
  title: 'Components/UI/Table',
  component: Table.Root,
  tags: ['autodocs'],
} satisfies Meta<typeof Table.Root>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: (
      <>
        <Table.Head>
          <Table.Row>
            <Table.HeadCell>Date of Payment</Table.HeadCell>
            <Table.HeadCell>End date of subscription</Table.HeadCell>
            <Table.HeadCell>Price</Table.HeadCell>
            <Table.HeadCell>Subscription Type</Table.HeadCell>
            <Table.HeadCell>Payment Type</Table.HeadCell>
            <Table.HeadCell />
          </Table.Row>
        </Table.Head>
        <Table.Body>
          <Table.Row>
            <Table.Cell>12.12.2022</Table.Cell>
            <Table.Cell>12.12.2022</Table.Cell>
            <Table.Cell>$10</Table.Cell>
            <Table.Cell>1 day</Table.Cell>
            <Table.Cell>Stripe</Table.Cell>
          </Table.Row>

          <Table.Row>
            <Table.Cell>12.12.2022</Table.Cell>
            <Table.Cell>12.12.2022</Table.Cell>
            <Table.Cell>$15</Table.Cell>
            <Table.Cell>3 days</Table.Cell>
            <Table.Cell>PayPal</Table.Cell>
          </Table.Row>

          <Table.Row>
            <Table.Cell>12.12.2022</Table.Cell>
            <Table.Cell>12.12.2022</Table.Cell>
            <Table.Cell>$25</Table.Cell>
            <Table.Cell>1 month</Table.Cell>
            <Table.Cell>PayPal</Table.Cell>
          </Table.Row>
        </Table.Body>
      </>
    ),
  },
}
