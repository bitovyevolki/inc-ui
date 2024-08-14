import type { Meta, StoryObj } from '@storybook/react'

import { ISelectProps, Select } from './Select'
import { useState } from 'react'

const meta: Meta<typeof Select> = {
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: ['small', 'large'],
    },
    value: {
      control: { type: 'select' },
      options: ['10', '20', '30', '50', '100'],
    },
  },
  component: Select,
  decorators: [
    Story => (
      <div style={{ margin: '10px' }}>
        <Story />
      </div>
    ),
  ],
  tags: ['autodocs'],
  title: 'Components/UI/Select',
} satisfies Meta<typeof Select>

export default meta
type Story = StoryObj<typeof meta>

const options = [
  { label: '10', value: '10' },
  { label: '20', value: '20' },
  { label: '30', value: '30' },
  { label: '50', value: '50' },
  { label: '100', value: '100' },
]

export const BaseExample: Story = (args: ISelectProps) => {
  return <Select {...args} />
}

BaseExample.args = {
  options,
  variant: 'large',
  value: options[0].value,
}

export const LargeExample = () => {
  const [value, onChange] = useState(options[0].value)

  return (
    <Select
      value={value}
      onChange={onChange}
      title={'Portion size'}
      variant="large"
      options={options}
    />
  )
}

export const SmallExample = () => {
  const [value, onChange] = useState(options[0].value)

  return (
    <Select
      value={value}
      onChange={onChange}
      title={'Portion size'}
      variant="small"
      options={options}
    />
  )
}

export const WithoutLabelExample = () => {
  const [value, onChange] = useState(options[0].value)

  return <Select value={value} onChange={onChange} variant="large" options={options} />
}

export const WithPlaceholderExample = () => {
  const [value, onChange] = useState('')

  return (
    <Select
      placeholder="Country"
      value={value}
      onChange={onChange}
      variant="large"
      options={options}
    />
  )
}

export const WithErrorExample = () => {
  const [value, onChange] = useState(options[0].value)

  return (
    <Select
      value={value}
      onChange={onChange}
      variant="large"
      errorMessage="Some error"
      options={options}
      title="Portion size"
    />
  )
}

export const DisabledExample: Story = {
  args: {
    disabled: true,
    options,
    title: 'Portion size',
    value: options[0].value,
    variant: 'large',
  },
}
