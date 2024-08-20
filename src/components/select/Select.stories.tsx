import type { Meta, StoryObj } from '@storybook/react'

import { useState } from 'react'

import { ISelectProps, Select } from './Select'

const meta: Meta<typeof Select> = {
  argTypes: {
    value: {
      control: { type: 'select' },
      options: ['10', '20', '30', '50', '100'],
    },
    variant: {
      control: { type: 'radio' },
      options: ['small', 'large'],
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
  value: options[0].value,
  variant: 'large',
}

export const LargeExample = () => {
  const [value, onChange] = useState(options[0].value)

  return (
    <Select
      onChange={onChange}
      options={options}
      title={'Portion size'}
      value={value}
      variant={'large'}
    />
  )
}

export const SmallExample = () => {
  const [value, onChange] = useState(options[0].value)

  return (
    <Select
      onChange={onChange}
      options={options}
      title={'Portion size'}
      value={value}
      variant={'small'}
    />
  )
}

export const WithoutLabelExample = () => {
  const [value, onChange] = useState(options[0].value)

  return <Select onChange={onChange} options={options} value={value} variant={'large'} />
}

export const WithPlaceholderExample = () => {
  const [value, onChange] = useState('')

  return (
    <Select
      onChange={onChange}
      options={options}
      placeholder={'Country'}
      value={value}
      variant={'large'}
    />
  )
}

export const WithErrorExample = () => {
  const [value, onChange] = useState(options[0].value)

  return (
    <Select
      errorMessage={'Some error'}
      onChange={onChange}
      options={options}
      title={'Portion size'}
      value={value}
      variant={'large'}
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
