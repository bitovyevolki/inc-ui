import type { Meta } from '@storybook/react'

import { useState } from 'react'

import { type IOption } from '../select'
import { Tabs } from './Tabs'

const meta: Meta<typeof Tabs> = {
  component: Tabs,
  decorators: [
    (Story: () => JSX.Element) => (
      <div style={{ margin: '10px' }}>
        <Story />
      </div>
    ),
  ],
  tags: ['autodocs'],
  title: 'Components/UI/Tabs',
} satisfies Meta<typeof Tabs>

export default meta

const options: ({ disabled: boolean } & IOption)[] = [
  { disabled: false, label: 'General information', value: '1' },
  { disabled: false, label: 'Devices', value: '2' },
  { disabled: false, label: 'Account Management', value: '3' },
  { disabled: false, label: 'My payments', value: '4' },
]

export const BaseExample = () => {
  const [value, setValue] = useState(options[0].value)

  return <Tabs onChange={setValue} options={options} value={value} />
}
